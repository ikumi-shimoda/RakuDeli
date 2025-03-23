import './globals.css'
import Header from './components/Header'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body className='bg-gray-400 max-w-screen-lg mx-auto'>
        <Header />
        {children}
      </body>
    </html>
  )
}
