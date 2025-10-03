import React from 'react'
import { useParams } from 'react-router';
import ThemedButton from '~/components/button/themed-button';
import { useSportTheme } from '~/context/sport-theme-provider';
import { getTeamBySport, matchParticipants, type SimplePlayer } from '~/dummy/teams';
import { getGameById } from '~/services/game';

export default function GameLobby() {
    const { id } = useParams();
    const { selectedSport } = useSportTheme();

    if (!id) {
        return <div>Game not found</div>
    }
    const game = getGameById(id);

    if (!game) {
        return <div>Game not found</div>
    }

    const teams = getTeamBySport(id.split('-')[0]);


    return (
        <div className="flex flex-col items-center w-full gap-6 md:gap-10 py-6 md:py-10 lg:px-36 px-4">
            <div className="flex gap-10 w-full justify-between items-center">
                <div className="flex flex-col">
                    <h1 className='text-2xl font-bold'>{game.name}</h1>
                    <p className='text-sm text-gray-500'>
                        {game.facility?.location} |{" "}
                        {game.startDate?.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} |{" "}
                        {new Date(`1970-01-01T${game.startTime}`).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })} -{" "}
                        {new Date(`1970-01-01T${game.endTime}`).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}
                    </p>
                </div>

                <div className="flex gap-2">
                    <ThemedButton>Start</ThemedButton>
                    <ThemedButton variant='secondary'>Enter Group Chat</ThemedButton>
                </div>
            </div>


            <div className="flex w-full gap-10">
                <div className="flex flex-col flex-1 gap-10">
                    <div className="flex w-full justify-between items-center">
                        <h2 className='text-xl font-bold'>TEAM A</h2>

                        <div className="flex gap-2 items-center">
                            <p>{teams.teamA.length}/12</p>
                            <ThemedButton variant='secondary'>Join Team A</ThemedButton>
                        </div>

                    </div>

                    <div className="flex flex-col">
                        {
                            teams.teamA.map((player, index) => (
                                <TeamPlayerCard key={index} player={player} />
                            ))
                        }
                    </div>
                </div>

                <div className="flex flex-col flex-1 gap-10">
                    <div className="flex w-full justify-between items-center">
                        <h2 className='text-xl font-bold'>TEAM B</h2>

                        <div className="flex gap-2 items-center">
                            <p>{teams.teamB.length}/12</p>
                            <ThemedButton variant='secondary'>Join Team B</ThemedButton>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        {
                            teams.teamB.map((player, index) => (
                                <TeamPlayerCard key={index} player={player} />
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-full gap-5">
                <h2 className='text-xl font-bold'>Match Participants</h2>

                <div className="flex flex-col">
                    {
                        matchParticipants.map((participant, index) => (
                            <TeamPlayerCard key={index} player={participant} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const TeamPlayerCard = ({ player }: { player: SimplePlayer }) => {
    return (
        <div className="flex gap-5 items-center odd:bg-white even:bg-gray-100 py-4 px-6 w-full">
            <img src={player.avatar} alt={player.name} className="w-18 h-18 rounded-full aspect-square" />

            <div className="flex flex-col col-span-2">
                <h2>{player.name}</h2>
                <p className='text-sm text-gray-500'>Last Game | {player.lastGameStatus} | {player.lastGamePoints} points</p>
            </div>

            <p className='text-sm text-gray-500 ml-auto'>
                {player.position}
            </p>
        </div>
    )
}