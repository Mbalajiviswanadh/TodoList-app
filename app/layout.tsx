import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'To Do List✅',
  description: 'Simple ToDo App to make your plans easier!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html  data-theme="nord" lang="en">
      <body  className={inter.className}>
        <div  className='mx-auto'>
        {children}
        </div>
        </body>
    </html>
  )
}
