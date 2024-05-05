"use server";
import ContactFormEmail from '@/email/email';
import { getErrorMessage, validateInput } from '@/lib/utils';
import React from 'react';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY_PER);

export const sendEmail = async (formData: FormData) => {
    const message = formData.get('message');
    const senderEmail = formData.get('senderEmail');

    if (!validateInput(senderEmail, 500)) {
        return {
            error: 'Invalid Sender Email'
        }
    }

    if (!validateInput(message, 1000)) {
        return {
            error: 'Invalid message'
        }
    }

    let data;
    try {
        await resend.emails.send({
            from: "Contact From <onboarding@resend.dev>",
            to: 'maharjanajay0007@gmail.com',
            subject: 'Contact from Portfolio',
            reply_to: senderEmail as string,
            //text: message as string,
            react: React.createElement(
                ContactFormEmail, 
                {message: message as string, senderEmail: senderEmail as string}
            )
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    }

    return {
        data,
      };
       
}
