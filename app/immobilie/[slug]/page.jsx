import Einzeldarstellung from "./einzeldarstellung";



// Backend Calls (Daten Holen für Immobilie pramas.slug / id)


export default function Immobilie({ params, searchParams }) {
    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            
        <Einzeldarstellung />
        <p>hallo, {params.slug} </p>
        </div>
    )
}