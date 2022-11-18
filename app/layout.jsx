

import './globals.css'
import RootNavigation from './rootnavigation'
import RootStyleRegistry from './emotion';



export default function RootLayout({ children }) {

  return (
    <html lang="en" className="h-full">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='h-screen flex flex-col bg-gray-50'>
        <div>
          <RootNavigation />
        </div>

        <div className="flex-grow mx-auto max-w-7xl w-full px-4 sm:px-6 relative">
          {/*mantine*/}
          <RootStyleRegistry>
            {children}
          </RootStyleRegistry>
        </div>
        <div className=''>
          <footer className="w-full h-24 bg-blue-400">hallo ich bin der footer</footer>
        </div>

      </body>
    </html>
  )
}
