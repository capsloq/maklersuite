
import { IconMapPin } from "@tabler/icons";

export default function ImmobilienBeschreibung({immobilie}) {

    if (!immobilie) {
        return ('keine immobilie gefunden')
    }
  
  
    const {id: immobilienId} = immobilie;
    const { ueberschrift, strasse, hausnummer, plz, ort, kaltmiete, warmmiete, flaeche, zimmer } = immobilie.data.attributes
    // Makler rausspilitten
    const { vorname: maklerVorname, nachname: maklerNachname, sterne:sterne } = immobilie.data.attributes.makler.data.attributes
    // Bilder holen
    const bilder = immobilie.data.attributes.bilder.data.map((bild) => bild.attributes.formats.large)


    return (

        
        <div className="space-y-6 ">
            <h1 className="font-bold">{ueberschrift}</h1>
            <div className="space-y-2">
                <p className="font-bold">Adresse</p>
                <div className="flex flex-row gap-x-2">

                    <IconMapPin size={30} />

                    <div>
                        <p className="font-light">{strasse} {hausnummer}</p>
                        <p className="font-light">{plz} {ort}</p>
                    </div>
                </div>
            </div>

            {/* Preis,Fläche und so */}
            {/* Grid mit 4 Spalten */}

            <div className="grid grid-cols-4 border-t-2 border-b-2 border-gray-400 align ">
                <p className="text-2xl font-bold text-center">{kaltmiete} €</p>
                <p className="text-2xl font-bold text-center">{zimmer}</p>
                <p className="text-2xl font-bold text-center">{flaeche} m²</p>
                <p className="text-2xl font-bold text-center">{warmmiete} €</p>
                <p className="text-sm text-center text-gray-600 uppercase ">Kaltmiete</p>
                <p className="text-sm text-center text-gray-600 uppercase ">Zi.</p>
                <p className="text-sm text-center text-gray-600 uppercase ">Fläche</p>
                <p className="text-sm text-center text-gray-600 uppercase ">Warmmiete</p>
            </div>



        </div>
    )
}