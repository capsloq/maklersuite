'use client';

import { Carousel } from "@mantine/carousel";
import { Badge, Button, Card, Group, Text, Image } from "@mantine/core";
import { IconBuildingWarehouse, IconMapPin } from "@tabler/icons";
import Link from 'next/link';
// import Image from "next/image";

export default function SuchergebnisseMietenListe() {


    return (
        <div className='grid grid-cols-3 gap-4'>
            {Array(12).fill(0).map((_, index) => (<ImmoCard key={index} />))}
        </div>
    )
}

function ImmoCard() {
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
                <Carousel slideSize="100%" height={350} align="start" slideGap="xs" controlsOffset="xl">
                    <Link href="suchergebnisEinzeldarstellung"><Carousel.Slide> <Image width={700} height={467} src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80" /></Carousel.Slide></Link>
                    <Link href="suchergebnisEinzeldarstellung"><Carousel.Slide> <Image width={720} height={500} src="https://images.unsplash.com/photo-1602595688238-9fffe12d5af3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80" /></Carousel.Slide></Link>
                    <Link href="suchergebnisEinzeldarstellung"><Carousel.Slide> <Image width={720} height={500} src="https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" /></Carousel.Slide></Link>
                    <Link href="suchergebnisEinzeldarstellung"><Carousel.Slide> <Image width={720} height={500} src="https://images.unsplash.com/photo-1551105378-78e609e1d468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80" /></Carousel.Slide></Link>

                </Carousel>
            </Card.Section>



            <Link href="suchergebnisEinzeldarstellung">
                <div className="space-y-4">
                    <div></div>

                    <div className="flex justify-between">
                        <p className="mr-4 font-semibold truncate">Frisch renovierte Zweiraumwohnung mit Blick aufs Meer</p>
                        <div>
                            <Badge color="green" variant="light" >
                                Neu
                            </Badge>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div><span className="font-bold">199.000€</span><p className="text-gray-600 uppercase">Kaufpreis</p></div>
                        <div><span className="font-bold">125qm²</span><p className="text-gray-600 uppercase">Wohnfläche</p></div>
                        <div><span className="font-bold">3 Zi.</span><p className="text-gray-600 uppercase">Zimmer</p></div>
                        <div className="inline-flex col-span-3"><IconMapPin size={20} /> <span className="ml-2">Innenstadt, Regensburg</span></div>
                        <div className="inline-flex col-span-3 -mt-2"><IconBuildingWarehouse size={20} /> <span className="ml-2">Immomarkler Guido Fickert</span></div>
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