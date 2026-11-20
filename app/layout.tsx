import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { NextAuthProvider } from "@/components/providers/next-auth-provider"
import { AuthProvider } from "@/contexts/auth-context"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "Aukier - Find Trusted Skilled Workers in Malawi",
  description:
    "Connect with verified skilled workers across Malawi. From plumbers to developers, find quality services you can trust.",
  generator: "v0.app",
  icons: {
    icon: '/android-chrome-512x512.png',
    apple: '/android-chrome-512x512.png',
  },
  openGraph: {
    title: "Aukier - Find Trusted Skilled Workers in Malawi",
    description: "Connect with verified skilled workers across Malawi. From plumbers to developers, find quality services you can trust.",
    images: ['/android-chrome-512x512.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <NextAuthProvider>
          <AuthProvider>
            <Navbar />
            <Suspense fallback={null}>{children}</Suspense>
            <Analytics />
          </AuthProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
