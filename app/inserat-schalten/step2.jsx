
"use client";

import { NumberInput, Select, TextInput } from "@mantine/core";


export default function StepTwo({ form }) {
    return (
        <div className="space-y-2">
            <div className="grid grid-cols-2 gap-x-6 grid-col">
                <span className="col-span-2 text-2xl font-bold">Zahlen Daten Fakten eingeben. </span>

                <TextInput label="ueberschrift" placeholder="ueberschrift" {...form.getInputProps('ueberschrift')} />
                <TextInput

                    label="kaltmiete"
                    placeholder="kaltmiete"
                    {...form.getInputProps('kaltmiete')}
                />
                <TextInput label="wohnflaeche" placeholder="wohnflaeche" {...form.getInputProps('wohnflaeche')} />
                <NumberInput
                    label="Wohnfläche"
                    description="Wie viel Quadratmeter ?"
                    placeholder="100 m²"
                    max={1500}
                    min={0}
                    {...form.getInputProps('wohnflaeche')}
                />
                <NumberInput
                    label="Zimmer"
                    description="Anzahl Zimmer"
                    placeholder="100 m²"
                    max={50}
                    min={0}
                    {...form.getInputProps('zimmer')}
                />

                <Select
                    label="Wohnungsytp"
                    placeholder="Pick one"
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
                    label="warmmiete"
                    description=" in €"
                    max={20000}
                    min={100}
                    {...form.getInputProps('warmmiete')}
                />

            </div>
        </div>
    )
}