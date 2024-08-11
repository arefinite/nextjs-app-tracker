import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import { ClerkProvider } from '@clerk/nextjs'
import Providers from '@/providers/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AppTracker - Track your job applications',
  description: 'You can track your job applications by this application',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          unsafe_disableDevelopmentModeWarnings: true,
        },
      }}
    >
      <html lang='en'>
        <body className={inter.className}>
          <Providers>
            <section className='flex flex-col min-h-screen'>
              <Header />
              <main className='bg-primary-foreground  mx-auto max-w-[24rem] sm:max-w-2xl  md:max-w-4xl xl:min-w-[1400px] container flex-1 grid relative -mt-20 rounded-lg w-full'>
                {children}
              </main>
              <Footer />
            </section>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
