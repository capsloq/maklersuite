import Filter from "./filter";
import SuchergebnisseMietenListe from "./suchergebnisse";



async function getImmobilien() {
    const res = await fetch('http://127.0.0.1:1337/api/immobilen?populate=*');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}



export default async function SuchergebnisseMieten() {
    const immobilienListe = await getImmobilien();
  
    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <Filter />

            <SuchergebnisseMietenListe immobilienListe={immobilienListe}  />
            <div>Bonus: Pagination</div>
        </div>
    )
}