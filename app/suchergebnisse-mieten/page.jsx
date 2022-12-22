import SuchergebnisseMietenListe from "./suchergebnisse";



async function getSearchResults(plzOderOrtCapitalized) {



    const res = await fetch(
        
        `${process.env.NEXT_PUBLIC_API_URL}/api/immobilen?populate=*&filters[$or][0][plz][$eq]=${plzOderOrtCapitalized}&filters[$or][1][ort][$eq]=${plzOderOrtCapitalized}`,
  { cache: 'no-store' }
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



export default async function SuchergebnisseMieten({ params, searchParams }) {
    const plzOderOrt = searchParams.search || ''
    let plzOderOrtCapitalized = ''

    if (plzOderOrt) {
        plzOderOrtCapitalized = plzOderOrt.charAt(0).toUpperCase() + plzOderOrt.slice(1)
    }

    const immobilienListe = await getSearchResults(plzOderOrtCapitalized);

    return (
       
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
               

                <SuchergebnisseMietenListe immobilienListe={immobilienListe} searchParams={plzOderOrtCapitalized}/>
                {/* <div>Bonus: Pagination</div> */}
            
            </div>
       
    )
}