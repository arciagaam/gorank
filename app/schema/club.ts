import { z } from 'zod';

export type ClubVisibility = 'public' | 'private';

export type ClubRank = 'S' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

export type Club = {
    id: string;
    name: string;
    logo: string;
    banner: string;
    visibility: ClubVisibility;
    location: string;
    history: Date;
    rank: ClubRank;
    members: number;
    matchesPlayed: number;
    reviews: number;
};

export const CreateClubSchema = z.object({
    name: z.string().min(1, 'Club name is required'),
    logo: z.string().optional(),
    banner: z.string().optional(),
    visibility: z.enum(['public', 'private']),
    location: z.string().min(1, 'Location is required'),
    history: z.date(),
    rank: z.enum(['S', 'A', 'B', 'C', 'D', 'E', 'F']),
    description: z.string().optional(),
    socials: z.object({
        facebook: z.string().optional(),
        twitter: z.string().optional(),
        instagram: z.string().optional(),
    }).optional(),
});

export type CreateClub = z.infer<typeof CreateClubSchema>;
