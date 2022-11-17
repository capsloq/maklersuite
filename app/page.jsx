import Image from 'next/image'
import SearchBar from './searchbar'
import catImage from './cat.jpg'

export default function Home() {
  return (
    <main className=''>

      <Image 
        src={catImage}
        alt="Picture of a cat"
        className='absolute top-0 left-0 z-0 object-cover w-full h-full'
        

        />
    <div className="px-6 lg:px-8">
      <div className="absolute flex items-center justify-center w-full h-full">
        {/* Suche */}
        <div className="max-w-4xl pb-36">
       
        <div class="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl drop-shadow-lg p-12">
            <h1 className="py-10 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-center sm:text-3xl">
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
