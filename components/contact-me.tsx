"use client"
import React from 'react'
import SectionHeader from './section-header'
import { motion } from 'framer-motion'
import { useActiveSectionHooks } from '@/lib/activeSectionHooks'
import { sendEmail } from '@/actions/sendEmail'
import { SubmitButton } from './submit-btn'
import toast from 'react-hot-toast'

function Contact() {
    const { ref } = useActiveSectionHooks("Contact", 0.4)

  return (
    <motion.section
        id='contact'
        ref={ref}
        className='
                mb-20
                sn:mb-28
                w-[min(100%,38rem)]
                text-center
            '
        initial={{
            opacity: 0
        }}
        whileInView={{
            opacity: 1
        }}
        transition={{
            duration: 1
        }}
        viewport={{
            once: true
        }}
    >
        <SectionHeader>Contact Me</SectionHeader>
        <p className='text-gray-650 -mt-5'>Please contact me directly at <a 
        className='underline' href='mailto:maharjanajay0007@gmail.com'>maharjanajay0007@gmail.com</a> 
        &nbsp; or through this form</p>

        <form className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          console.log(error)

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
        >
            <input 
                type='email' 
                name='senderEmail'
                className='
                    h-14 
                    rounded-lg 
                    border
                    border-black/10
                    p-2
                '
                required
                maxLength={500}
                placeholder='Email'
            />
            <textarea className='h-52 my-3 rounded-lg border border-black/10 p-2' 
                placeholder='Message'
                required
                maxLength={1000}
                name='message'
            />
            <SubmitButton />
        </form>
    </motion.section>
  )
}

export default Contact