import React, { useState, useMemo } from "react";
import ThemedButton from "~/components/button/themed-button";
import { SearchBar } from "~/components/search-bar/search-bar";
import { SPORT_BANNER_IMAGES } from "~/config";
import { useSportTheme } from "~/context/sport-theme-provider";
import { getAllClubs } from "~/services/club";
import type { Club } from "~/schema/club";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";

export default function ClubsPage() {
    const { selectedSport } = useSportTheme();
    const [searchQuery, setSearchQuery] = useState("");

    const clubs = getAllClubs();

    // Filter clubs based on search query
    const filteredClubs = useMemo(() => {
        if (!searchQuery.trim()) {
            return clubs;
        }

        const query = searchQuery.toLowerCase();
        return clubs.filter((club) => {
            // Search in club name
            if (club.name.toLowerCase().includes(query)) return true;
            
            // Search in location
            if (club.location.toLowerCase().includes(query)) return true;
            
            // Search in rank
            if (club.rank.toLowerCase().includes(query)) return true;
            
            // Search in visibility
            if (club.visibility.toLowerCase().includes(query)) return true;
            
            return false;
        });
    }, [clubs, searchQuery]);

    return (
        <div className="flex flex-col w-full gap-6 md:gap-10">

            <div className="flex flex-col min-h-[50vh] md:min-h-[70vh] w-full relative items-center" style={{ backgroundImage: `url(${SPORT_BANNER_IMAGES[selectedSport]})` }}>
                <div className="absolute inset-0 bg-black/50" />

                <div className="flex flex-col z-10 w-full md:w-1/2 items-center h-[50vh] md:h-[70vh] py-10 md:py-20 px-4" >
                    <SearchBar
                        placeholder="Search clubs"
                        value={searchQuery}
                        onChange={setSearchQuery}
                    />

                    <div className="flex flex-col my-auto items-center text-white gap-3 text-center">
                        <h1 className="uppercase text-2xl md:text-4xl font-bold px-4">Create your basketball community today</h1>
                        <p className="text-sm md:text-base px-4">Join fellow enthusiasts, share your passion, and elevate the game together!</p>
                        <Link to="/clubs/create">
                            <ThemedButton className="mt-6 md:mt-10">Get Started</ThemedButton>
                        </Link>
                    </div>
                </div>

            </div>

            <div className="flex flex-col gap-6 md:gap-10 py-6 md:py-10 px-4 md:px-36">
                {searchQuery && (
                    <div className="w-full">
                        <p className="text-sm text-gray-600 mb-4">
                            Found {filteredClubs.length} club{filteredClubs.length !== 1 ? 's' : ''} for "{searchQuery}"
                        </p>
                    </div>
                )}


                {filteredClubs.length === 0 && searchQuery ? (
                    <div className="text-center py-10">
                        <p className="text-gray-500 text-base md:text-lg">No clubs found matching your search.</p>
                        <p className="text-gray-400 text-sm mt-2">Try searching with different keywords.</p>
                        <Button
                            variant={'ghost'}
                            onClick={() => setSearchQuery("")}
                            className="mt-4"
                        >
                            Clear search
                        </Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {filteredClubs.map((club) => (
                            <ClubCard key={club.id} club={club} />
                        ))}
                    </div>
                )}
            </div>
            {/* 
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold">Clubs</h1>
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold">Suggested Clubs</h2>
                    {
                        Array.from({ length: 10 }).map((_, index) => (
                            <div key={index} className="flex flex-col">
                                <h1 className="text-2xl font-bold">Club {index + 1}</h1>
                            </div>
                        ))
                    }
                </div>
            </div> */}

        </div>
    )
}

const ClubCard = ({ club }: { club: Club }) => {
    return (
        <div className="flex flex-col rounded-xl border border-gray-200 overflow-clip shadow">

            <div className="aspect-video relative">
                <img src={club.banner} alt={club.name} className="object-cover h-full w-full" />

                <img src={club.logo} alt={club.name} className="absolute bottom-0 left-2 md:left-4 h-12 md:h-16 w-auto translate-y-1/2" />
            </div>

            <div className="flex flex-col gap-2 p-3 md:p-4">
                <div className="pl-20 md:pl-28 flex flex-col">
                    <h2 className="font-semibold text-sm md:text-base line-clamp-1">{club.name}</h2>

                    <p className="text-gray-400 text-xs md:text-sm truncate" title={club.location}>{club.location}</p>
                </div>
            </div>

            <div className="flex flex-col gap-2 p-3 md:p-4">
                <div className="grid grid-cols-4 w-full text-xs font-medium gap-1">
                    <div className="flex flex-col items-center">
                        <p className="text-sm md:text-base">{club.rank}</p>
                        <p className="text-gray-400 text-xs">Rank</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-sm md:text-base">{club.members}</p>
                        <p className="text-gray-400 text-xs">Members</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-sm md:text-base">{club.matchesPlayed}</p>
                        <p className="text-gray-400 text-xs text-center">Matches</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-sm md:text-base">{club.reviews}</p>
                        <p className="text-gray-400 text-xs">Reviews</p>
                    </div>
                </div>
            </div>

            <div className="flex w-full gap-2 p-3 md:p-4 mt-auto">
                <Link className="flex-1" to={`/clubs/${club.id}`}>
                    <ThemedButton variant="secondary" className="w-full flex-1 text-xs md:text-sm py-2">View Details</ThemedButton>
                </Link>

                <Link to={`/clubs/${club.id}?join=true`} className="w-full flex-1">
                    <ThemedButton className="flex-1 w-full text-xs md:text-sm py-2">Join Club</ThemedButton>
                </Link>
            </div>
        </div>
    )
}