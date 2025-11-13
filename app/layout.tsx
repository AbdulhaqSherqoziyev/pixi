import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Link from "next/link"
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Pixi',
  description: 'Created with v0',
  generator: '',
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>

        {children}

        {/* Telegram badge */}
        <Link
  href="https://t.me/+leEvpWkMfmIzZDQy"
  target="_blank"
  className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-full shadow-lg hover:opacity-80 transition select-none"
>
  &lt; Dev Abdulhaq Sherqo'ziyev &gt;
</Link>


        <Analytics />
      </body>
    </html>
  )
}
