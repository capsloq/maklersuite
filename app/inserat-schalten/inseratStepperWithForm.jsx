"use client"
import { useState } from 'react';
import { Stepper, Button, Group, TextInput, hausnummerInput, Code, NumberInput, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import StepOne from './step1';
import StepTwo from './step2';
import StepThree from './step3';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import axios from 'axios';



export default function InsertStepperWithForm({jwtValue}) {
 
    const [active, setActive] = useState(2);
    const router = useRouter();
    
    const [files, setFiles] = useState([]);
   
  

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

    async function postImmobilie(e,refresh) {
        const immobilie = form.values; // Alle Felder, die der User eingegeben hat
       
        e.preventDefault();
        
        
        // if no id, throw error
        if (!immobilie) {
            throw new Error('Keine Felder für Immobilie');
        }

        



        const formData = new FormData();
        const data = {...immobilie}
       
        formData.append("data", JSON.stringify(data))
       
        //multiple-files
        const filesArrray = files.map((file) => {
            formData.append(`files.bilder`, file)
            
        })


      



        //update collection

        // const updateArticle = await fetch(
        //     "http://localhost:1337/api/immobilie",
        //     {
        //         method: "POST",
        //         body: formData, 
        //         headers: {  
        //         "authorization": `Bearer ${jwtValue}`,
        //         "content-type": "form-data",
        //         }
                
               

              
        //     })
        // use axios to post data
        const res2 = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/immobilen`, formData, {
            headers: {       
                'Authorization': `Bearer ${jwtValue}`
            }
        })
        // GET id from response
    
        const id = res2.data.data.id

        // PUT 
        await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/immobilen/${id}`, formData, {
            headers: {
                'Authorization': `Bearer ${jwtValue}`
            }
        })


        // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/immobilen`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'multipart/form-data; boundary="xxx"',
        //         'Connection': 'keep-alive',
        //         'Accept': '*/*',
        //         'Authorization': `Bearer ${jwtValue}`
        //     },
        //     body: formData
        // })

        // const updateData = await updateArticle.json()


    
        // console.log("🚀 ~ file: inseratStepperWithForm.jsx:101 ~ postImmobilie ~ formData", formData)
        


        // formData.append("files.bilder", files[0]);
        // // formData.append("refId", 1);
        // // formData.append("ref", "api::immobilie.immobilie");
        // // formData.append("field", "bilder");
    
  
        
        // // formData.append('data', JSON.stringify({data:form.values}))
        
        // console.log("🚀 ~ file: inseratStepperWithForm.jsx:99 ~ postImmobilie ~ formData", formData)
      
        // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/immobilen`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer ${jwtValue}`
        //     },
        //     body: JSON.stringify(formData)
        // })
          

        // // The return value is *not* serialized
        // // You can return Date, Map, Set, etc.

        // // Recommendation: handle errors
        // if (!res.ok) {
        //     // This will activate the closest `error.js` Error Boundary
        //     console.error(res.status, res.statusText)
        //     throw new Error('Failed to create immobile');
        // }


        // refresh()
    
        
    }

    return (
        <>
            <Stepper active={active} breakpoint="sm" color="yellow.5" >
                <Stepper.Step color="yellow.5" label="Objektadresse" description="Eingabe">
                    <StepOne form={form} />
                </Stepper.Step>

                <Stepper.Step color="yellow.5" label="Objektinfos" description="Eingabe">
                    
                    <StepTwo form={form} />
                    

                </Stepper.Step>

                <Stepper.Step color="yellow.5" label="Bilder" description="Upload">
                    <StepThree form={form} files={files} setFiles={setFiles} />
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
                
                {active === 2 ? <Button color="purple" onClick={(e) => postImmobilie(e, router.refresh)}> Immobilie einpflegen </Button> : <Button color="purple" onClick={nextStep}>Next step</Button>}

            </Group>
         
        </>
    );
}

function addieren(a, b) {
    return a + b;
}


addieren(1,2) //3