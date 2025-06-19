import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { AuthProvider } from '@/components/providers/AuthProvider'
import { ToastProvider } from '@/components/providers/ToastProvider'
import { NotificationProvider } from '@/components/providers/NotificationProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AroundTheWorld - Collaborative Travel Experience Exchange',
  description: 'Connect with seasoned travelers and local experts for authentic, cost-efficient travel experiences.',
  keywords: 'travel, itineraries, local experiences, travel platform, collaborative travel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ToastProvider>
            <NotificationProvider>
              <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
              </div>
            </NotificationProvider>
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
