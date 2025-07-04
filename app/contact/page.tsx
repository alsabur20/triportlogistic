import { PageHero } from "@/components/page-hero"
import { PageNavigation } from "@/components/page-navigation"
import { ContactForm } from "@/components/contact-form"
import { GoogleMap } from "@/components/google-map"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Triport Logistics",
  description:
    "Reach out to Triport Logistics for freight inquiries, support, or business partnerships. We're here to help 24/7.",
  keywords: [
    "contact Triport Logistics", "logistics support", "cargo inquiries", "freight contact", "customer service"
  ],
  openGraph: {
    images: [
      {
        url: "/og-image.jpg", // Recommended 1200x630 image
        width: 1200,
        height: 630,
        alt: "Triport Logistics - Global Freight Solutions",
      },
    ],
  },
}


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
