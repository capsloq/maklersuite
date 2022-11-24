
"use client";

import { TextInput } from "@mantine/core";


export default function StepOne({ form }) {

    return (

        <div className="space-y-2">
            <div className="grid grid-cols-2 gap-x-6 grid-col">
                <span className="col-span-2 text-2xl font-bold">Adresse eingeben. </span>
                <TextInput  label="strasse" placeholder="strasse" {...form.getInputProps('strasse')} withAsterisk />
                <TextInput
             
                    withAsterisk
                    label="hausnummer"
                    placeholder="hausnummer"
                    {...form.getInputProps('hausnummer')}

                />
                <TextInput  withAsterisk label="postleitzahl" placeholder="postleitzahl" {...form.getInputProps('postleitzahl')} />
                <TextInput  withAsterisk label="ort" placeholder="ort" {...form.getInputProps('ort')} />


            </div>

        </div>
    )

} 