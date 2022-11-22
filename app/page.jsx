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
      <div className="absolute inset-0 flex justify-center pt-32">
        {/* Suche */}
        <div className="max-w-4xl">
       
        <div className="p-12 bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl drop-shadow-lg">
            <h1 className="pb-10 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-center sm:text-3xl">
              Such dir deine neue Wohnung
            </h1>

            <SearchBar />
          

        

          </div>
       
        </div>
      </div>
    </div>
  </main>
  )
}
