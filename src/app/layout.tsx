import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Álex Maciel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          <Header />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  )
}
