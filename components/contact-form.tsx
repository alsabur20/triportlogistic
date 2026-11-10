"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Anchor,
  Building2,
  Send,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Globe,
} from "lucide-react"
import { company } from "@/lib/company"
import { sendEmail } from "@/utils/send-email"

export const FREIGHT_SERVICE_OPTIONS = [
  "Ocean Freight (FCL & LCL Container Shipping)",
  "Ocean Freight — China to Dubai (Jebel Ali)",
  "Ocean Freight — Europe / USA to Dubai (Jebel Ali)",
  "Air Freight Cargo & Charters (DXB / DWC)",
  "Dubai & UAE Customs Clearance (Mirsal II / JAFZA)",
  "3PL Warehousing & Distribution (Dubai South / JAFZA)",
  "GCC Cross-Border Land Freight (Saudi Arabia / Oman / GCC)",
  "Project Cargo & Heavy Lift Logistics",
]

export interface ContactFormProps {
  /**
   * Layout presentation style:
   * - "split": 2-column layout with office headquarters and desk info on the left, form on the right (used on /contact).
   * - "centered": Centered headline with a focused proposal card (used on Home and Services).
   * - "inline": Form card only without outer section wrapper.
   */
  variant?: "split" | "centered" | "inline"

  /**
   * Visual theme styling:
   * - "dark": Dark container (e.g. bg-gray-950) with glowing accents and dark card.
   * - "light": Light container (e.g. bg-white / bg-gray-50) with clean neutral borders.
   * Defaults to "light" for split variant, "dark" for centered variant.
   */
  theme?: "light" | "dark"

  /**
   * Optional background override class for the outer section.
   * e.g., "bg-white", "bg-gray-50", "bg-gray-900", "bg-gray-950", "bg-black".
   */
  bgClass?: string

  /** Custom section ID (useful for anchor links, e.g. "quote-section") */
  id?: string

  /** Custom title, subtitle, and badge text */
  badgeText?: string
  title?: string
  subtitle?: string

  /** Default service selected in dropdown */
  defaultService?: string

  /** Extra class names */
  className?: string
}

export function ContactForm({
  variant = "split",
  theme,
  bgClass,
  id,
  badgeText,
  title,
  subtitle,
  defaultService,
  className = "",
}: ContactFormProps) {
  // Determine effective theme
  const isDark = theme ? theme === "dark" : variant === "centered"

  const { dubai, jebelAliHub, pakistan, germany } = company.offices

  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    service: defaultService || FREIGHT_SERVICE_OPTIONS[0],
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [refId, setRefId] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const res = await sendEmail({
        name: formData.name,
        companyName: formData.companyName,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        subject: `${variant === "centered" ? "Quick Freight Quote" : "Freight Inquiry"}: ${formData.service} - ${formData.companyName || formData.name}`,
        message: formData.message || (variant === "centered" ? "Quick quote request" : "Contact form submission"),
      })

      setRefId(res.refId || `TL-${Math.floor(100000 + Math.random() * 900000)}`)
      setSubmitted(true)
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Unable to dispatch your inquiry to our operations desk right now. Please try again or connect via WhatsApp below."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const getDirectWhatsAppUrl = () => {
    const text = `Hello Triport Logistics Operations Desk,\n\nI am contacting you regarding freight services:\n- Name: ${formData.name || "N/A"}\n- Company: ${formData.companyName || "N/A"}\n- Email: ${formData.email || "N/A"}\n- Phone: ${formData.phone || "N/A"}\n- Service Needed: ${formData.service}\n- Cargo Details: ${formData.message || "Commercial logistics inquiry"}`
    return `https://wa.me/971566569927?text=${encodeURIComponent(text)}`
  }

  // Common inner card content (Form & Success state)
  const renderFormCard = () => (
    <div
      className={`p-6 sm:p-8 shadow-sm transition-colors ${
        isDark
          ? "bg-gray-900 border border-gray-800 text-white shadow-2xl"
          : "bg-gray-50 border border-gray-200 text-gray-900"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${
            isDark ? "bg-[#ff4800]/20 text-[#ff4800]" : "bg-[#ff4800]/10 text-[#ff4800]"
          }`}
        >
          <Zap className="w-3 h-3" />
          <span>{variant === "centered" ? "Fast B2B Freight Quote" : "Fast Response Desk"}</span>
        </span>
        <span className={`text-[11px] font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          SLA: Under 2 Hours
        </span>
      </div>

      <h3 className={`text-2xl font-extrabold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
        {variant === "centered" ? "Request a Quick Shipping Proposal" : "Send a Quick Freight Inquiry"}
      </h3>
      <p className={`text-xs sm:text-sm mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
        Complete the corporate details below to receive competitive container pricing, transit estimates, and route schedules.
      </p>

      {submitted ? (
        <div
          className={`p-6 text-center space-y-4 border ${
            isDark
              ? "bg-gray-950/80 border-green-500/40 text-gray-200"
              : "bg-white border-green-300 text-gray-900"
          }`}
        >
          <div className="w-12 h-12 bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-bold text-[#ff4800] uppercase tracking-wider">
              Inquiry Dispatched · Ref #{refId}
            </span>
            <h4 className={`text-lg font-bold mt-1 ${isDark ? "text-white" : "text-gray-900"}`}>
              Thank you, {formData.name}!
            </h4>
          </div>
          <p className={`text-xs sm:text-sm max-w-sm mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Your inquiry has been logged. A senior trade specialist will review your request and contact you at{" "}
            <span className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{formData.email}</span> regarding{" "}
            <span className="text-[#ff4800] font-semibold">{formData.service}</span>.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={getDirectWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-5 py-2.5 text-xs uppercase tracking-wider transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Follow Up on WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false)
                setFormData({
                  name: "",
                  companyName: "",
                  email: "",
                  phone: "",
                  service: defaultService || FREIGHT_SERVICE_OPTIONS[0],
                  message: "",
                })
              }}
              className={`inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold transition-colors ${
                isDark
                  ? "bg-gray-800 hover:bg-gray-700 text-gray-200"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              New Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {submitError && (
            <div
              role="alert"
              className="border border-red-300 bg-red-50 dark:bg-red-950/40 dark:border-red-800 p-3.5 text-xs sm:text-sm text-red-700 dark:text-red-300 space-y-2"
            >
              <p className="font-semibold">{submitError}</p>
              <div className="flex items-center gap-2 pt-1">
                <a
                  href={getDirectWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold underline hover:text-[#ff4800]"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Send via WhatsApp instead</span>
                </a>
                <span>•</span>
                <a href={`tel:${company.contact.phone}`} className="hover:underline">
                  Call: {company.contact.phoneDisplay}
                </a>
              </div>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                className={`block text-xs font-bold uppercase mb-1 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Full Name *
              </label>
              <Input
                type="text"
                name="name"
                placeholder="e.g. David Harrison"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="rounded-none bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 text-sm focus:border-[#ff4800] focus:ring-1 focus:ring-[#ff4800]"
              />
            </div>

            <div>
              <label
                className={`block text-xs font-bold uppercase mb-1 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Company Name *
              </label>
              <Input
                type="text"
                name="companyName"
                placeholder="e.g. Apex Global Trading LLC"
                required
                value={formData.companyName}
                onChange={handleInputChange}
                className="rounded-none bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 text-sm focus:border-[#ff4800] focus:ring-1 focus:ring-[#ff4800]"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                className={`block text-xs font-bold uppercase mb-1 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Business Email *
              </label>
              <Input
                type="email"
                name="email"
                placeholder="e.g. david@company.com"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="rounded-none bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 text-sm focus:border-[#ff4800] focus:ring-1 focus:ring-[#ff4800]"
              />
            </div>

            <div>
              <label
                className={`block text-xs font-bold uppercase mb-1 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Phone / WhatsApp Number *
              </label>
              <Input
                type="tel"
                name="phone"
                placeholder="e.g. +971 50 123 4567"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="rounded-none bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 text-sm focus:border-[#ff4800] focus:ring-1 focus:ring-[#ff4800]"
              />
            </div>
          </div>

          <div>
            <label
              className={`block text-xs font-bold uppercase mb-1 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Primary Service / Route *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full bg-white border border-gray-300 text-gray-900 font-medium p-2.5 text-sm rounded-none focus:outline-none focus:border-[#ff4800] focus:ring-1 focus:ring-[#ff4800]"
            >
              {FREIGHT_SERVICE_OPTIONS.map((svc) => (
                <option key={svc} className="bg-white text-gray-900 py-1" value={svc}>
                  {svc}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              className={`block text-xs font-bold uppercase mb-1 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Cargo Details
            </label>
            <Textarea
              name="message"
              rows={3}
              placeholder="e.g. 1x 40ft container from Shanghai to Jebel Ali, or approximate weight/dimensions..."
              value={formData.message}
              onChange={handleInputChange}
              className="rounded-none bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 text-sm focus:border-[#ff4800] focus:ring-1 focus:ring-[#ff4800]"
            />
          </div>

          <div className="pt-1 flex flex-col sm:flex-row gap-3">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-[#ff4800] hover:bg-[#e63f00] text-white py-3 font-bold rounded-none text-sm transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>
                {isSubmitting
                  ? "Dispatching..."
                  : variant === "centered"
                  ? "Get Instant Freight Proposal"
                  : "Submit Inquiry"}
              </span>
            </Button>

            <a
              href={getDirectWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-5 py-3 text-sm transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div
            className={`flex items-center justify-center gap-4 pt-2 text-[11px] ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
              <span>Commercial Data Confidentiality</span>
            </span>
            <span>•</span>
            <span>Operations Desk Notification</span>
          </div>
        </form>
      )}
    </div>
  )

  // 1. If inline variant: render the card directly
  if (variant === "inline") {
    return <div className={className}>{renderFormCard()}</div>
  }

  // 2. If centered variant: full-width centered section (Home / Services)
  if (variant === "centered") {
    const defaultBg = isDark ? "bg-gray-950 text-white" : "bg-white text-gray-900"
    const sectionBg = bgClass || defaultBg

    return (
      <section
        id={id || "quote-section"}
        className={`py-16 scroll-mt-20 relative overflow-hidden ${sectionBg} ${className}`}
      >
        {/* Glow Accents for dark theme */}
        {isDark && (
          <>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff4800]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          </>
        )}

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-2 ${
                isDark ? "bg-[#ff4800]/20 text-[#ff4800]" : "bg-[#ff4800]/10 text-[#ff4800]"
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>{badgeText || "Fast B2B Freight Quote"}</span>
            </div>
            <h2 className={`text-2xl sm:text-4xl font-extrabold tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
              {title || "Request a Quick Shipping Proposal"}
            </h2>
            <p className={`text-sm sm:text-base mt-2 max-w-xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              {subtitle || "Direct contracts with major shipping lines. Get competitive rates and transit times in under 2 hours."}
            </p>
          </div>

          {renderFormCard()}
        </div>
      </section>
    )
  }

  // 3. Default "split" variant (2 columns with offices on left, form on right)
  const defaultBg = isDark ? "bg-gray-950 text-white" : "bg-white text-gray-900"
  const sectionBg = bgClass || defaultBg

  return (
    <section id={id || "contact-form"} className={`py-16 sm:py-20 ${sectionBg} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14">
          {/* Contact Information & Office Details */}
          <div>
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3 ${
                isDark ? "bg-[#ff4800]/20 text-[#ff4800]" : "bg-[#ff4800]/10 text-[#ff4800]"
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>{badgeText || "Global Freight Network"}</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
              {title || "Connect with Our Freight Operations Desk"}
            </h2>

            <p className={`text-base leading-relaxed mb-8 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {subtitle ||
                "Discuss your supply chain requirements, request bespoke container rates, or schedule customs brokerage clearance with our regional specialists."}
            </p>

            <div className="space-y-5">
              {/* Dubai Global HQ */}
              <div
                className={`flex items-start space-x-4 p-4 border ${
                  isDark ? "bg-gray-900 border-gray-800" : "bg-gray-50 border-gray-200"
                }`}
              >
                <MapPin className="w-6 h-6 text-[#ff4800] mt-1 shrink-0" />
                <div>
                  <h3 className={`font-bold text-sm sm:text-base ${isDark ? "text-white" : "text-gray-900"}`}>
                    {dubai.name}
                  </h3>
                  <p className="text-xs text-[#ff4800] font-semibold mt-0.5">Global Corporate Headquarters · UAE</p>
                  <p className={`text-xs sm:text-sm mt-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    {dubai.building}, {dubai.city}, {dubai.country}
                  </p>
                  <p className={`text-xs mt-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                    Mon - Fri: 08:30 – 18:30 | Sat: 09:00 – 14:00
                  </p>
                </div>
              </div>

              {/* JAFZA Port Hub */}
              <div
                className={`flex items-start space-x-4 p-4 border ${
                  isDark ? "bg-gray-900 border-gray-800" : "bg-gray-50 border-gray-200"
                }`}
              >
                <Anchor className="w-6 h-6 text-[#ff4800] mt-1 shrink-0" />
                <div>
                  <h3 className={`font-bold text-sm sm:text-base ${isDark ? "text-white" : "text-gray-900"}`}>
                    {jebelAliHub.name}
                  </h3>
                  <p className="text-xs text-[#ff4800] font-semibold mt-0.5">DP World Container Port Operations · UAE</p>
                  <p className={`text-xs sm:text-sm mt-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    {jebelAliHub.building}, {jebelAliHub.city}, {jebelAliHub.country}
                  </p>
                  <p className={`text-xs mt-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                    24/7 Gate &amp; Terminal Vessel Handling
                  </p>
                </div>
              </div>

              {/* Pakistan Office */}
              <div
                className={`flex items-start space-x-4 p-4 border ${
                  isDark ? "bg-gray-900 border-gray-800" : "bg-gray-50 border-gray-200"
                }`}
              >
                <Building2 className="w-6 h-6 text-[#ff4800] mt-1 shrink-0" />
                <div>
                  <h3 className={`font-bold text-sm sm:text-base ${isDark ? "text-white" : "text-gray-900"}`}>
                    {pakistan.name}
                  </h3>
                  <p className="text-xs text-[#ff4800] font-semibold mt-0.5">{pakistan.label}</p>
                  <p className={`text-xs sm:text-sm mt-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    {pakistan.building}, {pakistan.city}, {pakistan.country}
                  </p>
                  <p className={`text-xs mt-1 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    Direct Phone:{" "}
                    <a
                      href={`tel:${pakistan.phone}`}
                      className={`font-semibold hover:text-[#ff4800] ${isDark ? "text-white" : "text-gray-900"}`}
                    >
                      {pakistan.phoneDisplay}
                    </a>
                  </p>
                </div>
              </div>

              {/* Germany European Desk */}
              <div
                className={`flex items-start space-x-4 p-4 border ${
                  isDark ? "bg-gray-900 border-gray-800" : "bg-gray-50 border-gray-200"
                }`}
              >
                <Globe className="w-6 h-6 text-[#ff4800] mt-1 shrink-0" />
                <div>
                  <h3 className={`font-bold text-sm sm:text-base ${isDark ? "text-white" : "text-gray-900"}`}>
                    {germany.name}
                  </h3>
                  <p className="text-xs text-[#ff4800] font-semibold mt-0.5">{germany.label}</p>
                  <p className={`text-xs sm:text-sm mt-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    {germany.building}, {germany.city}, {germany.country}
                  </p>
                  <p className={`text-xs mt-1 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    Europe Desk Email:{" "}
                    <a
                      href={`mailto:${germany.email}`}
                      className={`font-semibold hover:text-[#ff4800] ${isDark ? "text-white" : "text-gray-900"}`}
                    >
                      {germany.email}
                    </a>
                  </p>
                </div>
              </div>

              {/* Direct Phone & Email */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div
                  className={`flex items-start space-x-3 p-3 border ${
                    isDark ? "bg-gray-900 border-gray-800" : "bg-gray-50 border-gray-200"
                  }`}
                >
                  <Phone className="w-5 h-5 text-[#ff4800] mt-0.5 shrink-0" />
                  <div>
                    <h4 className={`font-bold text-xs ${isDark ? "text-gray-200" : "text-gray-900"}`}>
                      Direct Line (UAE)
                    </h4>
                    <a
                      href={`tel:${company.contact.phone}`}
                      className={`text-xs sm:text-sm font-semibold hover:text-[#ff4800] transition-colors ${
                        isDark ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      {company.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div
                  className={`flex items-start space-x-3 p-3 border ${
                    isDark ? "bg-gray-900 border-gray-800" : "bg-gray-50 border-gray-200"
                  }`}
                >
                  <Mail className="w-5 h-5 text-[#ff4800] mt-0.5 shrink-0" />
                  <div>
                    <h4 className={`font-bold text-xs ${isDark ? "text-gray-200" : "text-gray-900"}`}>
                      Procurement Email
                    </h4>
                    <a
                      href={`mailto:${company.contact.email}`}
                      className={`text-xs sm:text-sm font-semibold hover:text-[#ff4800] transition-colors ${
                        isDark ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      {company.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div>{renderFormCard()}</div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
