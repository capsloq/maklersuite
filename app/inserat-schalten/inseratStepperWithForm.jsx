"use client"
import { useState } from 'react';
import { Stepper, Button, Group, TextInput, hausnummerInput, Code, NumberInput, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import StepOne from './step1';
import StepTwo from './step2';

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
                    ueberschrift: values.ueberschrift.trim().length < 1 ? 'Überschrift ist ein Pflichtfeld' : null,
                    kaltmiete: values.kaltmiete.trim().length < 1 ? 'Kaltmiete ist ein Pflichtfeld' : null,
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

    const handleSubmit = (event) => {
        console.log('SUBMITTED!, values: ',form.values);
        // Create auf Strapi
    }

    return (
        <>
            <Stepper active={active} breakpoint="sm" >
                <Stepper.Step label="Objektadresse" description="Eingabe">
                    <StepOne form={form} />
                </Stepper.Step>

                <Stepper.Step label="Objektinfos" description="Eingabe">
                    
                    <StepTwo form={form} />
                    

                </Stepper.Step>

                <Stepper.Step label="Bilder" description="Upload">

                </Stepper.Step>
                {/* <Stepper.Completed>
                    Completed! Form values:
                    <Code block mt="xl">
                        {JSON.stringify(form.values, null, 2)}
                    </Code>
                </Stepper.Completed> */}
            </Stepper>

            <Group position="right" mt="xl">
                {active !== 0 && (
                    <Button variant="default" onClick={prevStep}>
                        Back
                    </Button>
                )}
                
                {active === 2 ? <Button onClick={handleSubmit}> Immobilie einpflegen </Button> : <Button onClick={nextStep}>Next step</Button>}

            </Group>
         
        </>
    );
}