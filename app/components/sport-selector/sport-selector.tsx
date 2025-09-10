import React from 'react'
import { useSportTheme } from '~/context/sport-theme-provider'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { toTitleCase } from '~/lib/string'

export default function SportSelector() {
    const { selectedSport, setSelectedSport } = useSportTheme()
    const sports = ['Basketball', 'Volleyball', 'Pickleball', 'Tennis', 'Badminton']

    const handleSportChange = (sport: string) => {
        setSelectedSport(sport as typeof selectedSport)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="touch-target p-1">
                <img src={`/images/sport-selector/${selectedSport.toLowerCase()}.png`} alt={selectedSport} className='size-8 md:size-10 aspect-square' />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-white'>
                {sports.filter(sport => sport.toLowerCase() !== selectedSport.toLowerCase()).map((sport) => (
                    <DropdownMenuItem key={sport} onClick={() => handleSportChange(sport.toLowerCase())} className='cursor-pointer w-fit flex gap-2 py-3 px-2 touch-target'>

                        <div className="size-8 md:size-10">
                            <img src={`/images/sport-selector/${sport.toLowerCase()}.png`} alt={sport} className='object-contain' />
                        </div>
                        <p className="text-sm md:text-base">{toTitleCase(sport)}</p>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
