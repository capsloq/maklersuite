'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Autocomplete, Button, TextInput } from '@mantine/core'
import { useState } from 'react';

const autoCompleteDataZipCodes = ['93049', '93048', '93047', '93055', '95339', '93054']
const autoCompleteDataCities = ['Regensburg (Innenstadt)', 'Regensburg', 'Regensburg (Landkreis)', 'Neuenmarkt']
const autoCompleteDataBoth = [...autoCompleteDataZipCodes, ...autoCompleteDataCities]


export default function SearchBar() {
  const [searchFieldValue, setSearchFieldValue] = useState('');

  const autoCompleteData = searchFieldValue.trim().length >= 2  ? autoCompleteDataBoth : [];

  return (
    <div className="p-4 border-4 border-black">
      {/* 4 Items next to each other */}
      <div className="flex flex-row justify-center flex-nowrap gap-x-8">
        <Autocomplete
          value={searchFieldValue}
          onChange={setSearchFieldValue}
          label="Your favorite framework/library"
          placeholder="Pick one"
          data={autoCompleteData}
        />
        <div className="bg-blue-200">Combobox Mieten/Kaufen</div>
        <div className="bg-green-200">Combobox Wohnung / Haus</div>

        <Button leftIcon={<MagnifyingGlassIcon className="inline w-5 h-5 ml-2 text-indigo-200" aria-hidden="true" />}>
          Suchen
        </Button>
      </div>


    </div>
  )
}


