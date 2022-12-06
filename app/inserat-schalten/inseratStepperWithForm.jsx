"use client"
import { useState } from 'react';
import { Stepper, Button, Group, TextInput, hausnummerInput, Code, NumberInput, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import StepOne from './step1';
import StepTwo from './step2';
import StepThree from './step3';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';




export default function InsertStepperWithForm({jwtValue}) {
 
    const [active, setActive] = useState(0);
    const router = useRouter();    
  

    const form = useForm({
        initialValues: {
            strasse: '',
            hausnummer: '',
            plz: '',
            ort: '',
            ueberschrift: '',
            kaltmiete: '',
            flaeche: '',
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
                    plz: values.plz.trim().length !== 5 ? 'Postleitzahl muss genau fünf Zeichen lang sein.' : null,
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

    // async function handleSubmit(refresh)  {
    //     console.log('SUBMITTED!, values: ',form.values);
    //     await fetch(``)
       
    //     // Create auf Strapi
    // }

    async function postImmobilie(refresh) {
        const immobilie = form.values; // Alle Felder, die der User eingegeben hat
        
        // if no id, throw error
        if (!immobilie) {
            throw new Error('Keine Felder für Immobilie');
        }
      
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/immobilen`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Authorization
                'Authorization': `Bearer ${jwtValue}`  // TODO: Github fragen wo JWT

            },
            

            body: JSON.stringify({
                "data": form.values
            })
        });     

        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.

        // Recommendation: handle errors
        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            console.error(res.status, res.statusText)
            throw new Error('Failed to create immobile');
        }


        refresh()
    
        
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
                    <StepThree form={form} />
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
                
                {active === 2 ? <Button onClick={() => postImmobilie(router.refresh)}> Immobilie einpflegen </Button> : <Button onClick={nextStep}>Next step</Button>}

            </Group>
         
        </>
    );
}

function addieren(a, b) {
    return a + b;
}


addieren(1,2) //3