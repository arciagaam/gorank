import { CalendarIcon, DotIcon, SearchIcon, Timer, User } from "lucide-react";
import { useState, useMemo, useRef, useEffect } from "react";
import { Link } from "react-router";
import ThemedBadge from "~/components/badge/themed-badge";
import ThemedButton from "~/components/button/themed-button";
import PlayerModal from "~/components/player-modal/player-modal";
import { SearchBar } from "~/components/search-bar/search-bar";
import { useSportTheme } from "~/context/sport-theme-provider";
import { formatDuration } from "~/lib/time";
import type { Game } from "~/schema/game";
import { getAllGames, getGamesBySportType } from "~/services/game";
import { useWindow } from "~/hooks/useWindow";
import { GameSection } from "~/components/game/GameSection";

export default function LandingPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const { isMobile } = useWindow()

    return (
        <div className="flex flex-col items-center w-full gap-6 md:gap-10 py-6 md:py-10 lg:px-36 px-4">
            <SearchBar 
                placeholder="Search for games" 
                value={searchQuery}
                onChange={setSearchQuery}
            />
            <DateSelector />
            <GamesGrid searchQuery={searchQuery} />
        </div>
    )
}


const DateSelector = () => {
    const { isMobile } = useWindow();
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [visibleMonthYear, setVisibleMonthYear] = useState('');
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Get 7 days of the week for the given date (Sunday to Saturday)
    const getWeekDays = (date: Date) => {
        const currentDay = date.getDay(); // 0 = Sunday, 1 = Monday, etc.
        const sunday = new Date(date);
        sunday.setDate(date.getDate() - currentDay);

        const days = [];
        for (let i = 0; i < 7; i++) {
            const day = new Date(sunday);
            day.setDate(sunday.getDate() + i);
            days.push(day);
        }
        return days;
    };

    // Get 30 days for mobile navigation (15 days before and after current date)
    const getMobileDays = (date: Date) => {
        const days = [];
        for (let i = -15; i <= 15; i++) {
            const day = new Date(date);
            day.setDate(date.getDate() + i);
            days.push(day);
        }
        return days;
    };

    const weekDays = getWeekDays(currentDate);
    const mobileDays = getMobileDays(currentDate);

    // Handle scroll to update month display
    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollLeft = container.scrollLeft;
            const itemWidth = 72; // min-w-[60px] + gap-2 = approximately 72px
            const centerIndex = Math.round(scrollLeft / itemWidth);
            const clampedIndex = Math.max(0, Math.min(centerIndex, mobileDays.length - 1));
            
            if (mobileDays[clampedIndex]) {
                const monthYear = mobileDays[clampedIndex].toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
                setVisibleMonthYear(monthYear);
            }
        }
    };

    // Update visible month year when mobile days change
    useEffect(() => {
        if (isMobile && mobileDays.length > 0) {
            const middleIndex = Math.floor(mobileDays.length / 2);
            const monthYear = mobileDays[middleIndex].toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
            setVisibleMonthYear(monthYear);
        }
    }, [mobileDays, isMobile]);

    const goToPreviousWeek = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() - 7);
        setCurrentDate(newDate);
    };

    const goToNextWeek = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + 7);
        setCurrentDate(newDate);
    };

    const goToPreviousDay = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const itemWidth = 72; // min-w-[60px] + gap-2 = approximately 72px
            const currentScroll = container.scrollLeft;
            const newScroll = Math.max(0, currentScroll - itemWidth);
            container.scrollTo({ left: newScroll, behavior: 'smooth' });
        }
    };

    const goToNextDay = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const itemWidth = 72; // min-w-[60px] + gap-2 = approximately 72px
            const currentScroll = container.scrollLeft;
            const maxScroll = container.scrollWidth - container.clientWidth;
            const newScroll = Math.min(maxScroll, currentScroll + itemWidth);
            container.scrollTo({ left: newScroll, behavior: 'smooth' });
        }
    };

    // Mobile version with both scrolling and arrow navigation
    if (isMobile) {
        return (
            <div className="flex flex-col items-center justify-center w-full">
                {/* Header with month/year and navigation */}
                <div className="flex items-center justify-between w-full max-w-sm mb-4">
                    <button
                        onClick={goToPreviousDay}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <h2 className="text-lg font-semibold text-gray-900">
                        {visibleMonthYear || currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </h2>

                    <button
                        onClick={goToNextDay}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Mobile horizontal scrolling days with 5 visible */}
                <div className="w-full max-w-sm">
                    <div 
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto scrollbar-hide gap-2 px-4 py-2"
                    >
                        {mobileDays.map((day, index) => {
                            const isSelected = selectedDate &&
                                day.getDate() === selectedDate.getDate() &&
                                day.getMonth() === selectedDate.getMonth() &&
                                day.getFullYear() === selectedDate.getFullYear();
                            const isToday = day.toDateString() === new Date().toDateString();
                            const isCurrentMonth = day.getMonth() === currentDate.getMonth();

                            return (
                                <button
                                    key={index}
                                    className={`flex-shrink-0 flex flex-col items-center justify-center p-3 rounded-lg min-w-[60px] transition-colors relative ${isSelected
                                        ? 'text-white bg-blue-500 hover:bg-blue-600'
                                        : isToday
                                            ? 'text-blue-600 bg-blue-50'
                                            : isCurrentMonth
                                                ? 'text-gray-900 bg-gray-50 hover:bg-gray-100'
                                                : 'text-gray-400 bg-gray-50'
                                        }`}
                                    onClick={() => setSelectedDate(day)}
                                >
                                    <span className="text-xs font-medium">
                                        {day.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()}
                                    </span>
                                    <span className="text-lg font-semibold">
                                        {day.getDate().toString().padStart(2, '0')}
                                    </span>
                                    {isToday && (
                                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    // Desktop version (original)
    return (
        <div className="flex flex-col items-center justify-center">
            {/* Header with month/year and navigation */}
            <div className="flex items-center justify-between w-full max-w-md mb-4">
                <button
                    onClick={goToPreviousWeek}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <h2 className="text-lg font-semibold text-gray-900">
                    {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </h2>

                <button
                    onClick={goToNextWeek}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Days display */}
            <div className="flex flex-col">
                {/* Day headers */}
                <div className="grid grid-cols-7">
                    {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((dayName) => (
                        <div key={dayName} className="px-6 py-2 text-xs font-medium text-gray-500 text-center min-w-[60px]">
                            {dayName}
                        </div>
                    ))}
                </div>

                {/* Date buttons */}
                <div className="grid grid-cols-7">
                    {weekDays.map((day, index) => {
                        const isSelected = selectedDate &&
                            day.getDate() === selectedDate.getDate() &&
                            day.getMonth() === selectedDate.getMonth() &&
                            day.getFullYear() === selectedDate.getFullYear();
                        const isToday = day.toDateString() === new Date().toDateString();
                        const isCurrentMonth = day.getMonth() === currentDate.getMonth();

                        return (
                            <button
                                key={index}
                                className={`px-6 py-4 text-lg font-medium flex items-center justify-center min-w-[60px] hover:bg-gray-50 transition-colors relative ${isSelected
                                    ? 'text-white bg-blue-500 hover:bg-blue-600'
                                    : isToday
                                        ? 'text-blue-600 bg-blue-50'
                                        : isCurrentMonth
                                            ? 'text-gray-900'
                                            : 'text-gray-400'
                                    }`}
                                onClick={() => setSelectedDate(day)}
                            >
                                {day.getDate().toString().padStart(2, '0')}
                                {isToday && (
                                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

const GamesGrid = ({ searchQuery }: { searchQuery: string }) => {
    const { selectedSport } = useSportTheme();
    const allGames = getGamesBySportType(selectedSport);

    // Filter games based on search query
    const filteredGames = useMemo(() => {
        if (!searchQuery.trim()) {
            return allGames;
        }

        const query = searchQuery.toLowerCase();
        return allGames.filter((game) => {
            // Search in game name
            if (game.name.toLowerCase().includes(query)) return true;
            
            // Search in facility name
            if (game.facility?.name.toLowerCase().includes(query)) return true;
            
            // Search in skill level
            if (game.skillLevel.toLowerCase().includes(query)) return true;
            
            // Search in match type
            if (game.matchType.toLowerCase().includes(query)) return true;
            
            // Search in sport type
            if (game.sportType.toLowerCase().includes(query)) return true;
            
            // Search in location
            if (game.facility?.location.toLowerCase().includes(query)) return true;
            
            return false;
        });
    }, [allGames, searchQuery]);

    // Group filtered games by status
    const gamesStartingSoon = filteredGames.filter((game) => game.status === 'starting');
    const gamesNear = filteredGames.filter((game) => game.status === 'near');
    const gamesTomorrow = filteredGames.filter((game) => game.status === 'tomorrow');

    return (
        <div className="flex flex-col gap-10 w-full">
            {searchQuery && (
                <div className="w-full">
                    <p className="text-sm text-gray-600 mb-4">
                        Found {filteredGames.length} game{filteredGames.length !== 1 ? 's' : ''} for "{searchQuery}"
                    </p>
                </div>
            )}

            {filteredGames.length === 0 && searchQuery ? (
                <div className="text-center py-10">
                    <p className="text-gray-500 text-lg">No games found matching your search.</p>
                    <p className="text-gray-400 text-sm mt-2">Try searching with different keywords.</p>
                </div>
            ) : (
                <>
                    {gamesStartingSoon.length > 0 && (
                        <GameSection status="Starting Soon" games={gamesStartingSoon} />
                    )}
                    {gamesNear.length > 0 && (
                        <GameSection status="Games Near Me" games={gamesNear} />
                    )}
                    {gamesTomorrow.length > 0 && (
                        <GameSection status="Games Tomorrow" games={gamesTomorrow} />
                    )}
                </>
            )}
        </div>
    )
}




