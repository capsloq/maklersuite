'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Autocomplete, Button, Select, TextInput } from '@mantine/core'
import Link from 'next/link';
import { useState } from 'react';



// TODO aus der Datenbank holen
const autoCompleteDataZipCodes = ['93049', '93048', '93047', '93055', '95339', '93054']
const autoCompleteDataCities = ['Regensburg (Innenstadt)', 'Regensburg', 'Regensburg (Landkreis)', 'Neuenmarkt']
const autoCompleteDataBoth = [...autoCompleteDataZipCodes, ...autoCompleteDataCities]


export default function SearchBar() {

  const [searchFieldValue, setSearchFieldValue] = useState('');
  const autoCompleteData = searchFieldValue.trim().length >= 2  ? autoCompleteDataBoth : [];



  return (
    <div className="p-4 border-4 border-gray-900">
    
      {/* 4 Items next to each other */}
      <div className="grid flex-row justify-center grid-cols-5 flex-nowrap gap-x-8">
        <div className="col-span-2">
        <Autocomplete
          value={searchFieldValue}
          onChange={setSearchFieldValue}
          
          placeholder="Wo? Stadt oder PLZ"
          data={autoCompleteData}
        />
        </div>
        <Select          
          defaultValue="mieten"
          data={[
            { value: 'mieten', label: 'Mieten' },
            { value: 'kaufen', label: 'Kaufen' },           
          ]}
        />
         <Select          
          defaultValue="wohnung"
          data={[
            { value: 'wohnung', label: 'Wohnung' },
            { value: 'haus', label: 'Haus' },           
          ]}
        />

        <Link
        href={'suchergebnisse-mieten?search=' + searchFieldValue}       
       
        
 
        >
          Suchen
        </Link>



      </div>


    </div>
  )
}


