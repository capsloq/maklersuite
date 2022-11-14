

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
      <body>
        {/*mantine*/}
        <RootStyleRegistry>
          <RootNavigation />
          {children}
        </RootStyleRegistry>
      </body>
    </html>
  )
}
