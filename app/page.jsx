import Image from 'next/image'
import SearchBar from './searchbar'





export default async function Home() {
  // const searchResults = await getSearchResults('93055');


  // console.log("🚀 ~ file: page.jsx ~ line 29 ~ Home ~ searchResults", JSON.stringify(searchResults,null,2))
  return (
    <main className=''>
      <div className='absolute inset-0 '>

        {/* <Image 
        src={catImage}
        alt="Picture of a cat"    
        className='object-cover w-full h-full'
     

        /> */}

        <img
          className="object-cover w-full h-full"
          src="/cat.jpg"
          alt="People working on laptops"
        />
      </div>
      <div className="px-6 lg:px-8">
      <div className="absolute inset-0 flex justify-center top-1/4">
        {/* Suche */}
        <div className="max-w-4xl space-y-8">
       
            <h1 className="text-2xl tracking-tight text-gray-800 sm:text-center sm:text-4xl">
              Neue <span className='font-extrabold'>Wohnung?</span> Jetzt suchen!
            </h1>
        <div className="p-6 bg-gray-100 bg-opacity-20 backdrop-blur-lg rounded-2xl drop-shadow-lg">

            <SearchBar />
          

        

          </div>
       
        </div>
      </div>
    </div>
  </main>
  )
}
