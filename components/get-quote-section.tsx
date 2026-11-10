"use client"

import { ContactForm, type ContactFormProps } from "./contact-form"

/**
 * GetQuoteSection is now powered by the unified ContactForm component.
 * Defaults to the centered dark quote section, with full customization support.
 */
export function GetQuoteSection(props: Omit<ContactFormProps, "variant">) {
  return <ContactForm variant="centered" theme="dark" {...props} />
}

export default GetQuoteSection
