import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Correntes do Crepúsculo',
  description: 'Criado por Moreno',
  icons: {
    icon: '/icon.ico', // Substitua pelo nome do seu arquivo
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
