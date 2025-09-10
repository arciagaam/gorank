import { z } from 'zod';
import { FacilitySchema } from './facility';
import { comprehensivePlayerSchema, socialMediaSchema } from './player';

// Sport-specific match type enums
export const BasketballMatchTypeSchema = z.enum([
    '1v1', '2v2', '3v3', '4v4', '5v5', 'tournament', 'league', 'pickup', 'practice'
]);

export const VolleyballMatchTypeSchema = z.enum([
    '2v2', '3v3', '4v4', '6v6', 'beach', 'indoor', 'tournament', 'league', 'casual'
]);

export const PickleballMatchTypeSchema = z.enum([
    'singles', 'doubles', 'mixed-doubles', 'round-robin', 'tournament', 'league', 'casual'
]);

export const TennisMatchTypeSchema = z.enum([
    'singles', 'doubles', 'mixed-doubles', 'tournament', 'league', 'casual', 'practice'
]);

export const BadmintonMatchTypeSchema = z.enum([
    'singles', 'doubles', 'mixed-doubles', 'tournament', 'league', 'casual', 'practice'
]);

// Sport types enum
export const SportTypeSchema = z.enum(['basketball', 'volleyball', 'pickleball', 'tennis', 'badminton']);

// Conditional match type based on sport
export const MatchTypeSchema = z.discriminatedUnion('sportType', [
    z.object({
        sportType: z.literal('basketball'),
        matchType: BasketballMatchTypeSchema,
    }),
    z.object({
        sportType: z.literal('volleyball'),
        matchType: VolleyballMatchTypeSchema,
    }),
    z.object({
        sportType: z.literal('pickleball'),
        matchType: PickleballMatchTypeSchema,
    }),
    z.object({
        sportType: z.literal('tennis'),
        matchType: TennisMatchTypeSchema,
    }),
    z.object({
        sportType: z.literal('badminton'),
        matchType: BadmintonMatchTypeSchema,
    }),
]);

export const GameSchema = z.object({
    id: z.string().optional(),
    name: z.string(),
    facilityId: z.string(),
    facility: FacilitySchema.optional(),
    sportType: SportTypeSchema,
    image: z.string().optional(), // URL or base64 string for game image
    startDate: z.date(),
    endDate: z.date(),
    startTime: z.string(), // Format: "HH:MM" (24-hour)
    endTime: z.string(), // Format: "HH:MM" (24-hour)
    skillLevel: z.enum(['beginner', 'intermediate', 'advanced', 'professional']),
    rank: z.number().optional(),
    matchType: z.union([
        BasketballMatchTypeSchema,
        VolleyballMatchTypeSchema,
        PickleballMatchTypeSchema,
        TennisMatchTypeSchema,
        BadmintonMatchTypeSchema,
    ]),
    reminders: z.string(),
    status: z.enum(['starting', 'near', 'tomorrow']).optional(),
    players: z.array(comprehensivePlayerSchema).optional(), // Players participating in the game
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
});

export const CreateGameSchema = z.object({
    name: z.string(),
    facilityId: z.string(),
    sportType: SportTypeSchema,
    image: z.string().optional(), // URL or base64 string for game image
    startDate: z.date(),
    endDate: z.date(),
    startTime: z.string(),
    endTime: z.string(),
    skillLevel: z.enum(['beginner', 'intermediate', 'advanced', 'professional']),
    rank: z.number().optional(),
    location: z.string(),
    matchType: z.union([
        BasketballMatchTypeSchema,
        VolleyballMatchTypeSchema,
        PickleballMatchTypeSchema,
        TennisMatchTypeSchema,
        BadmintonMatchTypeSchema,
    ]),
    reminders: z.string(),
    participants: z.string(),
    socials: socialMediaSchema,
});

export const UpdateGameSchema = CreateGameSchema.partial().extend({
    id: z.string(),
});

export const GameFiltersSchema = z.object({
    facilityId: z.string().optional(),
    sportType: SportTypeSchema.optional(),
    skillLevel: z.enum(['beginner', 'intermediate', 'advanced', 'professional']).optional(),
    location: z.string().optional(),
    matchType: z.union([
        BasketballMatchTypeSchema,
        VolleyballMatchTypeSchema,
        PickleballMatchTypeSchema,
        TennisMatchTypeSchema,
        BadmintonMatchTypeSchema,
    ]).optional(),
    dateRange: z.object({
        start: z.date(),
        end: z.date(),
    }).optional(),
});

export const GameSearchParamsSchema = z.object({
    query: z.string().optional(),
    filters: GameFiltersSchema.optional(),
    page: z.number().optional(),
    limit: z.number().optional(),
});

export type Game = z.infer<typeof GameSchema>;
export type CreateGame = z.infer<typeof CreateGameSchema>;
export type UpdateGame = z.infer<typeof UpdateGameSchema>;
export type GameFilters = z.infer<typeof GameFiltersSchema>;
export type GameSearchParams = z.infer<typeof GameSearchParamsSchema>;
export type SportType = z.infer<typeof SportTypeSchema>;
export type BasketballMatchType = z.infer<typeof BasketballMatchTypeSchema>;
export type VolleyballMatchType = z.infer<typeof VolleyballMatchTypeSchema>;
export type PickleballMatchType = z.infer<typeof PickleballMatchTypeSchema>;
export type TennisMatchType = z.infer<typeof TennisMatchTypeSchema>;
export type BadmintonMatchType = z.infer<typeof BadmintonMatchTypeSchema>;

