'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { TextInput } from '@mantine/core'

export default function SearchBar() {
    return (
        <div className="border-4 border-black p-4">
            {/* 4 Items next to each other */}
            <div className="flex flex-row flex-nowrap gap-x-8 justify-center">
                <TextInput
                    placeholder="Ort/PLZ"
                    label="Geben Sie einen Ort oder eine Postleitzahl ein"
                    withAsterisk
                />
                <div className="bg-blue-200">Combobox Mieten/Kaufen</div>
                <div className="bg-green-200">Combobox Wohnung / Haus</div>
                <a
                href="#"
                className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
              >
                Suchen
                {/* <span className="text-indigo-200" aria-hidden="true">
                  &rarr;
                </span> */}
                <MagnifyingGlassIcon className="h-5 w-5 text-indigo-200 inline ml-2" aria-hidden="true" />
              </a>
            
            </div>

        </div>
    )
}


