'use client';

import { Carousel } from "@mantine/carousel";
import { Badge, Button, Card, Group, Text, Image } from "@mantine/core";
import { IconBuildingWarehouse, IconMapPin } from "@tabler/icons";
import Link from 'next/link';
import React from "react";
import Filter from "./filter";
// import Image from "next/image";

export default function SuchergebnisseMietenListe({ immobilienListe:immobilienListeDefault }) {
    
    const [immobilienListe, setImmobilienListe] = React.useState(immobilienListeDefault);
    

    if (!immobilienListe || immobilienListe?.length < 1) {
        return ('keine immobilien gefunden')
    }


    return (
        <div>
             <Filter setImmobilienListe={setImmobilienListe} />
            <div className='gap-4 md:grid md:grid-cols-2 xl:grid-cols-3 justify-items-center'>
                {immobilienListe.data.map((immobilie) => (
                    <div key={immobilie.id} className="max-w-[333px]">
                    <ImmoCard  immobilie={immobilie} />
                    </div>
                ))}
            </div>
        </div>
    )
}

function ImmoCard({ immobilie }) {

    if (!immobilie) {
        return ('keine immobilie gefunden')
    }


    const {id: immobilienId} = immobilie;
    const { ueberschrift, strasse, hausnummer, plz, ort, kaltmiete, warmmiete, flaeche, zimmer } = immobilie.attributes
    // Makler rausspilitten
    const { vorname: maklerVorname, nachname: maklerNachname } = immobilie.attributes.makler.data.attributes
    // Bilder holen
    const bilder = immobilie.attributes.bilder.data.map((bild) => bild.attributes.formats.small)

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
                <Carousel slideSize="100%" height={400} si align="start" slideGap="xs" controlsOffset="xl">
                    {bilder.map((bild) => (
                        <Link href={`immobilie/${immobilienId}`} key={bild.hash}>
                            <Carousel.Slide>
                                <div className="-mt-10">
                                <Image 
                                    width={bild.width}
                                    height={bild.height}
                                    src={`${process.env.NEXT_PUBLIC_API_URL}${bild.url}`}
                                    // fit="contain"
                                />
                                </div>
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
                        <div><span className="font-bold">{kaltmiete} ??? </span><p className="text-gray-600 uppercase">Mietpreis</p></div>
                        <div><span className="font-bold">{flaeche} m??</span><p className="text-gray-600 uppercase">Wohnfl??che</p></div>
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