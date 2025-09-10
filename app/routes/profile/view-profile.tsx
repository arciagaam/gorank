import React, { useEffect } from 'react'
import { useAuth } from '~/context/auth-provider'
import { useNavigate, useParams } from 'react-router'
import { dummyPlayers } from '~/dummy/player'
import { clubs } from '~/dummy/clubs'
import { Play, Star } from 'lucide-react'
import { Badge } from '~/components/ui/badge'
import ThemedBadge from '~/components/badge/themed-badge'
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from '~/components/ui/chart'
import { Label, Pie, PieChart, PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts'
import type { ComprehensivePlayer } from '~/schema/player'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table'
import { getPlayerById } from '~/services/player'


export default function ProfilePage() {
    const { id } = useParams()
    const navigate = useNavigate()

    if (!id) return <div>Player not found</div>

    const player = getPlayerById(id)

    if (!player) return <div>Player not found</div>

    const club = clubs.find(club => club.id === player.clubId);

    return (
        <div className="flex flex-col  gap-10">

            <div className="flex min-h-[calc(100vh-80px)] h-[calc(100vh-80px)] w-full overflow-clip pt-10 relative gap-20 px-36">

                <div className="flex flex-col gap-5 ">

                    <div className="flex gap-5 items-center">
                        <img src={club?.logo} alt={club?.name} className="w-24" />

                        <ThemedBadge>
                            <p className='text-base font-medium'>{player.rank}</p>
                        </ThemedBadge>
                    </div>

                    <div className="flex flex-col">
                        <p className='text-lg'>{player.name.split(' ')[0]}</p>
                        <p className='text-4xl font-bold leading-none'>{player.name.split(' ')[1]}</p>
                        <p className='text-gray-500 text-sm mt-2'>@{player.username}</p>
                    </div>

                    <hr />

                    <div className="flex gap-10">

                        <div className="flex flex-col">
                            <p>Reviews</p>

                            <div className="flex gap-2">
                                <div className="flex">
                                    <Star fill='yellow' className='text-yellow-300' />
                                    <p>5</p>
                                </div>

                                <p>({player.reviews.length})</p>

                            </div>
                        </div>

                        <div className="flex flex-col">
                            <p>Rank</p>
                            <p>{club?.rank}</p>
                        </div>
                    </div>
                    <hr />

                    <div className="flex flex-col text-base gap-1 text-gray-500">
                        <p>Player</p>
                        <p>{player.position}</p>
                        <p>{player.level} Level</p>
                        <p>{player.location}</p>
                    </div>
                </div>

                <div className="flex-1 flex relative">
                    <p className='text-[15rem] font-bold'>{player.jerseyNumber}</p>
                    <img src={player.avatar} alt={player.name} className='absolute top-0 right-0 translate-x-[8rem]' />
                </div>


                <div className="flex flex-col items-end gap-5">
                    {
                        player.equipment.map((equipment) => (
                            <EquipmentCard key={equipment.id} equipment={equipment} />
                        ))
                    }
                </div>


                <div className="flex flex-col absolute bottom-0 left-0 w-full ">

                    <div className="flex w-full items-end bg-gradient-to-b to-blue-200 px-36">
                        <div style={{ gridTemplateColumns: `repeat(${player.seasonStats.slice(0, 7).length}, 1fr)` }} className="ml-auto grid w-1/2 gap-5 py-4 ">
                            {
                                player.seasonStats.slice(0, 7).map((stat) => (
                                    <p>{stat.key}</p>
                                ))
                            }
                        </div>
                    </div>


                    <div className="flex py-4 bg-blue-200 px-36">
                        <p>Current Season</p>

                        <div style={{ gridTemplateColumns: `repeat(${player.seasonStats.slice(0, 7).length}, 1fr)` }} className="w-1/2 grid gap-5 ml-auto place">
                            {
                                player.seasonStats.slice(0, 7).map((stat) => (
                                    <p>{stat.value}</p>
                                ))
                            }
                        </div>
                    </div>

                    <div className="flex py-4 bg-yellow-200 px-36">
                        <p>All Seasons</p>

                        <div style={{ gridTemplateColumns: `repeat(${player.seasonStats.slice(0, 7).length}, 1fr)` }} className="w-1/2 grid gap-5 ml-auto">
                            {
                                player.careerStats.slice(0, 7).map((stat) => (
                                    <p>{stat.value}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex w-full gap-10 px-36">
                <div className="w-[60%] flex flex-col gap-10">
                    <div className="flex flex-col gap-2 p-4 rounded-2xl shadow border border-gray-200">
                        <h2 className='text-2xl font-bold'>Matches</h2>

                        <hr />

                        <div className="flex items-center justify-center gap-5">
                            <div className="flex flex-col items-center">
                                <p className='text-2xl'>{player.seasonStats.find(stat => stat.key === 'Games')?.value}</p>
                                <p className='text-sm text-gray-500'>Current Season</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <p className='text-2xl'>{player.careerStats.find(stat => stat.key === 'Games')?.value}</p>
                                <p className='text-sm text-gray-500'>All Season</p>
                            </div>
                        </div>

                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Match Name</TableHead>
                                    <TableHead>Match Score</TableHead>
                                    <TableHead>Result</TableHead>
                                    <TableHead >Rank</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    player.matchResults.map((gameResult) => (
                                        <TableRow>
                                            <TableCell className="font-medium">VS {gameResult.opponent}</TableCell>
                                            <TableCell>{gameResult.score}</TableCell>
                                            <TableCell>{gameResult.result}</TableCell>
                                            <TableCell>+20</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </div>

                    <div className="flex flex-col">
                        <h2 className='text-2xl font-bold'>Overall Statistics</h2>
                        <OverallStatisticsChart player={player} />
                    </div>

                </div>
                <div className="w-[40%] flex flex-col gap-10">
                    <div className="flex flex-col gap-2 p-4 rounded-2xl shadow border border-gray-200">
                        <h2 className='text-2xl font-bold'>Overview</h2>

                        <hr />

                        <div className="grid grid-cols-3">
                            <p>Rank S</p>
                            {/* <WinRatioPieChart player={player} /> */}
                            <WinLossPieChart player={player} />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className='text-2xl font-bold'>Player Highlights</h2>

                        <div className="grid grid-cols-2">
                            {
                                player.highlights.map((highlight) => (

                                    <div className="flex flex-col cursor-pointer gap-2">
                                        <div className="w-full aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
                                            <Play />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className='text-lg font-bold'>{highlight.title}</p>
                                            <p>{highlight.description}</p>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

const EquipmentCard = ({ equipment }: { equipment: any }) => {
    return (
        <div className="flex items-end gap-2">
            <div className="flex flex-col items-end">
                <p>{equipment.brand}</p>
                <p>{equipment.name}</p>
            </div>

            <div className="size-16 rounded-xl bg-gray-200"></div>
        </div>
    )
}

const OverallStatisticsChart = ({ player }: { player: ComprehensivePlayer }) => {


    const chartData = player.radarData.map((data) => {
        return {
            category: data.category,
            value: data.value,
        }
    })

    const chartConfig = {
        value: {
            label: "Value",
            color: "var(--chart-1)",
        },
    } satisfies ChartConfig

    return (
        <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square min-h-[550px]"
        >
            <RadarChart data={chartData}>
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <PolarGrid radialLines={false} polarRadius={[90]} strokeWidth={1} />
                <PolarAngleAxis dataKey="category" />
                <Radar
                    dataKey="value"
                    fill="var(--color-value)"
                    fillOpacity={0.6}
                />
            </RadarChart>
        </ChartContainer>
    )
}

const WinRatioPieChart = ({ player }: { player: ComprehensivePlayer }) => {
    // Parse win ratio percentage to get numeric value
    const winPercentage = parseFloat(player.winRatio.replace('%', ''));
    const lossPercentage = 100 - winPercentage;

    const chartData = [
        { category: "Wins", value: winPercentage, fill: "#22c55e" },
        { category: "Losses", value: lossPercentage, fill: "#ef4444" },
    ]

    const chartConfig = {
        value: {
            label: "Percentage",
        },
    } satisfies ChartConfig

    return (
        <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square min-h-[200px]"
        >
            <PieChart>
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="category"
                    innerRadius={60}
                    strokeWidth={5}
                >
                    <Label
                        content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                return (
                                    <text
                                        x={viewBox.cx}
                                        y={viewBox.cy}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        className='text-2xl font-bold'
                                    >
                                        {player.winRatio}
                                    </text>
                                )
                            }
                        }}
                    />
                </Pie>
            </PieChart>
        </ChartContainer>
    )
}

const WinLossPieChart = ({ player }: { player: ComprehensivePlayer }) => {
    const totalGames = player.wins + (player.wins / parseFloat(player.winRatio.replace('%', '')) * 100 - player.wins);
    const losses = Math.round(totalGames - player.wins);

    const chartData = [
        { category: "Wins", value: player.wins, fill: "#22c55e" },
        { category: "Losses", value: losses, fill: "#ef4444" },
    ]

    const chartConfig = {
        value: {
            label: "Games",
        },
    } satisfies ChartConfig

    return (
        <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square min-h-[200px]"
        >
            <PieChart>
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="category"
                    innerRadius={60}
                    strokeWidth={5}
                >
                    <Label
                        content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox && typeof viewBox.cx === 'number' && typeof viewBox.cy === 'number') {
                                return (
                                    <g>
                                        <text
                                            x={viewBox.cx}
                                            y={viewBox.cy - 10}
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            className='text-lg font-bold text-green-600'
                                        >
                                            {player.wins}W
                                        </text>
                                        <text
                                            x={viewBox.cx}
                                            y={viewBox.cy + 10}
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            className='text-lg font-bold text-red-600'
                                        >
                                            {losses}L
                                        </text>
                                    </g>
                                )
                            }
                        }}
                    />
                </Pie>
            </PieChart>
        </ChartContainer>
    )
}