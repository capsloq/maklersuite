import Filter from "./filter";
import SuchergebnisseMietenListe from "./suchergebnisse";



async function getSearchResults(searchParams) {
    console.log("🚀 ~ file: page.jsx ~ line 7 ~ getSearchResults ~ search", searchParams)
    const plzOderOrt = searchParams.search

    //capitalize
    const plzOderOrtCapitalized = plzOderOrt.charAt(0).toUpperCase() + plzOderOrt.slice(1)
    console.log("🚀 ~ file: page.jsx ~ line 12 ~ getSearchResults ~ plzOderOrtCapitalized", plzOderOrtCapitalized)

   

    // if no id, throw error
    if (!plzOderOrt) {
        throw new Error('No PLZ oder Ort  provided');
    }
    const res = await fetch(`http://127.0.0.1:1337/api/immobilen?populate=*&filters[$or][0][plz][$eq]=${plzOderOrtCapitalized}&filters[$or][1][ort][$eq]=${plzOderOrtCapitalized}`);


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
  
    const immobilienListe = await getSearchResults(searchParams);
   
  
    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <Filter />

            <SuchergebnisseMietenListe immobilienListe={immobilienListe}  />
            <div>Bonus: Pagination</div>
        </div>
    )
}