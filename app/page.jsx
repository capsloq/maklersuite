import Image from 'next/image'
import SearchBar from './searchbar'


async function getAutocompleteSuggestions() {



  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/immobilen?fields[0]=ort&fields[1]=plz`,
    { next: { revalidate: 60 } }

  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}



export default async function Home() {
  // const searchResults = await getSearchResults('93055');
  
  const autoCompleteData = await getAutocompleteSuggestions();




  return (
    <main className=''>
      <div className='absolute inset-0 '>
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

              <SearchBar autoCompleteData={autoCompleteData} />


            </div>

          </div>
        </div>
      </div>
    </main>
  )
}
