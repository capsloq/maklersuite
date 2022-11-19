

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
      <body className='flex flex-col h-screen bg-gray-50'>
        <div>
          <RootNavigation />
        </div>

        <div className="relative flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6">
          {/*mantine*/}
          <RootStyleRegistry>
            {children}
          </RootStyleRegistry>
        </div>
        <div className='mt-32'>
          <footer className="w-full h-24 bg-blue-400">hallo ich bin der footer</footer>
        </div>

      </body>
    </html>
  )
}
