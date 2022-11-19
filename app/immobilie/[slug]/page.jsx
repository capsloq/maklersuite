import Einzeldarstellung from "./einzeldarstellung";
import ImmobilienBeschreibung from "./immobilienbeschreibung";
import Map from "./map";



// Backend Calls (Daten Holen für die Immobilie, die der User angeklickt hat. Die ID ist in pramas.slug


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