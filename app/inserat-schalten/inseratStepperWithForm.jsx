"use client"
import { useState } from 'react';
import { Stepper, Button, Group, TextInput, hausnummerInput, Code } from '@mantine/core';
import { useForm } from '@mantine/form';
import StepOne from './step1';

export default function InsertStepperWithForm() {
    const [active, setActive] = useState(0);

    const form = useForm({
        initialValues: {
            strasse: '',
            hausnummer: '',
            postleitzahl: '',
            ort: '',
            ueberschrift: '',
            kaltmiete: '',
            wohnflaeche: '',
            zimmer: '',
            wohnungsytp: '',
            gesamtmiete: '',
            nebenkosten: '',

        },

        validate: (values) => {
            if (active === 0) {
                return {
                    strasse: values.strasse.trim().length < 1 ? 'Strasse ist ein Pflichtfeld' : null,
                    hausnummer: values.hausnummer.trim().length< 1 ? 'Hausnummer ist ein Pflichtfeld' : null,
                    postleitzahl: values.postleitzahl.trim().length !== 5 ? 'Postleitzahl muss genau fünf Zeichen lang sein.' : null,
                    ort: values.ort.trim().length < 1 ? 'Ort ist ein Pflichtfeld' : null,
                };
            }

            if (active === 1) {
                return {
                   
                };
            }

            return {};
        },
    });

    const nextStep = () =>
        setActive((current) => {
            if (form.validate().hasErrors) {
                return current;
            }
            return current < 3 ? current + 1 : current;
        });

    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current))

    console.log("form values: ", form.values);

    return (
        <>
            <Stepper active={active} breakpoint="sm">
                <Stepper.Step label="Objektadresse" description="Eingabe">
                    <StepOne form={form} />
                </Stepper.Step>

                <Stepper.Step label="Objektinfos" description="Eingabe">

                    <TextInput label="ueberschrift" placeholder="ueberschrift" {...form.getInputProps('ueberschrift')} />
                    <TextInput
                    
                        mt="md"
                        label="kaltmiete"
                        placeholder="kaltmiete"
                        {...form.getInputProps('kaltmiete')}
                    />

                </Stepper.Step>

                <Stepper.Step label="Bilder" description="Upload">

                </Stepper.Step>
                <Stepper.Completed>
                    Completed! Form values:
                    <Code block mt="xl">
                        {JSON.stringify(form.values, null, 2)}
                    </Code>
                </Stepper.Completed>
            </Stepper>

            <Group position="right" mt="xl">
                {active !== 0 && (
                    <Button variant="default" onClick={prevStep}>
                        Back
                    </Button>
                )}
                {active !== 3 && <Button onClick={nextStep}>Next step</Button>}
            </Group>
        </>
    );
}