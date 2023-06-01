import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kaufkrake',
  description: 'Eine APP um den Einkauf zu erleichtern',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`min-h-screen ${inter.className}`}>
      {children}
    </div>
  )
}
