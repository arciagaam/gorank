import React, { useEffect } from 'react'
import { useAuth } from '~/context/auth-provider'
import { useNavigate } from 'react-router'
import { dummyPlayers } from '~/dummy/player'
import { clubs } from '~/dummy/clubs'
import { Play, Star } from 'lucide-react'
import { Badge } from '~/components/ui/badge'
import ThemedBadge from '~/components/badge/themed-badge'
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from '~/components/ui/chart'
import { Label, Pie, PieChart, PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts'
import type { ComprehensivePlayer } from '~/schema/player'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table'

export default function ProfilePage() {

    const { user } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate('/')
        }
    }, [user])

    if (!user) return null;

    const player = dummyPlayers[0];

    const club = clubs.find(club => club.id === player.clubId);


    return (
        <div className="flex flex-col gap-10 pb-20 lg:pb-0">

            <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)] h-auto lg:h-[calc(100vh-80px)] w-full overflow-clip pt-10 relative gap-10 lg:gap-20 px-4 sm:px-8 lg:px-36">

                <div className="flex flex-col gap-5 order-1 lg:order-none">

                    <div className="flex gap-5 items-center">
                        <img src={club?.logo} alt={club?.name} className="w-16 sm:w-20 lg:w-24" />

                        <ThemedBadge>
                            <p className='text-sm sm:text-base font-medium'>{player.rank}</p>
                        </ThemedBadge>
                    </div>

                    <div className="flex flex-col">
                        <p className='text-base sm:text-lg'>{player.name.split(' ')[0]}</p>
                        <p className='text-2xl sm:text-3xl lg:text-4xl font-bold leading-none'>{player.name.split(' ')[1]}</p>
                        <p className='text-gray-500 text-xs sm:text-sm mt-2'>@{player.username}</p>
                    </div>

                    <hr />

                    <div className="flex gap-6 sm:gap-10">

                        <div className="flex flex-col">
                            <p className="text-sm sm:text-base">Reviews</p>

                            <div className="flex gap-2">
                                <div className="flex">
                                    <Star fill='yellow' className='text-yellow-300 w-4 h-4' />
                                    <p className="text-sm sm:text-base">5</p>
                                </div>

                                <p className="text-sm sm:text-base">({player.reviews.length})</p>

                            </div>
                        </div>

                        <div className="flex flex-col">
                            <p className="text-sm sm:text-base">Rank</p>
                            <p className="text-sm sm:text-base">{club?.rank}</p>
                        </div>
                    </div>
                    <hr />

                    <div className="flex flex-col text-sm sm:text-base gap-1 text-gray-500">
                        <p>Player</p>
                        <p>{player.position}</p>
                        <p>{player.level} Level</p>
                        <p>{player.location}</p>
                    </div>
                </div>

                <div className="flex-1 flex relative order-2 lg:order-none">
                    <p className='text-8xl sm:text-10xl lg:text-[15rem] font-bold'>{player.jerseyNumber}</p>
                    <img src={player.avatar} alt={player.name} className='absolute top-0 right-0 translate-x-4 sm:translate-x-8 lg:translate-x-[8rem] w-16 h-16 sm:w-24 sm:h-24 lg:w-auto lg:h-auto' />
                </div>


                <div className="flex flex-col items-end gap-5 order-3 lg:order-none">
                    {
                        player.equipment.map((equipment) => (
                            <EquipmentCard key={equipment.id} equipment={equipment} />
                        ))
                    }
                </div>


                <div className="flex flex-col absolute bottom-0 left-0 w-full order-4 lg:order-none">

                    <div className="flex w-full items-end bg-gradient-to-b to-blue-200 px-4 sm:px-8 lg:px-36">
                        <div style={{ gridTemplateColumns: `repeat(${player.seasonStats.slice(0, 7).length}, 1fr)` }} className="ml-auto grid w-full sm:w-1/2 gap-2 sm:gap-5 py-4 overflow-x-auto">
                            {
                                player.seasonStats.slice(0, 7).map((stat) => (
                                    <p className='text-xs sm:text-sm text-center'>{stat.key}</p>
                                ))
                            }
                        </div>
                    </div>


                    <div className="flex py-4 bg-blue-200 px-4 sm:px-8 lg:px-36">
                        <p className='font-bold text-sm sm:text-base'>Current Season</p>

                        <div style={{ gridTemplateColumns: `repeat(${player.seasonStats.slice(0, 7).length}, 1fr)` }} className="w-full sm:w-1/2 grid gap-2 sm:gap-5 ml-auto place overflow-x-auto">
                            {
                                player.seasonStats.slice(0, 7).map((stat) => (
                                    <p className="text-xs sm:text-sm text-center">{stat.value}</p>
                                ))
                            }
                        </div>
                    </div>

                    <div className="flex py-4 bg-yellow-200 px-4 sm:px-8 lg:px-36">
                        <p className='font-bold text-sm sm:text-base'>All Seasons</p>

                        <div style={{ gridTemplateColumns: `repeat(${player.careerStats.slice(0, 7).length}, 1fr)` }} className="w-full sm:w-1/2 grid gap-2 sm:gap-5 ml-auto overflow-x-auto">
                            {
                                player.careerStats.slice(0, 7).map((stat) => (
                                    <p className="text-xs sm:text-sm text-center">{stat.value}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row w-full gap-10 px-4 sm:px-8 lg:px-36">
                <div className="w-full lg:w-[60%] flex flex-col gap-10">
                    <div className="flex flex-col gap-5 p-4 rounded-2xl shadow border border-gray-200">
                        <h2 className='text-xl sm:text-2xl font-bold'>Matches</h2>

                        <div className="flex items-center justify-center gap-5">
                            <div className="flex flex-col items-center">
                                <p className='text-xl sm:text-2xl'>{player.seasonStats.find(stat => stat.key === 'Games')?.value}</p>
                                <p className='text-xs sm:text-sm text-gray-500'>Current Season</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <p className='text-xl sm:text-2xl'>{player.careerStats.find(stat => stat.key === 'Games')?.value}</p>
                                <p className='text-xs sm:text-sm text-gray-500'>All Season</p>
                            </div>
                        </div>

                        <hr />

                        <p className='text-sm font-bold'>Recent Matches</p>

                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px] text-xs sm:text-sm">Match Name</TableHead>
                                        <TableHead className="text-xs sm:text-sm">Match Score</TableHead>
                                        <TableHead className="text-xs sm:text-sm">Result</TableHead>
                                        <TableHead className="text-xs sm:text-sm">Rank</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                        player.matchResults.map((gameResult) => (
                                            <TableRow>
                                                <TableCell className="font-medium text-xs sm:text-sm">VS {gameResult.opponent}</TableCell>
                                                <TableCell className="text-xs sm:text-sm">{gameResult.score}</TableCell>
                                                <TableCell className="text-xs sm:text-sm">{gameResult.result}</TableCell>
                                                <TableCell className="text-xs sm:text-sm">+20</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h2 className='text-xl sm:text-2xl font-bold'>Overall Statistics</h2>
                        <OverallStatisticsChart player={player} />
                    </div>

                </div>
                <div className="w-full lg:w-[40%] flex flex-col gap-10">
                    <div className="flex flex-col gap-2 p-4 rounded-2xl shadow border border-gray-200">
                        <h2 className='text-xl sm:text-2xl font-bold'>Overview</h2>

                        <hr />

                        <div className="flex flex-col sm:flex-row gap-5 items-center">

                            <div className="flex flex-col items-center justify-center h-32 sm:h-[160px] aspect-square rounded-full border-yellow-400 border-8 sm:border-16">
                                <p className='font-bold text-lg sm:text-2xl'>S</p>
                                <p className="text-xs sm:text-sm">Rank</p>
                            </div>
                            {/* <WinRatioPieChart player={player} /> */}
                            <WinLossPieChart player={player} />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className='text-xl sm:text-2xl font-bold'>Player Highlights</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {
                                player.highlights.map((highlight) => (

                                    <div className="flex flex-col cursor-pointer gap-2">
                                        <div className="w-full aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
                                            <Play className="w-6 h-6 sm:w-8 sm:h-8" />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className='text-base sm:text-lg font-bold'>{highlight.title}</p>
                                            <p className="text-sm sm:text-base">{highlight.description}</p>
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
                <p className="text-xs sm:text-sm">{equipment.brand}</p>
                <p className="text-xs sm:text-sm">{equipment.name}</p>
            </div>

            <div className="size-12 sm:size-16 rounded-xl bg-gray-200"></div>
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
            className="mx-auto aspect-square min-h-[300px] sm:min-h-[400px] lg:min-h-[550px]"
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
            className="aspect-square min-h-[150px] sm:min-h-[200px] h-[150px] sm:h-[200px]"
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
                                            className='text-sm sm:text-lg font-bold text-green-600'
                                        >
                                            {player.wins}W
                                        </text>
                                        <text
                                            x={viewBox.cx}
                                            y={viewBox.cy + 10}
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            className='text-sm sm:text-lg font-bold text-red-600'
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