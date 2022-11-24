'use client';


import { Autocomplete, Button, Select, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons';
import Link from 'next/link';
import { useState } from 'react';



// TODO aus der Datenbank holen
// const autoCompleteDataZipCodes = ['93049', '93048', '93047', '93055', '95339', '93054']
// const autoCompleteDataCities = ['Regensburg (Innenstadt)', 'Regensburg', 'Regensburg (Landkreis)', 'Neuenmarkt']
// const autoCompleteDataBoth = [...autoCompleteDataZipCodes, ...autoCompleteDataCities]


export default function SearchBar({autoCompleteData}) {

  const [searchFieldValue, setSearchFieldValue] = useState('');

  // const unique = [...new Set(data.map(item => item.group))]; // [ 'A', 'B']
  
  const autoCompleteDataZipCodes = [ ...new Set(autoCompleteData.data.map(({attributes}) => attributes.plz))]
  const autoCompleteDataCities =[ ... new Set(autoCompleteData.data.map(({attributes}) => attributes.ort))]
  const autoCompleteDataBoth = [...autoCompleteDataZipCodes, ...autoCompleteDataCities]
  
  
  const autoCompleteData2lettersOrMore = searchFieldValue.trim().length >= 2  ? autoCompleteDataBoth : [];



  return (
    <div className="p-4 ">
    
      {/* 4 Items next to each other */}
      <div className="flex flex-col gap-4 lg:grid lg:justify-center lg:grid-cols-5">
        <div className="col-span-2">
        <Autocomplete
          value={searchFieldValue}
          onChange={setSearchFieldValue}
          autoFocus
          placeholder="Wo? Stadt oder PLZ"
          data={autoCompleteData2lettersOrMore}
          size="md"
        />
        </div>
        <Select          
          defaultValue="mieten"
          size="md"
          data={[
            { value: 'mieten', label: 'Mieten' },
            { value: 'kaufen', label: 'Kaufen' },           
          ]}
        />
         <Select          
          defaultValue="wohnung"
          size="md"
          data={[
            { value: 'wohnung', label: 'Wohnung' },
            { value: 'haus', label: 'Haus' },           
          ]}
        />

        <Link
        href={'suchergebnisse-mieten?search=' + searchFieldValue}       
       
        
 
        >
          <div className='flex justify-end'>
          <Button color="blue" variant="filled"  rightIcon={<IconSearch />} size="md" > Suchen </Button>
          </div>
        </Link>



      </div>


    </div>
  )
}


