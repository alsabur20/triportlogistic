import { PageHero } from "@/components/page-hero"
import { PageNavigation } from "@/components/page-navigation"
import { ContactForm } from "@/components/contact-form"
import { GoogleMap } from "@/components/google-map"

export default function Contact() {
  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our logistics experts today"
        backgroundImage="/header.jpg?height=400&width=1200"
      />
      <PageNavigation />
      <ContactForm />
      <GoogleMap />
    </div>
  )
}
