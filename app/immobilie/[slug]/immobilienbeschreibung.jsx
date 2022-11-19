import { IconMapPin } from "@tabler/icons";

export default function ImmobilienBeschreibung() {
    return (
        
        <div className="space-y-2 ">
            <h1 className="font-bold">Exklusive Wohnung</h1>
            <p className="font-bold">Adresse</p>
            <div className="flex flex-row gap-x-2">
                <IconMapPin size={30} />
                <div>
                    <p className="font-light">Johanna-Dachs-Straße 36, Ostenviertel</p>
                    <p className="font-light">93055 Regensburg</p>
                </div>
            </div>

            {/* Preis,Fläche und so */}
            {/* Grid mit 4 Spalten */}


           

            <div className="grid grid-cols-4 border-t-2 border-b-2 border-gray-400 align ">
                <p className="text-2xl font-bold text-center">1.065 €</p>
                <p className="text-2xl font-bold text-center">2</p>
                <p className="text-2xl font-bold text-center">77,78</p>
                <p className="text-2xl font-bold text-center">1.275 €</p>
                <p className="text-sm text-center text-gray-600 uppercase ">Kaltmiete</p>
                <p className="text-sm text-center text-gray-600 uppercase ">Zi.</p>
                <p className="text-sm text-center text-gray-600 uppercase ">Fläche</p>
                <p className="text-sm text-center text-gray-600 uppercase ">Warmmiete</p>
            </div>



        </div>
    )
}