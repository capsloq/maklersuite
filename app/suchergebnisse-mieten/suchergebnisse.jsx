'use client';

import { Carousel } from "@mantine/carousel";
import { Badge, Button, Card, Group, Text, Image } from "@mantine/core";
import { IconBuildingWarehouse, IconMapPin } from "@tabler/icons";
import Link from 'next/link';
// import Image from "next/image";

export default function SuchergebnisseMietenListe({ immobilienListe }) {

    if (!immobilienListe || immobilienListe?.length < 1) {
        return ('keine immobilien gefunden')
    }


    return (
        <div className='grid grid-cols-2 gap-4'>

            {immobilienListe.data.map((immobilie) => (

                <ImmoCard key={immobilie.id} immobilie={immobilie} />

            ))}
        </div>
    )
}

function ImmoCard({ immobilie }) {

    if (!immobilie) {
        return ('keine immobilie gefunden')
    }

    const { ueberschrift, strasse, hausnummer, plz, ort, kaltmiete, warmmiete, flaeche, zimmer } = immobilie.attributes
    // Makler rausspilitten
    const { vorname: maklerVorname, nachname: maklerNachname } = immobilie.attributes.makler.data.attributes
    // Bilder holen
    const bilder = immobilie.attributes.bilder.data.map((bild) => bild.attributes.formats.large)

    return (


        <Card shadow="sm" p="lg" radius="md" withBorder>

            {/* <Card.Section>
            <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                height={350}
                alt="Norway"
            />
        </Card.Section> */}




            <Card.Section>
                <Carousel slideSize="100%" height={750} align="start" slideGap="xs" controlsOffset="xl">
                    {bilder.map((bild) => (
                        <Link href="suchergebnisEinzeldarstellung" key={bild.hash}>
                            <Carousel.Slide>
                                <Image width={bild.width} height={bild.height} src={`${process.env.NEXT_PUBLIC_API_URL}${bild.url}`} />
                            </Carousel.Slide>
                        </Link>
                    ))}

                </Carousel>
            </Card.Section>



            <Link href="suchergebnisEinzeldarstellung">
                <div className="space-y-4">
                    <div></div>

                    <div className="flex justify-between">
                        <p className="mr-4 font-semibold truncate">{ueberschrift}</p>
                        <div>
                            <Badge color="green" variant="light" >
                                Neu
                            </Badge>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div><span className="font-bold">{kaltmiete} € </span><p className="text-gray-600 uppercase">Mietpreis</p></div>
                        <div><span className="font-bold">{flaeche} m²</span><p className="text-gray-600 uppercase">Wohnfläche</p></div>
                        <div><span className="font-bold">{zimmer} Zi.</span><p className="text-gray-600 uppercase">Zimmer</p></div>
                        <div className="inline-flex col-span-3"><IconMapPin size={20} /> <span className="ml-2">{ort}</span></div>
                        <div className="inline-flex col-span-3 -mt-2"><IconBuildingWarehouse size={20} /> <span className="ml-2">Makler {maklerVorname} {maklerNachname}</span></div>
                    </div>

                    {/* <Text size="sm" color="dimmed" className="">
            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
            activities on and around the fjords of Norway
        </Text> */}

                    {/* <Button variant="light" color="blue" fullWidth radius="md">
            Book classic tour now
        </Button> */}
                </div>
            </Link>
        </Card>
    )
}