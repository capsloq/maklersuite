"use client";
import { IconSnowflake, IconFlame } from '@tabler/icons';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Autocomplete, Button, Group, Popover, Select, Switch, TextInput, useMantineTheme } from "@mantine/core";
import { useState } from 'react';

export default function Filter() {
    const theme = useMantineTheme();
    const [isWarmMiete, setIsWarmMiete] = useState(false);
    return (
        <div className="p-4 border-4 border-black">
            {/* 4 Items next to each other */}
            <div className="grid flex-row justify-center grid-cols-3 flex-nowrap gap-x-8">

                <Popover width={200} position="bottom" withArrow shadow="md">
                    <Popover.Target>
                        <Button>Mietpreis</Button>
                    </Popover.Target>
                    <Popover.Dropdown>
                        <Group position="center">
                            <Switch
                                label={isWarmMiete ? "Warmmiete" : "Kaltmiete"}
                                size="md"
                                checked={isWarmMiete}
                                onChange={(e) => setIsWarmMiete(e.currentTarget.checked)}
                                color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
                                onLabel={<IconFlame size={16} stroke={2.5} color={theme.colors.yellow[4]} />}
                                offLabel={<IconSnowflake size={16} stroke={2.5} color={theme.colors.blue[6]} />}
                            />
                        </Group>
                    </Popover.Dropdown>
                </Popover>

                <Select
                    defaultValue="wohnung"
                    data={[
                        { value: 'wohnung', label: 'Wohnung' },
                        { value: 'haus', label: 'Haus' },
                    ]}
                />


                {/* <Button leftIcon={<MagnifyingGlassIcon className="inline w-5 h-5 ml-2 text-indigo-200" aria-hidden="true" />}>
          Weitere Filter
        </Button> */}
            </div>


        </div>
    )
}