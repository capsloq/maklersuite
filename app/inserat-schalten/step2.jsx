
"use client";

import { NumberInput, Select, TextInput } from "@mantine/core";
import Image from "next/image";


export default function StepTwo({ form }) {
    return (
        <div className="mt-12 space-y-2">
            <div className="grid grid-cols-2 gap-x-20 grid-col">
                <span className="col-span-2 text-2xl font-bold">Bitte geben Sie die Maße und Mietpreise an. </span>
                <span className="max-w-sm col-span-2 mt-2 text-sm text-gray-700">Falls Sie eine Zahl nicht sofort zur Hand haben, können Sie sie auch noch später nachrreichen.</span>


                <div className="mt-8"> {/* left side */}
                    <TextInput label="Inserat Überschrift" placeholder="Überschrift" {...form.getInputProps('ueberschrift')} />
                    <TextInput
                        label="Kaltmiete"
                        placeholder="Kaltmiete"
                        {...form.getInputProps('kaltmiete')}
                    />
                    {/* <TextInput label="wohnflaeche" placeholder="Wohnflaeche" {...form.getInputProps('wohnflaeche')} /> */}
                    <NumberInput
                        label="Wohnfläche"
                        // description="Wie viel Quadratmeter ?"
                        placeholder="100 m²"
                        max={1500}
                        min={0}
                        {...form.getInputProps('wohnflaeche')}
                    />
                    <NumberInput
                        label="Zimmer"
                        // description="Anzahl Zimmer"
                        placeholder="100 m²"
                        max={50}
                        min={0}
                        {...form.getInputProps('zimmer')}
                    />
                    <Select
                        label="Wohnungsytp"
                        placeholder="Haus"
                        data={[
                            { value: 'wohnung', label: 'Wohnung' },
                            { value: 'haus', label: 'Haus' },
                        ]}
                        {...form.getInputProps('wohnungsytp')}
                    />
                    {/* <TextInput label="wohnungsytp" placeholder="wohnungsytp" {...form.getInputProps('wohnungsytp')} /> */}
                    {/* <TextInput label="gesamtmiete" placeholder="gesamtmiete" {...form.getInputProps('gesamtmiete')} />
                    <TextInput label="nebenkosten" placeholder="nebenkosten" {...form.getInputProps('nebenkosten')} /> */}
                    <NumberInput
                        label="Warmmiete"
                        placeholder="100 €"
                        // description=" in €"
                        max={20000}
                        min={100}
                        {...form.getInputProps('warmmiete')}
                    />
                </div>

                <div className=""> {/* right side */}
                    <Image
                        className=""
                        width={640}
                        height={800}
                        src="/objektinfos.jpg"
                        alt="le cat"
                    />
                </div>

            </div>
        </div>
    )
}