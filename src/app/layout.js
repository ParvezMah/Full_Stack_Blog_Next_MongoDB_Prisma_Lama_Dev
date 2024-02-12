import Navbar from '@/Components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/Components/Footer/Footer'
import ThemeContextProvider from '@/Context/ThemeContextProvider'
import ThemeProvider from '@/Provides/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Full Stack Blog',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className='container'>
              <div className='wrapper'>
                <Navbar></Navbar>
                  {children}            
                <Footer></Footer>
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
