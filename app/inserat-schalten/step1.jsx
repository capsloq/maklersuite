
"use client";

import { TextInput } from "@mantine/core";
import Image from "next/image";


export default function StepOne({ form }) {

    return (

        <div className="mt-12 space-y-2">
            <div className="grid grid-cols-2 gap-x-20 grid-col">
                <span className="col-span-2 text-2xl font-bold">Wo liegt die Immobilie?</span>
                <span className="max-w-sm col-span-2 mt-2 text-sm text-gray-700">Keine Sorge, Sie können entscheiden ob die vollständige Adresse oder nur der Umkreis öffentlich anzeigt wird.</span>
              
                <div className="mt-8"> {/* left side */}
                    <TextInput label="strasse" placeholder="strasse" {...form.getInputProps('strasse')} withAsterisk />
                    <TextInput
                        withAsterisk
                        label="hausnummer"
                        placeholder="hausnummer"
                        {...form.getInputProps('hausnummer')}
                    />
                    <TextInput withAsterisk label="postleitzahl" placeholder="postleitzahl" {...form.getInputProps('postleitzahl')} />
                    <TextInput withAsterisk label="ort" placeholder="ort" {...form.getInputProps('ort')} />
                </div>
                <div className=""> {/* right side */}
                    <Image
                        className=""
                        width={640}
                        height={427}
                        src="/objektadresse.jpg"
                        alt="le cat"
                    />
                </div>


            </div>

        </div>
    )

} 