import pg from 'pg'

const client = new pg.Client({ connectionString: process.env.DATABASE_URI })

async function main() {
  await client.connect()
  const args = process.argv.slice(2)
  const command = args[0] || 'list'

  if (command === 'list') {
    const res = await client.query('SELECT id, name, email, role, created_at FROM public.users ORDER BY id ASC')
    console.log('\n--- Current Users in Database ---')
    if (res.rows.length === 0) {
      console.log('No users found in database.')
      console.log('Visit http://localhost:3000/admin to see the "Create First User" setup.')
    } else {
      res.rows.forEach((u) => {
        console.log(`- [ID: ${u.id}] ${u.email} | Name: "${u.name}" | Role: ${u.role}`)
      })
    }
    console.log('---------------------------------\n')
  } else if (command === 'make-admin') {
    const email = args[1]
    if (!email) {
      console.error('Error: Please provide the email. Example: npm run users make-admin user@example.com')
      process.exit(1)
    }
    const res = await client.query("UPDATE public.users SET role = 'admin' WHERE email = $1 RETURNING id, email, role", [email])
    if (res.rowCount === 0) {
      console.error(`User with email "${email}" not found.`)
    } else {
      console.log(`\n✅ Success! User "${email}" is now a Super Admin (role: 'admin').`)
    }
  } else if (command === 'make-author') {
    const email = args[1]
    if (!email) {
      console.error('Error: Please provide the email. Example: npm run users make-author user@example.com')
      process.exit(1)
    }
    const res = await client.query("UPDATE public.users SET role = 'author' WHERE email = $1 RETURNING id, email, role", [email])
    if (res.rowCount === 0) {
      console.error(`User with email "${email}" not found.`)
    } else {
      console.log(`\n✅ Success! User "${email}" is now an Author (role: 'author').`)
    }
  } else if (command === 'wipe') {
    // Delete all users and cascade
    await client.query('TRUNCATE TABLE public.users CASCADE')
    console.log('\n✅ All users have been deleted from the database!')
    console.log('👉 Visit http://localhost:3000/admin')
    console.log('Payload will automatically show the "Create First User" onboarding screen.\n')
  } else {
    console.log(`Unknown command: ${command}`)
    console.log('\nAvailable commands:')
    console.log('  npm run users                         - List all users and their roles')
    console.log('  npm run users make-admin <email>      - Promote a user to Super Admin')
    console.log('  npm run users make-author <email>     - Change a user to Author')
    console.log('  npm run users wipe                    - Delete all users (resets initial setup wizard)')
  }

  await client.end()
}

main().catch(async (err) => {
  console.error('Database error:', err)
  try { await client.end() } catch {}
  process.exit(1)
})
