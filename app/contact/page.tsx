import { PageHero } from "@/components/page-hero"
import { PageNavigation } from "@/components/page-navigation"
import { ContactForm } from "@/components/contact-form"
import { GoogleMap } from "@/components/google-map"

export default function Contact() {
  return (
    <div>
      <PageHero
        title="Contact Us"
        backgroundImage="/header.jpg?height=400&width=1200"
      />
      <ContactForm />
      <GoogleMap />
    </div>
  )
}
