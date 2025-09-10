import { z } from "zod";

// Basic schemas for nested objects
export const socialMediaSchema = z.object({
  instagram: z.string().optional(),
  twitter: z.string().optional(),
  facebook: z.string().optional(),
});

export const availabilitySchema = z.object({
  monday: z.boolean(),
  tuesday: z.boolean(),
  wednesday: z.boolean(),
  thursday: z.boolean(),
  friday: z.boolean(),
  saturday: z.boolean(),
  sunday: z.boolean(),
});

export const equipmentSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  brand: z.string().optional(),
  model: z.string().optional(),
  condition: z.string().optional(),
});

export const playerStatsSchema = z.object({
  gamesPlayed: z.number(),
  points: z.number(),
  rebounds: z.number(),
  assists: z.number(),
  steals: z.number(),
  blocks: z.number(),
  turnovers: z.number(),
  fouls: z.number(),
  minutesPlayed: z.number(),
  fieldGoalPercentage: z.number(),
  threePointPercentage: z.number(),
  freeThrowPercentage: z.number(),
});

export const playerStatsArraySchema = z.array(z.object({
  key: z.string(),
  value: z.number(),
}));

export const gameStatsSchema = z.object({
  currentGame: z.object({
    points: z.number(),
    rebounds: z.number(),
    assists: z.number(),
    steals: z.number(),
    blocks: z.number(),
    turnovers: z.number(),
    fouls: z.number(),
    minutesPlayed: z.number(),
    plusMinus: z.number(),
  }),
  seasonAverages: playerStatsSchema,
});

export const radarChartDataSchema = z.object({
  category: z.string(),
  value: z.number(),
  maxValue: z.number(),
});

export const matchSchema = z.object({
  id: z.string(),
  date: z.string(),
  opponent: z.string(),
  result: z.enum(["Win", "Lose", "Draw"]),
  score: z.string(),
  stats: playerStatsSchema.optional(),
});

export const gameResultSchema = z.object({
  id: z.string(),
  gameId: z.string(),
  date: z.string(),
  result: z.enum(["Win", "Lose", "Draw"]),
  score: z.string(),
  performance: z.number(),
});

export const matchResultSchema = z.object({
  id: z.string(),
  matchId: z.string(),
  date: z.string(),
  result: z.enum(["Win", "Lose", "Draw"]),
  opponent: z.string(),
  score: z.string(),
  stats: playerStatsSchema.optional(),
});

export const highlightsPropsSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  videoUrl: z.string().optional(),
  imageUrl: z.string().optional(),
  date: z.string(),
  type: z.string(),
});

export const reviewSchema = z.object({
  id: z.string(),
  reviewerId: z.string(),
  reviewerName: z.string(),
  rating: z.number().min(1).max(5),
  comment: z.string(),
  date: z.string(),
  gameId: z.string().optional(),
});

export const ratingBreakdownSchema = z.object({
  category: z.string(),
  rating: z.number().min(1).max(5),
  count: z.number(),
});

// Main ComprehensivePlayer schema
export const comprehensivePlayerSchema = z.object({
  // Basic User Info
  id: z.string(),
  name: z.string().min(1),
  username: z.string().min(1),
  avatar: z.string().url(),
  location: z.string(),
  isVerified: z.boolean(),
  rating: z.number().min(0).max(5),
  totalRatings: z.string(),
  level: z.string(),
  rank: z.string(),
  number: z.number().int().positive(),
  tags: z.array(z.string()),
  clubId: z.string().optional(), // ID of the club the player belongs to

  // Game-specific fields
  logo: z.string().url(),
  goals: z.number().int().min(0),
  rebounds: z.number().int().min(0),
  assists: z.number().int().min(0),
  trueShootingPercentage: z.number().min(0).max(100),
  bgColor: z.string(),

  // Leaderboard fields
  position: z.string(),
  trophies: z.number().int().min(0),
  wreath: z.string().optional(),
  ordinal: z.string().optional(),
  podiumColor: z.string().optional(),
  leaderboardHeight: z.string().optional(),
  wins: z.number().int().min(0),
  winRatio: z.string(),
  leaderboardRank: z.number().int().positive(),

  // Game Player fields
  role: z.string(),
  avatarFallback: z.string(),

  // Game Lobby fields
  teamLogo: z.string().url(),
  lastGameResult: z.enum(["Win", "Lose"]),
  lastGamePoints: z.number().int().min(0),
  teamId: z.string(),

  // Member fields
  stats: z.string().optional(),
  badge: z.string().optional(),
  isAdmin: z.boolean().optional(),
  type: z.enum(["player", "non-player"]),

  // Additional comprehensive fields
  age: z.number().int().min(0).max(120),
  height: z.string(), // Physical height (e.g., "6'9\"")
  weight: z.string(),
  college: z.string().optional(),
  yearsExperience: z.number().int().min(0),
  jerseyNumber: z.string(),

  // Contact & Social
  email: z.string().email().optional(),
  phone: z.string().optional(),
  socialMedia: socialMediaSchema.optional(),

  // Performance & Stats
  seasonStats: playerStatsArraySchema,
  careerStats: playerStatsArraySchema,
  gameStats: gameStatsSchema,
  radarData: z.array(radarChartDataSchema),

  // Equipment & Preferences
  equipment: z.array(equipmentSchema),
  preferredSports: z.array(z.string()),
  primarySport: z.enum(["basketball", "badminton", "pickleball", "tennis", "volleyball"]),
  playingStyle: z.string(),

  // History & Achievements
  matchHistory: z.array(matchSchema),
  gameResults: z.array(gameResultSchema),
  matchResults: z.array(matchResultSchema),
  highlights: z.array(highlightsPropsSchema),
  achievements: z.array(z.string()),

  // Reviews & Ratings
  reviews: z.array(reviewSchema),
  ratingBreakdown: z.array(ratingBreakdownSchema),

  // Status & Availability
  isActive: z.boolean(),
  lastActive: z.string(),
  availability: availabilitySchema,
  preferredTimeSlots: z.array(z.string()),
});

// Type inference
export type ComprehensivePlayer = z.infer<typeof comprehensivePlayerSchema>;

// Validation functions
export const validateComprehensivePlayer = (data: unknown): ComprehensivePlayer => {
  return comprehensivePlayerSchema.parse(data);
};

export const validateComprehensivePlayerSafe = (data: unknown) => {
  return comprehensivePlayerSchema.safeParse(data);
};

// Partial schema for updates
export const comprehensivePlayerUpdateSchema = comprehensivePlayerSchema.partial();

// Schema for creating a new player (omitting id and some computed fields)
export const createComprehensivePlayerSchema = comprehensivePlayerSchema.omit({
  id: true,
  rating: true,
  totalRatings: true,
  level: true,
  rank: true,
  trophies: true,
  wins: true,
  winRatio: true,
  leaderboardRank: true,
  lastGameResult: true,
  lastGamePoints: true,
  lastActive: true,
  seasonStats: true,
  careerStats: true,
  gameStats: true,
  matchHistory: true,
  gameResults: true,
  matchResults: true,
  reviews: true,
  ratingBreakdown: true,
});

export type CreateComprehensivePlayer = z.infer<typeof createComprehensivePlayerSchema>;
