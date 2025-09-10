import React, { useState, useMemo, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import { ThemedSelectContent, ThemedSelectItem, ThemedSelectTrigger } from '~/components/select/themed-select';
import { Icon } from '~/components/ui/icon';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import { useSportTheme } from '~/context/sport-theme-provider'
import { dummyPlayers } from '~/dummy/player'
import { clubs } from '~/dummy/clubs'
import type { ComprehensivePlayer } from '~/schema/player';
import type { Club } from '~/schema/club';
import PlayerModal from '~/components/player-modal/player-modal';

export default function LeaderboardsPage() {
    const { sportStyles } = useSportTheme();

    return (
        <div className="flex flex-col w-full gap-6 md:gap-10 py-6 md:py-10 px-4 md:px-36 min-h-[calc(100vh-80px)]">
            <Tabs defaultValue="players" className="w-full">
                <TabsList className="mx-auto bg-transparent w-full max-w-[600px]">
                    <TabsTrigger
                        value="players"
                        className={twMerge(
                            "cursor-pointer py-3 md:py-5 rounded-none rounded-l-full bg-[#FDF2F2FF] data-[state=active]:text-white text-sm md:text-base",
                            sportStyles.tabTriggerStyle,
                        )}>
                        Top Players
                    </TabsTrigger>
                    <TabsTrigger
                        value="clubs"
                        className={twMerge(
                            "cursor-pointer py-3 md:py-5 rounded-none rounded-r-full bg-[#FDF2F2FF] data-[state=active]:text-white text-sm md:text-base",
                            sportStyles.tabTriggerStyle,
                        )}>
                        Top Clubs
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="players">
                    <PlayerLeaderboard
                    // handleRegionChange={handleRegionChange}
                    // handlePositionChange={handlePositionChange}
                    // selectedRegion={selectedRegion}
                    // selectedPosition={selectedPosition}
                    />
                </TabsContent>
                <TabsContent value="clubs">
                    <ClubLeaderboard
                    // handleRegionChange={handleRegionChange}
                    // selectedRegion={selectedRegion}
                    />
                </TabsContent>
            </Tabs>
        </div>
    )
}

const PlayerLeaderboard = () => {
    const { selectedSport } = useSportTheme();
    const [selectedRegion, setSelectedRegion] = useState<string>("");
    const [selectedPosition, setSelectedPosition] = useState<string>("");

    // Filter players by sport first
    const sportFilteredPlayers = useMemo(() => {
        return dummyPlayers.filter(player => player.primarySport === selectedSport);
    }, [selectedSport]);

    // Extract unique locations from sport-filtered players
    const uniqueLocations = useMemo(() => {
        const locations = sportFilteredPlayers.map(player => player.location);
        return [...new Set(locations)].sort();
    }, [sportFilteredPlayers]);

    // Sport-specific position mappings
    const sportPositions = useMemo(() => {
        const positionMap: Record<string, string[]> = {
            basketball: [
                "Point Guard",
                "Shooting Guard",
                "Small Forward",
                "Power Forward",
                "Center"
            ],
            volleyball: [
                "Outside Hitter",
                "Middle Blocker",
                "Opposite Hitter",
                "Setter",
                "Libero",
                "Defensive Specialist"
            ],
            pickleball: [
                "Doubles Player",
                "Singles Player"
            ],
            tennis: [
                "Singles Player",
                "Doubles Player"
            ],
            badminton: [
                "Singles Player",
                "Doubles Player"
            ]
        };
        return positionMap[selectedSport] || [];
    }, [selectedSport]);

    // Reset filters when sport changes
    useEffect(() => {
        setSelectedRegion("");
        setSelectedPosition("");
    }, [selectedSport]);

    // Apply all filters (sport, region, position)
    const filteredPlayers = useMemo(() => {
        let filtered = sportFilteredPlayers;

        // Filter by region if selected
        if (selectedRegion) {
            filtered = filtered.filter(player => player.location === selectedRegion);
        }

        // Filter by position if selected
        if (selectedPosition) {
            filtered = filtered.filter(player => player.position === selectedPosition);
        }

        // Sort by leaderboard rank
        return filtered.sort((a, b) => a.leaderboardRank - b.leaderboardRank);
    }, [sportFilteredPlayers, selectedRegion, selectedPosition]);


    return (
        <div className="flex flex-col items-center w-full gap-6 md:gap-10 my-6 md:my-10">
            <h1 className='text-xl md:text-2xl font-bold'>Top Players</h1>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-5 w-full max-w-2xl">
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <ThemedSelectTrigger className="w-full">
                        <SelectValue placeholder="Region" />
                    </ThemedSelectTrigger>
                    <ThemedSelectContent>
                        {uniqueLocations.map((location) => (
                            <ThemedSelectItem key={location} value={location}>
                                {location}
                            </ThemedSelectItem>
                        ))}
                    </ThemedSelectContent>
                </Select>

                <Select value={selectedPosition} onValueChange={setSelectedPosition}>
                    <ThemedSelectTrigger className="w-full">
                        <SelectValue placeholder="Position" />
                    </ThemedSelectTrigger>
                    <ThemedSelectContent>
                        {sportPositions.map((position) => (
                            <ThemedSelectItem key={position} value={position}>
                                {position}
                            </ThemedSelectItem>
                        ))}
                    </ThemedSelectContent>
                </Select>
            </div>

            <div className="flex flex-col gap-2 w-full">

                <div className="grid"></div>

                <div className='grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-8 px-2 md:px-8 text-xs md:text-sm font-medium text-gray-600'>
                    <p>Rank</p>
                    <p>Player</p>
                    <p className="hidden md:block">Wins</p>
                    <p>Win Ratio</p>
                </div>

                {
                    filteredPlayers.map((player, index) => (
                        <LeaderboardCard
                            key={player.id}
                            player={player}
                            rank={index + 1}
                            img={player.avatar}
                            altText={player.name}
                            name={player.name}
                            subtitle={player.position}
                            wins={player.wins}
                            winRatio={player.winRatio}
                        />
                    ))
                }




            </div>
        </div>
    )
}

const ClubLeaderboard = () => {
    const [selectedRegion, setSelectedRegion] = useState<string>("");

    // Extract unique locations from club data
    const uniqueLocations = useMemo(() => {
        const locations = clubs.map(club => club.location);
        return [...new Set(locations)].sort();
    }, []);

    // Apply region filter
    const filteredClubs = useMemo(() => {
        let filtered = clubs;

        // Filter by region if selected
        if (selectedRegion) {
            filtered = filtered.filter(club => club.location === selectedRegion);
        }

        // Sort by rank (S > A > B > C > D > E > F) and then by members
        const rankOrder = { 'S': 1, 'A': 2, 'B': 3, 'C': 4, 'D': 5, 'E': 6, 'F': 7 };
        return filtered.sort((a, b) => {
            if (rankOrder[a.rank] !== rankOrder[b.rank]) {
                return rankOrder[a.rank] - rankOrder[b.rank];
            }
            return b.members - a.members; // Higher members first for same rank
        });
    }, [selectedRegion]);

    return (
        <div className="flex flex-col items-center w-full gap-6 md:gap-10 my-6 md:my-10">
            <h1 className='text-xl md:text-2xl font-bold'>Top Clubs</h1>

            <div className="flex gap-3 md:gap-5 w-full max-w-md">
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <ThemedSelectTrigger className="w-full">
                        <SelectValue placeholder="Region" />
                    </ThemedSelectTrigger>
                    <ThemedSelectContent>
                        {uniqueLocations.map((location) => (
                            <ThemedSelectItem key={location} value={location}>
                                {location}
                            </ThemedSelectItem>
                        ))}
                    </ThemedSelectContent>
                </Select>
            </div>

            <div className="flex flex-col gap-2 w-full">
                <div className='grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-8 px-2 md:px-8 text-xs md:text-sm font-medium text-gray-600'>
                    <p>Rank</p>
                    <p>Club</p>
                    <p className="hidden md:block">Members</p>
                    <p>Matches</p>
                </div>

                {filteredClubs.map((club, index) => (
                    <ClubLeaderboardCard
                        key={club.id}
                        rank={index + 1}
                        club={club}
                    />
                ))}
            </div>
        </div>
    )
}

interface RankBadgeProps {
    rank: number;
    className?: string;
}

const getRankBadgeVariant = (index: number): string => {
    if (index === 0) return "bg-yellow-100";
    if (index === 1) return "bg-gray-100";
    if (index === 2) return "bg-orange-100";
    return "bg-white";
};

const RankBadge = ({ rank, className = "" }: RankBadgeProps) => {
    // const rankIndex = rank - 1;
    // const bgColor = getRankBadgeVariant(rankIndex);

    return (
        <div className={`flex items-center ${className}`}>
            <span className={`ml-2 md:ml-4 text-2xl md:text-4xl font-bold ${rank === 1 ? 'text-yellow-500' : rank === 2 ? 'text-gray-400' : rank === 3 ? 'text-gray-900' : 'text-gray-900'}`}>{rank}</span>
        </div>
    );
}

type LeaderboardCardProps = {
    player: ComprehensivePlayer;
    rank: number;
    img: string;
    altText: string;
    name: string;
    subtitle: string;
    wins: number;
    winRatio: string;
}

const LeaderboardCard = ({ player, rank, img, altText, name, subtitle, wins, winRatio }: LeaderboardCardProps) => {

    // const rankIndex = rank - 1;
    // const rankBgColor = getRankBadgeVariant(rankIndex);

    const getWinRatioColor = (winRatio: string) => {
        const ratio = parseInt(winRatio.replace("%", ""));
        return ratio >= 50 ? "text-green-600" : "text-red-600";
    };

    const getWinRatioArrow = (winRatio: string) => {
        const ratio = parseInt(winRatio.replace("%", ""));
        return ratio >= 50 ? "ArrowUp" : "ArrowDown";
    };

    return (
        <PlayerModal player={player}>
            <div className='grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-8 px-2 md:px-8 py-2 rounded-xl shadow-sm border bg-white border-gray-200 hover:shadow-lg transition-all min-h-[80px] md:min-h-[100px]'>
                <RankBadge rank={rank} />
                <div className="flex items-center gap-2 md:gap-4 overflow-visible">
                    <div className="relative w-12 h-16 md:w-20 md:h-24">
                        <img
                            src={img}
                            alt={altText}
                            className="absolute w-12 h-16 md:w-20 md:h-28 object-contain -mt-1 md:-mt-2"
                        />
                    </div>
                    <div className="min-w-0">
                        <p className="text-gray-900 text-sm md:text-base line-clamp-1">
                            {name}
                        </p>
                        <p className="text-gray-500 text-xs md:text-sm line-clamp-1">
                            {subtitle}
                        </p>
                    </div>
                </div>
                <div className="hidden md:flex items-center">
                    <span className="text-xl md:text-3xl font-bold text-gray-900">{wins}</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                    <Icon
                        name={getWinRatioArrow(winRatio)}
                        size={16}
                        className={`${getWinRatioColor(winRatio)} md:size-5`}
                    />
                    <span className={`text-xl md:text-3xl font-bold ${getWinRatioColor(winRatio)}`}>
                        {winRatio}
                    </span>
                </div>
            </div>
        </PlayerModal>
    )
}

type ClubLeaderboardCardProps = {
    rank: number;
    club: Club;
}

const ClubLeaderboardCard = ({ rank, club }: ClubLeaderboardCardProps) => {
    const rankIndex = rank - 1;
    const rankBgColor = getRankBadgeVariant(rankIndex);

    const getRankColor = (rank: string) => {
        const rankColors: Record<string, string> = {
            'S': 'text-yellow-600',
            'A': 'text-green-600',
            'B': 'text-blue-600',
            'C': 'text-purple-600',
            'D': 'text-orange-600',
            'E': 'text-red-600',
            'F': 'text-gray-600'
        };
        return rankColors[rank] || 'text-gray-600';
    };

    return (
        <div className='grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-8 px-2 md:px-8 py-2 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all min-h-[80px] md:min-h-[100px]'>
            <RankBadge rank={rank} />
            <div className="flex items-center gap-2 md:gap-4 overflow-visible">
                <div className="relative w-12 h-12 md:w-20 md:h-20">
                    <img
                        src={club.logo}
                        alt={club.name}
                        className="absolute w-12 h-12 md:w-20 md:h-20 object-contain"
                    />
                </div>
                <div className="min-w-0">
                    <p className="text-gray-900 font-semibold text-sm md:text-base line-clamp-1">
                        {club.name}
                    </p>
                    <p className="text-gray-500 text-xs md:text-sm line-clamp-1">
                        {club.location}
                    </p>
                </div>
            </div>
            <div className="hidden md:flex items-center">
                <span className="text-xl md:text-3xl font-bold text-gray-900">{club.members}</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
                <span className={`text-lg md:text-2xl font-bold ${getRankColor(club.rank)}`}>
                    {club.rank}
                </span>
                <span className="text-gray-600 text-xs md:text-sm">
                    ({club.matchesPlayed} matches)
                </span>
            </div>
        </div>
    )
}