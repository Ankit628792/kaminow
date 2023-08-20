import Footer from '@/components/Footer'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Kaminow',
  description: 'developed by ak',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex flex-col min-h-screen w-full overflow-x-hidden'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
