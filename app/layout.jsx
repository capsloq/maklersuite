

import './globals.css'
import RootNavigation from './rootnavigation'
import RootStyleRegistry from './emotion';



export default function RootLayout({ children }) {

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className=''>
        {/*mantine*/}
        <RootStyleRegistry>
          <div class="flex flex-col h-screen">
            <div>
              <RootNavigation />
            </div>
            <div className="relative flex-grow">
              {children}
            </div>
            <footer className="w-full h-24 bg-blue-400">hallo ich bin der footer</footer>
          </div>
        </RootStyleRegistry>
      </body>
    </html>
  )
}
