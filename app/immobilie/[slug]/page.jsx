import Einzeldarstellung from "./einzeldarstellung";
import ImmobilienBeschreibung from "./immobilienbeschreibung";
import Map from "./map";



// Backend Calls (Daten Holen für Immobilie pramas.slug / id)


export default function Immobilie({ params, searchParams }) {
    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <p>hallo, {params.slug} </p>

            <div className="space-y-10">
                <Einzeldarstellung />
                <ImmobilienBeschreibung />
            </div>
                <Map />
        </div>
    )
}