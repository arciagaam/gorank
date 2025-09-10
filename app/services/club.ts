import type { Club } from '~/schema/club';
import { clubs } from '~/dummy/clubs';

export const getAllClubs = (): Club[] => {
    return clubs;
};

export const getClubById = (id: string): Club | undefined => {
    return clubs.find(club => club.id === id);
};

export const getClubsByVisibility = (visibility: 'public' | 'private'): Club[] => {
    return clubs.filter(club => club.visibility === visibility);
};
