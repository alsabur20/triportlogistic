export interface LeadFormData {
  name: string
  email: string
  phone?: string
  companyName?: string
  service?: string
  subject?: string
  message?: string
}

export interface SendEmailResponse {
  success: boolean
  refId?: string
  message: string
}

export async function sendEmail(data: LeadFormData): Promise<SendEmailResponse> {
  const response = await fetch('/api/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const result = await response.json()

  if (!response.ok || !result.success) {
    throw new Error(result.error || result.message || 'Unable to send the inquiry right now.')
  }

  return result
}