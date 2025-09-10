import { dummyFacilities } from "~/dummy/facilities";

export const getAllFacilities = () => {
    const facilities = dummyFacilities;
    return facilities
};

export const getFacilityById = (id: string) => {
    const facility = dummyFacilities.find((facility) => facility.id === id);
    return facility
};

export const getFacilitiesBySportTypes = (sport: string) => {
    const facilities = dummyFacilities.filter((facility) => facility.sportTypes.includes(sport));
    return facilities;
};
