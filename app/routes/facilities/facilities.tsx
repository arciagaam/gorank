import React, { useState, useMemo } from 'react'
import { useSportTheme } from '~/context/sport-theme-provider';
import { getFacilitiesBySportTypes } from '~/services/facility';
import type { Facility } from '~/schema/facility';
import { SearchBar } from '~/components/search-bar/search-bar';
import { Link } from 'react-router';

export default function FacilitiesPage() {
    const { selectedSport } = useSportTheme();
    const [searchQuery, setSearchQuery] = useState('');
    const allFacilities = getFacilitiesBySportTypes(selectedSport);

    // Filter facilities based on search query
    const filteredFacilities = useMemo(() => {
        if (!searchQuery.trim()) {
            return allFacilities;
        }

        const query = searchQuery.toLowerCase();
        return allFacilities.filter((facility) => {
            // Search in facility name
            if (facility.name.toLowerCase().includes(query)) return true;
            
            // Search in location
            if (facility.location.toLowerCase().includes(query)) return true;
            
            // Search in description
            if (facility.description.toLowerCase().includes(query)) return true;
            
            // Search in amenities
            if (facility.amenities.some(amenity => 
                amenity.name.toLowerCase().includes(query)
            )) return true;
            
            // Search in sport types
            if (facility.sportTypes.some(sport => 
                sport.toLowerCase().includes(query)
            )) return true;
            
            return false;
        });
    }, [allFacilities, searchQuery]);

    // Group filtered facilities by status
    const popularFacilities = filteredFacilities.filter((facility) => facility.status === 'popular');
    const topFacilities = filteredFacilities.filter((facility) => facility.status === 'top');
    const nearFacilities = filteredFacilities.filter((facility) => facility.status === 'near');

    return (
        <div className="flex flex-col items-center w-full gap-6 md:gap-10 py-6 md:py-10 px-4 md:px-36">
            <SearchBar 
                placeholder="Search for facilities" 
                value={searchQuery}
                onChange={setSearchQuery}
            />
            
            {searchQuery && (
                <div className="w-full">
                    <p className="text-sm text-gray-600 mb-4">
                        Found {filteredFacilities.length} facility{filteredFacilities.length !== 1 ? 'ies' : ''} for "{searchQuery}"
                    </p>
                </div>
            )}

            {filteredFacilities.length === 0 && searchQuery ? (
                <div className="text-center py-10">
                    <p className="text-gray-500 text-base md:text-lg">No facilities found matching your search.</p>
                    <p className="text-gray-400 text-sm mt-2">Try searching with different keywords.</p>
                </div>
            ) : (
                <>
                    {popularFacilities.length > 0 && (
                        <FacilitySection status="Popular" facilities={popularFacilities} />
                    )}
                    {topFacilities.length > 0 && (
                        <FacilitySection status="Top" facilities={topFacilities} />
                    )}
                    {nearFacilities.length > 0 && (
                        <FacilitySection status="Near" facilities={nearFacilities} />
                    )}
                </>
            )}
        </div>
    )
}

const FacilitySection = ({ status, facilities }: { status: string, facilities: Facility[] }) => {
    return (
        <div className="flex flex-col gap-3 md:gap-2">
            <h3 className="text-base md:text-lg font-semibold">{status}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
                {facilities.map((facility) => (
                    <FacilityCard key={facility.id} facility={facility} />
                ))}
            </div>
        </div>
    )
}

const FacilityCard = ({ facility }: { facility: Facility }) => {
    return (
        <Link to={`/facilities/${facility.id}`} className="flex flex-col rounded-lg hover:bg-gray-100/50 transition-all touch-target">
            <img src={facility.pictures[0]} alt={facility.name} className="aspect-square rounded-lg object-cover" />
            <div className="flex flex-col gap-1 md:gap-2 p-2">
                <h3 className="text-sm md:text-lg font-semibold line-clamp-2">{facility.name}</h3>
                <p className="text-xs md:text-sm text-gray-500 line-clamp-1">{facility.location}</p>
            </div>
        </Link>
    )
}