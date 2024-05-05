
import React from 'react'
import {
    Html, Body, Head, Heading, Hr, Container, Preview, Section, Text
} from '@react-email/components'
import {Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = {
    message : string,
    senderEmail : string
}

function ContactFormEmail({
    message, senderEmail
}: ContactFormEmailProps) {
  return <Html>
    <Head />
    <Preview>New Message from portfolio</Preview>
    <Tailwind>
        <Body className='bg-gray-100 text-blue'>
            <Container>
                <Section className='bg-white border border-black/10 my-10 px-10 py-4 rounded-md'>
                    <Heading className='leading-tight'>Received message from contact form</Heading>
                    <Text>{message}</Text>
                    <Hr />
                    <Text>The sender's emails: {senderEmail}</Text>
                </Section>
            </Container>
        </Body>
    </Tailwind>
  </Html>
}

export default ContactFormEmail