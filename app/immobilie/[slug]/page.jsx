import Einzeldarstellung from "./einzeldarstellung";
import ImmobilienBeschreibung from "./immobilienbeschreibung";
import Map from "./map";



// Backend Calls (Daten Holen für die Immobilie, die der User angeklickt hat. Die ID ist in pramas.slug
async function getImmobilie(id) {
    // if no id, throw error
    if (!id) {
        throw new Error('No Immobilien Id provided');
    }
 
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/immobilen/${id}?populate=*`);
    

    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}


export default async function Immobilie({ params, searchParams }) {
    const immobilie = await getImmobilie(params.slug);
    
    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <p>hallo, {params.slug} </p>

            <div className="space-y-10">
                <Einzeldarstellung immobilie={immobilie} />
                <ImmobilienBeschreibung immobilie={immobilie}  />
            </div>
                <Map />
        </div>
    )
}