import type { Metadata } from 'next'

// CSS import removed to prevent previewer build errors. 
// Ensure 'globals.css' exists in your actual GitHub repo at 'app/globals.css'.
// import './globals.css'

export const metadata: Metadata = {
  title: 'The Etymologist',
  description: 'Roots and Vibes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
