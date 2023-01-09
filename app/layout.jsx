import './globals.css'
import RootNavigation from './rootnavigation'
import RootStyleRegistry from './emotion';
import Providers from './providers';
import Footer from './footer';




// import Providers from "./providers";

// export default function RootLayout({ children }) {
//   return (
//     <html>
//       <head />
//       <body>
//         <Providers>{children}</Providers>
//       </body>
//     </html>
//   );
// }


export default function RootLayout({ children, session }) {
console.log("🚀 ~ file: layout.jsx:25 ~ RootLayout ~ session", session)

  return (
    <html lang="en" className="h-full">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* Div für Nav + Body = 100 vh */}
        <Providers>
          <div className='flex flex-col min-h-screen bg-gray-50'>
            <div>
              <RootNavigation />
            </div>

            <div className="relative flex-grow w-full px-4 mx-auto sm:px-6">
              {/*mantine*/}
              <RootStyleRegistry>
                {children}
              </RootStyleRegistry>
            </div>
          </div>

          <footer className="relative flex items-center justify-center w-full h-24 mt-32 "><Footer /></footer>
        </Providers>
      </body>


    </html>
  )
}
