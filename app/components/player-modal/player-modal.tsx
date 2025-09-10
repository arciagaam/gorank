import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import type { ComprehensivePlayer } from '../../schema/player'
import { clubs } from '../../dummy/clubs'
import { Link } from 'react-router'
import ThemedButton from '../button/themed-button'
import { Badge } from '../ui/badge'
import { Trophy } from 'lucide-react'

type PlayerModalProps = {
    player: ComprehensivePlayer,
    children: React.ReactNode
}

export default function PlayerModal({ player, children }: PlayerModalProps) {

    const club = clubs.find(club => club.id === player.clubId)

    return (
        <Dialog>
            <DialogTrigger className='cursor-pointer'>
                {children}
            </DialogTrigger>
            <DialogContent className='min-w-[600px]'>

                <div className="flex flex-col gap-10">
                    <div className="flex gap-5">

                        <div className="flex flex-col gap-2 w-1/4">
                            <img src={player.avatar} alt={player.name} />
                            <Link className='w-full' to={`/profile/${player.id}`}>
                                <ThemedButton className='w-full'>View Profile</ThemedButton>
                            </Link>
                        </div>

                        <div className="flex flex-col w-3/4 gap-5">

                            <div className="flex flex-col">
                                <div className="flex gap-2 items-center">
                                    <p className="text-xl font-bold">{player.name}</p>
                                    <Badge>{player.rank}</Badge>
                                </div>
                                <p className='text-sm'>{player.role}</p>
                            </div>

                            <div className="bg-gray-100 p-4 flex rounded-2xl gap-5 w-full item-center">
                                <Trophy size={34} />

                                <div className="flex flex-col">
                                    <p className='leading-none text-base font-medium'>Last Game</p>
                                    <p>{player.lastGamePoints} <span className='text-sm'>Points</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        club && (
                            <>
                                <hr />

                                <div className="flex flex-col gap-5">
                                    <h2 className='text-lg font-bold'>Club Details</h2>

                                    <div className="flex gap-5">

                                        <div className="flex flex-col gap-2 items-center w-[25%]">
                                            <img src={club?.logo} alt={player.name} className="w-full h-auto" />
                                            <Link className='w-full' to={`/clubs/${club.id}`}>
                                                <ThemedButton className='w-full'>View Club</ThemedButton>
                                            </Link>
                                        </div>

                                        <div className="flex-1 w-full flex flex-col gap-2">
                                            <h3 className='text-lg font-bold'>{club.name}</h3>
                                            <p className='text-sm text-gray-500'>{club.location}</p>

                                            <p className='text-sm'><span className='font-bold text-base'>{club.members}</span> Members</p>
                                        </div>
                                    </div>
                                </div>

                            </>
                        )
                    }


                </div>
            </DialogContent>
        </Dialog>
    )
}
