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
  const apiEndpoint = '/api/email'

  const response = await fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const result = await response.json()

  if (!response.ok) {
    throw new Error(result.error || 'Failed to dispatch inquiry')
  }

  return result
}