import { FormData } from '@/components/contact-form';

export function sendEmail(data: FormData): Promise<{ message: string }> {
    const apiEndpoint = '/api/email';

    return new Promise((resolve, reject) => {
        fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}