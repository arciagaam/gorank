import React, { useState } from 'react'
import { Link, useParams } from 'react-router';
import { getFacilityById } from '~/services/facility';
import { Icon } from '~/components/ui/icon';
import { twMerge } from 'tailwind-merge';
import { useSportTheme } from '~/context/sport-theme-provider';
import ThemedButton from '~/components/button/themed-button';

export default function ViewFacility() {
    const { id } = useParams();
    const [showAllAmenities, setShowAllAmenities] = useState(false);
    const { sportStyles } = useSportTheme();


    if (!id) {
        return <div>Facility not found</div>
    }

    const facility = getFacilityById(id);

    if (!facility) {
        return <div>Facility not found</div>
    }

    return (
        <div className="flex flex-col w-full gap-6 md:gap-10 py-6 md:py-10 px-4 md:px-36 pb-52 lg:pb-10">
            <div className="flex flex-col">
                <h1 className='text-lg md:text-xl font-semibold'>{facility.name}</h1>
                <p className='text-xs md:text-sm text-gray-500'>{facility?.location}</p>
            </div>

            {/* Desktop Gallery */}
            <div className="hidden md:grid w-full grid-cols-3 gap-5">
                <div className="col-span-2">
                    <img src={facility?.pictures[0]} alt={facility?.name} className='w-full h-full object-cover rounded-2xl shadow' />
                </div>

                <div className="flex flex-col">
                    <div className="grid grid-rows-3 h-full aspect-video gap-5">
                        {facility?.pictures.slice(1, 4).map((picture, index) => (
                            <img
                                key={index}
                                src={picture}
                                alt={`${facility?.name} view ${index + 2}`}
                                className="w-full h-full object-cover rounded-2xl shadow"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Scrollable Gallery */}
            <div className="md:hidden">
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide px-1">
                    {facility?.pictures.map((picture, index) => (
                        <img
                            key={index}
                            src={picture}
                            alt={`${facility?.name} view ${index + 1}`}
                            className="flex-shrink-0 w-72 h-52 object-cover rounded-2xl shadow"
                        />
                    ))}
                </div>
            </div>

            <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-10">

                <div className="flex flex-col flex-1 gap-6 md:gap-10">
                    <div className="flex flex-col gap-2">
                        <h2 className='text-base md:text-lg font-semibold'>Description</h2>
                        <p className="text-sm md:text-base">{facility.description}</p>
                    </div>

                    <div className="flex flex-col gap-3 md:gap-2">
                        <h2 className='text-base md:text-lg font-semibold'>What this court offers</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5">
                            {facility?.amenities.slice(0, showAllAmenities ? undefined : 4).map((amenity) => (
                                <div key={amenity.name} className="flex items-center gap-3 md:gap-4 py-1">
                                    <Icon name={amenity.icon as keyof typeof Icon} className={twMerge('size-5 md:size-8', sportStyles.textColor.secondary)} />
                                    <p className='leading-none text-sm md:text-base'>{amenity.name}</p>
                                </div>
                            ))}
                            {facility?.amenities && facility.amenities.length > 4 && (
                                <div className="col-span-1 sm:col-span-2 mt-2">
                                    <button
                                        onClick={() => setShowAllAmenities(!showAllAmenities)}
                                        className="text-xs md:text-sm text-gray-600 hover:text-gray-800 underline py-2"
                                    >
                                        {showAllAmenities ? 'Show less' : `Show all ${facility.amenities.length} amenities`}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className='text-base md:text-lg font-semibold'>Links</h2>

                        <div className="flex flex-col gap-2">

                            <div className={twMerge("underline underline-offset-1 flex items-center gap-2", sportStyles.fill.secondary)}>
                                <div className="flex gap-2 p-1.5 md:p-2 size-8 md:size-12 text-blue-500">
                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" /></svg>
                                </div>
                                <p className='text-xs md:text-sm'>Facebook Group</p>
                            </div>

                            <div className={twMerge("underline underline-offset-1 flex items-center gap-2", sportStyles.fill.secondary)}>
                                <div className="flex gap-2 p-1.5 md:p-2 size-8 md:size-12 text-blue-500">
                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Messenger</title><path d="M12 0C5.24 0 0 4.952 0 11.64c0 3.499 1.434 6.521 3.769 8.61a.96.96 0 0 1 .323.683l.065 2.135a.96.96 0 0 0 1.347.85l2.381-1.053a.96.96 0 0 1 .641-.046A13 13 0 0 0 12 23.28c6.76 0 12-4.952 12-11.64S18.76 0 12 0m6.806 7.44c.522-.03.971.567.63 1.094l-4.178 6.457a.707.707 0 0 1-.977.208l-3.87-2.504a.44.44 0 0 0-.49.007l-4.363 3.01c-.637.438-1.415-.317-.995-.966l4.179-6.457a.706.706 0 0 1 .977-.21l3.87 2.505c.15.097.344.094.491-.007l4.362-3.008a.7.7 0 0 1 .364-.13" /></svg>
                                </div>
                                <p className='text-xs md:text-sm'>Messenger</p>
                            </div>

                            <div className={twMerge("underline underline-offset-1 flex items-center gap-2", sportStyles.fill.secondary)}>
                                <div className="flex gap-2 p-1.5 md:p-2 size-8 md:size-12 text-blue-500">
                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Viber</title><path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302.407-.44.972-1.084 1.397-1.58 3.85.326 6.812-.416 7.15-.525.776-.252 5.176-.816 5.892-6.657.74-6.02-.36-9.83-2.34-11.546-.596-.55-3.006-2.3-8.375-2.323 0 0-.395-.025-1.037-.017zm.058 1.693c.545-.004.88.017.88.017 4.542.02 6.717 1.388 7.222 1.846 1.675 1.435 2.53 4.868 1.906 9.897v.002c-.604 4.878-4.174 5.184-4.832 5.395-.28.09-2.882.737-6.153.524 0 0-2.436 2.94-3.197 3.704-.12.12-.26.167-.352.144-.13-.033-.166-.188-.165-.414l.02-4.018c-4.762-1.32-4.485-6.292-4.43-8.895.054-2.604.543-4.738 1.996-6.173 1.96-1.773 5.474-2.018 7.11-2.03zm.38 2.602c-.167 0-.303.135-.304.302 0 .167.133.303.3.305 1.624.01 2.946.537 4.028 1.592 1.073 1.046 1.62 2.468 1.633 4.334.002.167.14.3.307.3.166-.002.3-.138.3-.304-.014-1.984-.618-3.596-1.816-4.764-1.19-1.16-2.692-1.753-4.447-1.765zm-3.96.695c-.19-.032-.4.005-.616.117l-.01.002c-.43.247-.816.562-1.146.932-.002.004-.006.004-.008.008-.267.323-.42.638-.46.948-.008.046-.01.093-.007.14 0 .136.022.27.065.4l.013.01c.135.48.473 1.276 1.205 2.604.42.768.903 1.5 1.446 2.186.27.344.56.673.87.984l.132.132c.31.308.64.6.984.87.686.543 1.418 1.027 2.186 1.447 1.328.733 2.126 1.07 2.604 1.206l.01.014c.13.042.265.064.402.063.046.002.092 0 .138-.008.31-.036.627-.19.948-.46.004 0 .003-.002.008-.005.37-.33.683-.72.93-1.148l.003-.01c.225-.432.15-.842-.18-1.12-.004 0-.698-.58-1.037-.83-.36-.255-.73-.492-1.113-.71-.51-.285-1.032-.106-1.248.174l-.447.564c-.23.283-.657.246-.657.246-3.12-.796-3.955-3.955-3.955-3.955s-.037-.426.248-.656l.563-.448c.277-.215.456-.737.17-1.248-.217-.383-.454-.756-.71-1.115-.25-.34-.826-1.033-.83-1.035-.137-.165-.31-.265-.502-.297zm4.49.88c-.158.002-.29.124-.3.282-.01.167.115.312.282.324 1.16.085 2.017.466 2.645 1.15.63.688.93 1.524.906 2.57-.002.168.13.306.3.31.166.003.305-.13.31-.297.025-1.175-.334-2.193-1.067-2.994-.74-.81-1.777-1.253-3.05-1.346h-.024zm.463 1.63c-.16.002-.29.127-.3.287-.008.167.12.31.288.32.523.028.875.175 1.113.422.24.245.388.62.416 1.164.01.167.15.295.318.287.167-.008.295-.15.287-.317-.03-.644-.215-1.178-.58-1.557-.367-.378-.893-.574-1.52-.607h-.018z" /></svg>
                                </div>
                                <p className='text-xs md:text-sm'>Viber</p>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className='text-base md:text-lg font-semibold'>Location</h2>
                        <p className='text-xs md:text-sm text-gray-500'>{facility?.location}</p>
                        <div className="w-full min-h-[30vh] md:min-h-[50vh] rounded-2xl bg-gray-200"></div>
                    </div>

                    
                </div>

                <CreateCard id={id} />

            </div>
        </div>
    )
}

const CreateCard = ({ id }: { id: string }) => {

    return (
        <div className="flex flex-col sm:fixed bottom-0 left-0 right-0 lg:sticky lg:top-10 lg:bottom-auto lg:left-auto lg:right-auto bg-gray-100 rounded-t-2xl lg:rounded-2xl p-4 w-full lg:w-[30%] h-[28vh] lg:h-fit border border-gray-200 shadow gap-2 z-[60]">
            <p className='text-xs lg:text-sm text-gray-500'>Court Rent</p>
            <h2 className='text-xl lg:text-4xl font-semibold'>P200 <span className='text-sm lg:text-base text-gray-500'>per head</span></h2>

            <Link to={`/facilities/${id}/create-game`} className='w-full'>
                <ThemedButton className={twMerge('mt-3 lg:mt-6 py-3 lg:py-2 w-full')}>Create Game</ThemedButton>
            </Link>
        </div>
    )
}