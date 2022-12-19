"use client";
import { IconSnowflake, IconFlame, IconChevronDown, IconTent, IconTower, IconArrowBigRight, IconArrowNarrowRight } from '@tabler/icons';
import { ActionIcon, Button, Chip, Group, Popover, RangeSlider, Select, Switch, useMantineTheme } from "@mantine/core";
import { useState } from 'react';

const qs = require('qs');

const marks = [
    { value: 20, label: '200€' },
    { value: 50, label: '500€' },
    { value: 80, label: '800€' },
];

export default function Filter() {
    const theme = useMantineTheme();
    // Mietpreis
    const [isWarmMiete, setIsWarmMiete] = useState(false);
    const [isMietpreisPopoverOpen, setIsMietpreisPopoverOpen] = useState(false);
    const [mietpreisRangeValue, setMietpreisRangeValue] = useState([20, 80]);


    // Wohnfläche
    const [isWohnflaechePopoverOpen, setIsWohnflaechePopoverOpen] = useState(false);
    const [wohnflaecheRangeValue, setWohnflaecheRangeValue] = useState([20, 80]);

    // Zimmer
    const [isZimmerPopoverOpen, setIsZimmerPopoverOpen] = useState(false);
    const [zimmerRangeValue, setZimmerRangeValue] = useState([20, 80]);




    function mietPreisRangeSliderFormat(value) {
        return `${value.toLocaleString()}€`;
    }

    function wohnFlaecheRangeSliderFormat(value) {
        return `${value.toLocaleString()}qm`;
    }

    async function handleFilterAnwenden() {
        const mietpreisVon = mietpreisRangeValue[0] * 20
        const mietPreisBis = mietpreisRangeValue[1] * 20
        const wohnflaecheVon = wohnflaecheRangeValue[0] * 5
        const wohnflaecheBis = wohnflaecheRangeValue[1] * 5
        const zimmerVon = zimmerRangeValue[0] /5
        const zimmerBis = zimmerRangeValue[1] /5
        //Todo select wohnung/haus



        const query = qs.stringify({
            filters: {
                $and: [
                    {
                        kaltmiete: {
                            $gte: mietpreisVon,
                        },
                    },
                    {
                        warmmiete: {
                            $lte: mietPreisBis,
                        },
                    },
                    {
                        flaeche: {
                            $between: [wohnflaecheVon, wohnflaecheBis],
                        }
                    },
                    {
                        zimmer: {
                            $between: [zimmerVon, zimmerBis],
                        }

                    }

                ]
            },
        }, {
            encodeValuesOnly: true, // prettify URL
        });
        console.log("🚀 ~ file: filter.jsx:82 ~ handleFilterAnwenden ~ query", query)


        // await request(`${NEXT_PUBLIC_API_URL}/api/users?${query}`);

        setIsMietpreisPopoverOpen(false)

        // Für Serverseitige Filterung
        /* Strapi hat built in Methoden wie , z.b localhost:1337/api/immobilies?filters[preis][$gte]=200&filters[preis][$lte]=800 */

    }


    return (
        <div className="py-24 ">
            {/* 4 Items next to each other */}
            <div className="grid flex-row justify-center grid-cols-5 flex-nowrap gap-x-8 ">
                {/* Wohnung oder Haus? */}
                <Select
                    styles={(theme) => ({
                        input: {
                            backgroundColor: theme.colors.gray[7],
                            color: 'white',
                            textAlign: 'center',
                            fontWeight: 600,
                        }
                    })
                    }
                    defaultValue="wohnung"
                    data={[
                        { value: 'wohnung', label: 'Wohnung' },
                        { value: 'haus', label: 'Haus' },
                    ]}
                />
                {/* Mietpreis */}
                <div>
                    <Popover width='target' position="bottom" withArrow shadow="md" opened={isMietpreisPopoverOpen} onChange={setIsMietpreisPopoverOpen} >
                        <Popover.Target>
                            <Button fullWidth color="gray.7" rightIcon={<IconChevronDown size={16} />} onClick={() => setIsMietpreisPopoverOpen((prev) => !prev)} >Mietpreis</Button>
                        </Popover.Target>
                        <Popover.Dropdown>
                            <div className='space-y-8'>
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
                                <div className='flex flex-col'>
                                    <RangeSlider
                                        // defaultValue={[20, 80]}
                                        label={mietPreisRangeSliderFormat}
                                        scale={(value) => value * 20}
                                        step={5}
                                        value={mietpreisRangeValue}
                                        onChange={setMietpreisRangeValue}

                                        // labelAlwaysOn
                                        color={isWarmMiete ? 'yellow.5' : 'blue.6'}
                                        styles={{ thumb: { borderWidth: 2, padding: 3 } }}
                                        thumbSize={26}
                                        thumbChildren={[<IconTent size={16} key="1" />, <IconTower size={16} key="2" />]}
                                    />
                                    <div className='flex justify-between'>
                                        <span>von</span><span>bis</span>
                                    </div>
                                </div>

                            </div>


                        </Popover.Dropdown>
                    </Popover>
                    <div className='flex justify-center mt-4'>
                        <Chip color="purple" checked={true}>
                            {isWarmMiete ? "Warmmiete" : "Kaltmiete"}: {mietpreisRangeValue[0] * 20} - {mietpreisRangeValue[1] * 20}€
                        </Chip>
                    </div>
                </div>
                {/* Wohnfläche */}
                <div>
                    <Popover width='target' position="bottom" withArrow shadow="md" opened={isWohnflaechePopoverOpen} onChange={setIsWohnflaechePopoverOpen} >
                        <Popover.Target>
                            <Button fullWidth color="gray.7" rightIcon={<IconChevronDown size={16} />} onClick={() => setIsWohnflaechePopoverOpen((prev) => !prev)} >Wohnfläche</Button>
                        </Popover.Target>
                        <Popover.Dropdown>
                            <div className='mt-4 space-y-8'>

                                <div className='flex flex-col'>
                                    <RangeSlider
                                        // defaultValue={[20, 80]}
                                        label={wohnFlaecheRangeSliderFormat}
                                        scale={(value) => value * 5}
                                        step={5}
                                        value={wohnflaecheRangeValue}
                                        onChange={setWohnflaecheRangeValue}

                                        // labelAlwaysOn
                                        color={isWarmMiete ? 'yellow.5' : 'blue.6'}
                                        styles={{ thumb: { borderWidth: 2, padding: 3 } }}
                                        thumbSize={26}
                                        thumbChildren={[<IconTent size={16} key="1" />, <IconTower size={16} key="2" />]}
                                    />
                                    <div className='flex justify-between'>
                                        <span>von</span><span>bis</span>
                                    </div>
                                </div>

                            </div>


                        </Popover.Dropdown>
                    </Popover>
                    <div className='flex justify-center mt-4'>
                        <Chip color="purple" checked={true}>
                            {"Wohnfläche"}: {wohnflaecheRangeValue[0] * 5} - {wohnflaecheRangeValue[1] * 5}qm
                        </Chip>
                    </div>
                </div>

                {/* Zimmer */}
                <div>
                    <Popover width='target' position="bottom" withArrow shadow="md" opened={isZimmerPopoverOpen} onChange={setIsZimmerPopoverOpen} >
                        <Popover.Target>
                            <Button fullWidth color="gray.7" rightIcon={<IconChevronDown size={16} />} onClick={() => setIsZimmerPopoverOpen((prev) => !prev)} >Zimmer</Button>
                        </Popover.Target>
                        <Popover.Dropdown>
                            <div className='mt-4 space-y-8'>

                                <div className='flex flex-col'>
                                    <RangeSlider
                                        // defaultValue={[20, 80]}
                                        // label={wohnFlaecheRangeSliderFormat}
                                        scale={(value) => value / 5}
                                        step={5}
                                        value={zimmerRangeValue}
                                        onChange={setZimmerRangeValue}

                                        // labelAlwaysOn
                                        color={isWarmMiete ? 'yellow.5' : 'blue.6'}
                                        styles={{ thumb: { borderWidth: 2, padding: 3 } }}
                                        thumbSize={26}
                                        thumbChildren={[<IconTent size={16} key="1" />, <IconTower size={16} key="2" />]}
                                    />
                                    <div className='flex justify-between'>
                                        <span>von</span><span>bis</span>
                                    </div>
                                </div>
                            </div>


                        </Popover.Dropdown>
                    </Popover>
                    <div className='flex justify-center mt-4'>
                        <Chip color="purple" checked={true}>
                            {"Zimmer"}: {zimmerRangeValue[0] / 5} - {zimmerRangeValue[1] / 5}
                        </Chip>
                    </div>
                </div>


                <ActionIcon size="lg" variant="filled" color="purple" radius="xl" onClick={handleFilterAnwenden} >            
                    <IconArrowNarrowRight size="lg" color="white" />
                </ActionIcon>

            </div>
        </div>


    )
}