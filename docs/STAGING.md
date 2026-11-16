# Staging deployment

The `stage` branch is deployed by Vercel as a Preview deployment. Pushes to
that branch create a staging build without changing production.

Configure these variables in Vercel under **Settings > Environment Variables**
with the **Preview** environment selected:

- `DATABASE_URI`: a separate staging Supabase database
- `DATABASE_POOL_MAX`: `1`
- `PAYLOAD_SECRET`: a dedicated staging secret
- `R2_BUCKET`: a separate staging bucket
- `R2_ACCESS_KEY_ID`
- `R2_SECRET_ACCESS_KEY`
- `R2_ENDPOINT`
- `R2_PUBLIC_URL`: the staging bucket's `r2.dev` public URL
- `RESEND_API_KEY`: a staging email key or a restricted test key

Do not point staging at production's database or media bucket. Run the Payload
migrations against the staging database before testing the dashboard:

```bash
pnpm migrate
```

Vercel automatically deploys the `stage` branch as a Preview deployment. Use
the generated Preview URL for testing. Production variables should remain
scoped to Vercel's **Production** environment.
