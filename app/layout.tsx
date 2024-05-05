import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import ActiveSectionContextProvider from '@/components/context/active-section-context'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Ajay | Personal Portfolio`,
  description: 'Ajay Maharjan is a full-stack developer with 2 years of experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className = "!scroll-smooth">
      <body className={`${inter.className}
        bg-gray-50 text-gray-950 pt-28 sm:pt-36`}>
          <div className = {`
            bg-[#f5d0d1] absolute 
              top-[-6rem]
              -z-10
              right-[5rem]
              h-[31.25rem] w-[31.25rem] rounded-full 
              blur-[16rem]
              sm:w-[58.75rem]
          `}>
          </div>
          <div className = {`
            bg-[#d4d1f0] absolute 
              top-[-1rem] 
              -z-10
              left-[-35rem] 
              h-[31.25rem] w-[50.25rem] rounded-full 
              blur-[16rem]
              sm:w-[58.75rem] md:left-[-33rem]
              lg:left-[-28rem]
              xl:left-[-15rem] 
              2xl:left-[-5rem]`}>
          </div>
          <ActiveSectionContextProvider>
            <Header />
            {children}
          </ActiveSectionContextProvider>
          
      </body>
    </html>
  )
}
