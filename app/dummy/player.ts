import type { ComprehensivePlayer } from "../schema/player";

export const dummyPlayers: ComprehensivePlayer[] = [
  // Basketball Player
  {
    id: "bb-001",
    name: "Marcus Johnson",
    username: "marcus_hoops",
    avatar: "/images/club-members-players/lebron-james.png",
    location: "Makati City",
    isVerified: true,
    rating: 4.8,
    totalRatings: "127",
    level: "Elite",
    rank: "Top 5%",
    number: 23,
    tags: ["Point Guard", "3-Point Specialist", "Team Leader"],
    clubId: "5", // Los Angeles Lakers
    
    logo: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=50&h=50&fit=crop",
    goals: 0, // Basketball doesn't have goals
    rebounds: 8,
    assists: 12,
    trueShootingPercentage: 58.5,
    bgColor: "#552583",
    
    position: "Point Guard",
    trophies: 15,
    wreath: "🏆",
    ordinal: "1st",
    podiumColor: "#FFD700",
    leaderboardHeight: "6'2\"",
    wins: 89,
    winRatio: "89%",
    leaderboardRank: 3,
    
    role: "Captain",
    avatarFallback: "MJ",
    
    teamLogo: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=40&h=40&fit=crop",
    lastGameResult: "Win",
    lastGamePoints: 28,
    teamId: "team-bb-001",
    
    stats: "Elite Point Guard",
    badge: "MVP",
    isAdmin: false,
    type: "player",
    
    age: 28,
    height: "6'2\"",
    weight: "185 lbs",
    college: "UCLA",
    yearsExperience: 8,
    jerseyNumber: "23",
    
    email: "marcus.johnson@email.com",
    phone: "+1-310-555-0123",
    socialMedia: {
      instagram: "@marcus_hoops",
      twitter: "@marcus_hoops",
      facebook: "Marcus Johnson Basketball"
    },
    
    seasonStats: [
      { key: "Games", value: 45 },
      { key: "Points", value: 22.5 },
      { key: "Rebounds", value: 4.2 },
      { key: "Assists", value: 8.7 },
      { key: "Steals", value: 1.8 },
      { key: "Blocks", value: 0.3 },
      { key: "Turnovers", value: 2.1 },
      { key: "Fouls", value: 1.9 },
      { key: "Minutes", value: 32.5 },
      { key: "FG%", value: 45.8 },
      { key: "3P%", value: 38.9 },
      { key: "FT%", value: 87.2 }
    ],
    careerStats: [
      { key: "Games", value: 320 },
      { key: "Points", value: 19.8 },
      { key: "Rebounds", value: 3.8 },
      { key: "Assists", value: 7.2 },
      { key: "Steals", value: 1.5 },
      { key: "Blocks", value: 0.2 },
      { key: "Turnovers", value: 2.3 },
      { key: "Fouls", value: 2.1 },
      { key: "Minutes", value: 30.2 },
      { key: "FG%", value: 43.2 },
      { key: "3P%", value: 36.1 },
      { key: "FT%", value: 84.5 }
    ],
    gameStats: {
      currentGame: {
        points: 28,
        rebounds: 5,
        assists: 12,
        steals: 2,
        blocks: 0,
        turnovers: 1,
        fouls: 2,
        minutesPlayed: 38,
        plusMinus: 15
      },
      seasonAverages: {
        gamesPlayed: 45,
        points: 22.5,
        rebounds: 4.2,
        assists: 8.7,
        steals: 1.8,
        blocks: 0.3,
        turnovers: 2.1,
        fouls: 1.9,
        minutesPlayed: 32.5,
        fieldGoalPercentage: 45.8,
        threePointPercentage: 38.9,
        freeThrowPercentage: 87.2
      }
    },
    radarData: [
      { category: "Scoring", value: 85, maxValue: 100 },
      { category: "Passing", value: 90, maxValue: 100 },
      { category: "Defense", value: 75, maxValue: 100 },
      { category: "Athleticism", value: 88, maxValue: 100 },
      { category: "Leadership", value: 92, maxValue: 100 }
    ],
    
    equipment: [
      { id: "eq-001", name: "Nike Zoom Freak 4", type: "Basketball Shoes", brand: "Nike", model: "Zoom Freak 4", condition: "Excellent" },
      { id: "eq-002", name: "Wilson NBA Official Game Ball", type: "Basketball", brand: "Wilson", model: "NBA Official", condition: "Good" }
    ],
    preferredSports: ["basketball", "volleyball"],
    primarySport: "basketball",
    playingStyle: "Fast-paced, high-energy point guard with excellent court vision and leadership skills",
    
    matchHistory: [
      { id: "m-001", date: "2024-01-15", opponent: "Westside Warriors", result: "Win", score: "112-98", stats: { gamesPlayed: 1, points: 28, rebounds: 5, assists: 12, steals: 2, blocks: 0, turnovers: 1, fouls: 2, minutesPlayed: 38, fieldGoalPercentage: 52.4, threePointPercentage: 40.0, freeThrowPercentage: 100.0 } }
    ],
    gameResults: [
      { id: "gr-001", gameId: "g-001", date: "2024-01-15", result: "Win", score: "112-98", performance: 9.2 }
    ],
    matchResults: [
      { id: "mr-001", matchId: "m-001", date: "2024-01-15", result: "Win", opponent: "Westside Warriors", score: "112-98" }
    ],
    highlights: [
      { id: "h-001", title: "Game-Winning Three Pointer", description: "Clutch 3-pointer with 2 seconds left", videoUrl: "https://example.com/highlight1.mp4", date: "2024-01-15", type: "Game Winner" }
    ],
    achievements: ["MVP 2023", "All-Star 2022", "Championship Winner 2021", "Rookie of the Year 2019"],
    
    reviews: [
      { id: "r-001", reviewerId: "rev-001", reviewerName: "Coach Smith", rating: 5, comment: "Exceptional leader and playmaker", date: "2024-01-10", gameId: "g-001" }
    ],
    ratingBreakdown: [
      { category: "Skill", rating: 4.9, count: 45 },
      { category: "Sportsmanship", rating: 4.7, count: 42 },
      { category: "Reliability", rating: 4.8, count: 40 }
    ],
    
    isActive: true,
    lastActive: "2024-01-15T22:30:00Z",
    availability: {
      monday: true,
      tuesday: true,
      wednesday: false,
      thursday: true,
      friday: true,
      saturday: true,
      sunday: false
    },
    preferredTimeSlots: ["18:00", "19:00", "20:00"]
  },

  // Volleyball Player
  {
    id: "vb-001",
    name: "Sarah Chen",
    username: "sarah_spike",
    avatar: "/images/club-members-players/stephen-curry.png",
    location: "Quezon City",
    isVerified: true,
    rating: 4.6,
    totalRatings: "89",
    level: "Advanced",
    rank: "Top 10%",
    number: 7,
    tags: ["Outside Hitter", "Power Server", "Defensive Specialist"],
    clubId: "6", // Miami Heat
    
    logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=50&h=50&fit=crop",
    goals: 0, // Volleyball doesn't have goals
    rebounds: 0, // Volleyball doesn't have rebounds
    assists: 15,
    trueShootingPercentage: 0, // Not applicable to volleyball
    bgColor: "#FF6B35",
    
    position: "Outside Hitter",
    trophies: 8,
    wreath: "🥈",
    ordinal: "2nd",
    podiumColor: "#C0C0C0",
    leaderboardHeight: "5'9\"",
    wins: 67,
    winRatio: "78%",
    leaderboardRank: 7,
    
    role: "Outside Hitter",
    avatarFallback: "SC",
    
    teamLogo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=40&h=40&fit=crop",
    lastGameResult: "Win",
    lastGamePoints: 18,
    teamId: "team-vb-001",
    
    stats: "Elite Outside Hitter",
    badge: "Best Server",
    isAdmin: false,
    type: "player",
    
    age: 25,
    height: "5'9\"",
    weight: "145 lbs",
    college: "Stanford",
    yearsExperience: 6,
    jerseyNumber: "7",
    
    email: "sarah.chen@email.com",
    phone: "+1-415-555-0456",
    socialMedia: {
      instagram: "@sarah_spike",
      twitter: "@sarah_spike"
    },
    
    seasonStats: [
      { key: "Games", value: 38 },
      { key: "Points", value: 18.2 },
      { key: "Rebounds", value: 0 },
      { key: "Assists", value: 12.5 },
      { key: "Steals", value: 0 },
      { key: "Blocks", value: 2.1 },
      { key: "Turnovers", value: 1.8 },
      { key: "Fouls", value: 0.9 },
      { key: "Minutes", value: 45.0 },
      { key: "FG%", value: 0 },
      { key: "3P%", value: 0 },
      { key: "FT%", value: 0 }
    ],
    careerStats: [
      { key: "Games", value: 245 },
      { key: "Points", value: 16.8 },
      { key: "Rebounds", value: 0 },
      { key: "Assists", value: 11.2 },
      { key: "Steals", value: 0 },
      { key: "Blocks", value: 1.9 },
      { key: "Turnovers", value: 2.0 },
      { key: "Fouls", value: 1.1 },
      { key: "Minutes", value: 42.5 },
      { key: "FG%", value: 0 },
      { key: "3P%", value: 0 },
      { key: "FT%", value: 0 }
    ],
    gameStats: {
      currentGame: {
        points: 18,
        rebounds: 0,
        assists: 15,
        steals: 0,
        blocks: 3,
        turnovers: 2,
        fouls: 1,
        minutesPlayed: 45,
        plusMinus: 8
      },
      seasonAverages: {
        gamesPlayed: 38,
        points: 18.2,
        rebounds: 0,
        assists: 12.5,
        steals: 0,
        blocks: 2.1,
        turnovers: 1.8,
        fouls: 0.9,
        minutesPlayed: 45.0,
        fieldGoalPercentage: 0,
        threePointPercentage: 0,
        freeThrowPercentage: 0
      }
    },
    radarData: [
      { category: "Serving", value: 88, maxValue: 100 },
      { category: "Spiking", value: 85, maxValue: 100 },
      { category: "Blocking", value: 78, maxValue: 100 },
      { category: "Passing", value: 82, maxValue: 100 },
      { category: "Defense", value: 80, maxValue: 100 }
    ],
    
    equipment: [
      { id: "eq-003", name: "Mizuno Wave Lightning", type: "Volleyball Shoes", brand: "Mizuno", model: "Wave Lightning", condition: "Good" },
      { id: "eq-004", name: "Mikasa MVA200", type: "Volleyball", brand: "Mikasa", model: "MVA200", condition: "Excellent" }
    ],
    preferredSports: ["volleyball", "basketball"],
    primarySport: "volleyball",
    playingStyle: "Aggressive outside hitter with powerful serves and excellent court coverage",
    
    matchHistory: [
      { id: "m-002", date: "2024-01-14", opponent: "Bay Area Spikers", result: "Win", score: "3-1", stats: { gamesPlayed: 1, points: 18, rebounds: 0, assists: 15, steals: 0, blocks: 3, turnovers: 2, fouls: 1, minutesPlayed: 45, fieldGoalPercentage: 0, threePointPercentage: 0, freeThrowPercentage: 0 } }
    ],
    gameResults: [
      { id: "gr-002", gameId: "g-002", date: "2024-01-14", result: "Win", score: "3-1", performance: 8.8 }
    ],
    matchResults: [
      { id: "mr-002", matchId: "m-002", date: "2024-01-14", result: "Win", opponent: "Bay Area Spikers", score: "3-1" }
    ],
    highlights: [
      { id: "h-002", title: "Ace Serve Sequence", description: "Three consecutive aces in the final set", videoUrl: "https://example.com/highlight2.mp4", date: "2024-01-14", type: "Serving" }
    ],
    achievements: ["Best Server 2023", "All-Conference 2022", "Tournament MVP 2021"],
    
    reviews: [
      { id: "r-002", reviewerId: "rev-002", reviewerName: "Coach Davis", rating: 5, comment: "Outstanding server and team player", date: "2024-01-12", gameId: "g-002" }
    ],
    ratingBreakdown: [
      { category: "Skill", rating: 4.6, count: 35 },
      { category: "Sportsmanship", rating: 4.8, count: 32 },
      { category: "Reliability", rating: 4.5, count: 22 }
    ],
    
    isActive: true,
    lastActive: "2024-01-14T21:45:00Z",
    availability: {
      monday: true,
      tuesday: false,
      wednesday: true,
      thursday: true,
      friday: false,
      saturday: true,
      sunday: true
    },
    preferredTimeSlots: ["19:00", "20:00", "21:00"]
  },

  // Pickleball Player
  {
    id: "pb-001",
    name: "Robert Martinez",
    username: "rob_pickle",
    avatar: "/images/club-members-players/magic-johnson.png",
    location: "Taguig City",
    isVerified: true,
    rating: 4.4,
    totalRatings: "156",
    level: "Intermediate",
    rank: "Top 20%",
    number: 11,
    tags: ["Doubles Specialist", "Net Player", "Strategic Player"],
    clubId: "8", // Phoenix Suns
    
    logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop",
    goals: 0, // Pickleball doesn't have goals
    rebounds: 0, // Pickleball doesn't have rebounds
    assists: 0, // Pickleball doesn't have assists
    trueShootingPercentage: 0, // Not applicable to pickleball
    bgColor: "#2E8B57",
    
    position: "Doubles Player",
    trophies: 12,
    wreath: "🥉",
    ordinal: "3rd",
    podiumColor: "#CD7F32",
    leaderboardHeight: "5'11\"",
    wins: 134,
    winRatio: "72%",
    leaderboardRank: 15,
    
    role: "Doubles Partner",
    avatarFallback: "RM",
    
    teamLogo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop",
    lastGameResult: "Lose",
    lastGamePoints: 8,
    teamId: "team-pb-001",
    
    stats: "Solid Doubles Player",
    badge: "Most Improved",
    isAdmin: false,
    type: "player",
    
    age: 52,
    height: "5'11\"",
    weight: "175 lbs",
    college: "Arizona State",
    yearsExperience: 4,
    jerseyNumber: "11",
    
    email: "robert.martinez@email.com",
    phone: "+1-602-555-0789",
    socialMedia: {
      facebook: "Robert Martinez Pickleball"
    },
    
    seasonStats: [
      { key: "Games", value: 67 },
      { key: "Points", value: 0 },
      { key: "Rebounds", value: 0 },
      { key: "Assists", value: 0 },
      { key: "Steals", value: 0 },
      { key: "Blocks", value: 0 },
      { key: "Turnovers", value: 0 },
      { key: "Fouls", value: 0 },
      { key: "Minutes", value: 0 },
      { key: "FG%", value: 0 },
      { key: "3P%", value: 0 },
      { key: "FT%", value: 0 }
    ],
    careerStats: [
      { key: "Games", value: 289 },
      { key: "Points", value: 0 },
      { key: "Rebounds", value: 0 },
      { key: "Assists", value: 0 },
      { key: "Steals", value: 0 },
      { key: "Blocks", value: 0 },
      { key: "Turnovers", value: 0 },
      { key: "Fouls", value: 0 },
      { key: "Minutes", value: 0 },
      { key: "FG%", value: 0 },
      { key: "3P%", value: 0 },
      { key: "FT%", value: 0 }
    ],
    gameStats: {
      currentGame: {
        points: 8,
        rebounds: 0,
        assists: 0,
        steals: 0,
        blocks: 0,
        turnovers: 0,
        fouls: 0,
        minutesPlayed: 0,
        plusMinus: -3
      },
      seasonAverages: {
        gamesPlayed: 67,
        points: 0,
        rebounds: 0,
        assists: 0,
        steals: 0,
        blocks: 0,
        turnovers: 0,
        fouls: 0,
        minutesPlayed: 0,
        fieldGoalPercentage: 0,
        threePointPercentage: 0,
        freeThrowPercentage: 0
      }
    },
    radarData: [
      { category: "Serving", value: 75, maxValue: 100 },
      { category: "Net Play", value: 82, maxValue: 100 },
      { category: "Strategy", value: 88, maxValue: 100 },
      { category: "Footwork", value: 70, maxValue: 100 },
      { category: "Communication", value: 85, maxValue: 100 }
    ],
    
    equipment: [
      { id: "eq-005", name: "Selkirk Amped", type: "Pickleball Paddle", brand: "Selkirk", model: "Amped", condition: "Good" },
      { id: "eq-006", name: "Onix Pure 2", type: "Pickleball", brand: "Onix", model: "Pure 2", condition: "Excellent" }
    ],
    preferredSports: ["pickleball", "tennis"],
    primarySport: "pickleball",
    playingStyle: "Strategic doubles player who excels at net play and communication with partners",
    
    matchHistory: [
      { id: "m-003", date: "2024-01-13", opponent: "Desert Picklers", result: "Lose", score: "8-11", stats: { gamesPlayed: 1, points: 8, rebounds: 0, assists: 0, steals: 0, blocks: 0, turnovers: 0, fouls: 0, minutesPlayed: 0, fieldGoalPercentage: 0, threePointPercentage: 0, freeThrowPercentage: 0 } }
    ],
    gameResults: [
      { id: "gr-003", gameId: "g-003", date: "2024-01-13", result: "Lose", score: "8-11", performance: 6.5 }
    ],
    matchResults: [
      { id: "mr-003", matchId: "m-003", date: "2024-01-13", result: "Lose", opponent: "Desert Picklers", score: "8-11" }
    ],
    highlights: [
      { id: "h-003", title: "Perfect Dink Sequence", description: "Five consecutive perfect dinks to win the point", imageUrl: "https://example.com/highlight3.jpg", date: "2024-01-13", type: "Net Play" }
    ],
    achievements: ["Most Improved 2023", "Tournament Finalist 2022", "Sportsmanship Award 2021"],
    
    reviews: [
      { id: "r-003", reviewerId: "rev-003", reviewerName: "Partner Johnson", rating: 4, comment: "Great doubles partner, excellent communication", date: "2024-01-11", gameId: "g-003" }
    ],
    ratingBreakdown: [
      { category: "Skill", rating: 4.4, count: 67 },
      { category: "Sportsmanship", rating: 4.8, count: 58 },
      { category: "Reliability", rating: 4.6, count: 31 }
    ],
    
    isActive: true,
    lastActive: "2024-01-13T20:15:00Z",
    availability: {
      monday: false,
      tuesday: true,
      wednesday: true,
      thursday: false,
      friday: true,
      saturday: true,
      sunday: true
    },
    preferredTimeSlots: ["07:00", "08:00", "18:00", "19:00"]
  },

  // Tennis Player
  {
    id: "tn-001",
    name: "Emma Thompson",
    username: "emma_ace",
    avatar: "/images/club-members-players/jayson-tatum.png",
    location: "Pasig City",
    isVerified: true,
    rating: 4.9,
    totalRatings: "203",
    level: "Professional",
    rank: "Top 1%",
    number: 1,
    tags: ["Singles Specialist", "Serve & Volley", "All-Court Player"],
    clubId: "2", // Charlotte Hornets
    
    logo: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=50&h=50&fit=crop",
    goals: 0, // Tennis doesn't have goals
    rebounds: 0, // Tennis doesn't have rebounds
    assists: 0, // Tennis doesn't have assists
    trueShootingPercentage: 0, // Not applicable to tennis
    bgColor: "#228B22",
    
    position: "Singles Player",
    trophies: 25,
    wreath: "🏆",
    ordinal: "1st",
    podiumColor: "#FFD700",
    leaderboardHeight: "5'8\"",
    wins: 187,
    winRatio: "94%",
    leaderboardRank: 1,
    
    role: "Singles Champion",
    avatarFallback: "ET",
    
    teamLogo: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=40&h=40&fit=crop",
    lastGameResult: "Win",
    lastGamePoints: 6,
    teamId: "team-tn-001",
    
    stats: "Professional Tennis Player",
    badge: "Champion",
    isAdmin: false,
    type: "player",
    
    age: 24,
    height: "5'8\"",
    weight: "135 lbs",
    college: "University of Miami",
    yearsExperience: 12,
    jerseyNumber: "1",
    
    email: "emma.thompson@email.com",
    phone: "+1-305-555-0321",
    socialMedia: {
      instagram: "@emma_ace",
      twitter: "@emma_ace",
      facebook: "Emma Thompson Tennis"
    },
    
    seasonStats: [
      { key: "Games", value: 52 },
      { key: "Points", value: 0 },
      { key: "Rebounds", value: 0 },
      { key: "Assists", value: 0 },
      { key: "Steals", value: 0 },
      { key: "Blocks", value: 0 },
      { key: "Turnovers", value: 0 },
      { key: "Fouls", value: 0 },
      { key: "Minutes", value: 0 },
      { key: "FG%", value: 0 },
      { key: "3P%", value: 0 },
      { key: "FT%", value: 0 }
    ],
    careerStats: [
      { key: "Games", value: 298 },
      { key: "Points", value: 0 },
      { key: "Rebounds", value: 0 },
      { key: "Assists", value: 0 },
      { key: "Steals", value: 0 },
      { key: "Blocks", value: 0 },
      { key: "Turnovers", value: 0 },
      { key: "Fouls", value: 0 },
      { key: "Minutes", value: 0 },
      { key: "FG%", value: 0 },
      { key: "3P%", value: 0 },
      { key: "FT%", value: 0 }
    ],
    gameStats: {
      currentGame: {
        points: 6,
        rebounds: 0,
        assists: 0,
        steals: 0,
        blocks: 0,
        turnovers: 0,
        fouls: 0,
        minutesPlayed: 0,
        plusMinus: 6
      },
      seasonAverages: {
        gamesPlayed: 52,
        points: 0,
        rebounds: 0,
        assists: 0,
        steals: 0,
        blocks: 0,
        turnovers: 0,
        fouls: 0,
        minutesPlayed: 0,
        fieldGoalPercentage: 0,
        threePointPercentage: 0,
        freeThrowPercentage: 0
      }
    },
    radarData: [
      { category: "Serving", value: 95, maxValue: 100 },
      { category: "Forehand", value: 92, maxValue: 100 },
      { category: "Backhand", value: 88, maxValue: 100 },
      { category: "Volley", value: 90, maxValue: 100 },
      { category: "Footwork", value: 94, maxValue: 100 }
    ],
    
    equipment: [
      { id: "eq-007", name: "Wilson Pro Staff", type: "Tennis Racket", brand: "Wilson", model: "Pro Staff", condition: "Excellent" },
      { id: "eq-008", name: "Wilson US Open", type: "Tennis Ball", brand: "Wilson", model: "US Open", condition: "Good" }
    ],
    preferredSports: ["tennis"],
    primarySport: "tennis",
    playingStyle: "Aggressive serve-and-volley player with powerful groundstrokes and excellent court coverage",
    
    matchHistory: [
      { id: "m-004", date: "2024-01-12", opponent: "Sunshine Tennis Club", result: "Win", score: "6-2, 6-1", stats: { gamesPlayed: 1, points: 0, rebounds: 0, assists: 0, steals: 0, blocks: 0, turnovers: 0, fouls: 0, minutesPlayed: 0, fieldGoalPercentage: 0, threePointPercentage: 0, freeThrowPercentage: 0 } }
    ],
    gameResults: [
      { id: "gr-004", gameId: "g-004", date: "2024-01-12", result: "Win", score: "6-2, 6-1", performance: 9.8 }
    ],
    matchResults: [
      { id: "mr-004", matchId: "m-004", date: "2024-01-12", result: "Win", opponent: "Sunshine Tennis Club", score: "6-2, 6-1" }
    ],
    highlights: [
      { id: "h-004", title: "Ace Serve", description: "Three consecutive aces to close out the match", videoUrl: "https://example.com/highlight4.mp4", date: "2024-01-12", type: "Serving" }
    ],
    achievements: ["State Champion 2023", "National Finalist 2022", "College All-American 2021", "Junior Champion 2019"],
    
    reviews: [
      { id: "r-004", reviewerId: "rev-004", reviewerName: "Coach Williams", rating: 5, comment: "Exceptional talent and work ethic", date: "2024-01-10", gameId: "g-004" }
    ],
    ratingBreakdown: [
      { category: "Skill", rating: 4.9, count: 89 },
      { category: "Sportsmanship", rating: 4.8, count: 76 },
      { category: "Reliability", rating: 4.9, count: 38 }
    ],
    
    isActive: true,
    lastActive: "2024-01-12T19:30:00Z",
    availability: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: false,
      sunday: false
    },
    preferredTimeSlots: ["08:00", "09:00", "16:00", "17:00"]
  },

  // Badminton Player
  {
    id: "bd-001",
    name: "Alex Kim",
    username: "alex_shuttle",
    avatar: "/images/club-members-players/luka-doncic.png",
    location: "Mandaluyong City",
    isVerified: true,
    rating: 4.3,
    totalRatings: "112",
    level: "Intermediate",
    rank: "Top 25%",
    number: 9,
    tags: ["Doubles Player", "Defensive Specialist", "Quick Reflexes"],
    clubId: "4", // Cleveland Cavaliers
    
    logo: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=50&h=50&fit=crop",
    goals: 0, // Badminton doesn't have goals
    rebounds: 0, // Badminton doesn't have rebounds
    assists: 0, // Badminton doesn't have assists
    trueShootingPercentage: 0, // Not applicable to badminton
    bgColor: "#FF4500",
    
    position: "Doubles Player",
    trophies: 6,
    wreath: "🥉",
    ordinal: "3rd",
    podiumColor: "#CD7F32",
    leaderboardHeight: "5'10\"",
    wins: 78,
    winRatio: "65%",
    leaderboardRank: 22,
    
    role: "Doubles Partner",
    avatarFallback: "AK",
    
    teamLogo: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=40&h=40&fit=crop",
    lastGameResult: "Win",
    lastGamePoints: 21,
    teamId: "team-bd-001",
    
    stats: "Solid Doubles Player",
    badge: "Most Consistent",
    isAdmin: false,
    type: "player",
    
    age: 31,
    height: "5'10\"",
    weight: "160 lbs",
    college: "University of Washington",
    yearsExperience: 5,
    jerseyNumber: "9",
    
    email: "alex.kim@email.com",
    phone: "+1-206-555-0987",
    socialMedia: {
      instagram: "@alex_shuttle"
    },
    
    seasonStats: [
      { key: "Games", value: 43 },
      { key: "Points", value: 0 },
      { key: "Rebounds", value: 0 },
      { key: "Assists", value: 0 },
      { key: "Steals", value: 0 },
      { key: "Blocks", value: 0 },
      { key: "Turnovers", value: 0 },
      { key: "Fouls", value: 0 },
      { key: "Minutes", value: 0 },
      { key: "FG%", value: 0 },
      { key: "3P%", value: 0 },
      { key: "FT%", value: 0 }
    ],
    careerStats: [
      { key: "Games", value: 187 },
      { key: "Points", value: 0 },
      { key: "Rebounds", value: 0 },
      { key: "Assists", value: 0 },
      { key: "Steals", value: 0 },
      { key: "Blocks", value: 0 },
      { key: "Turnovers", value: 0 },
      { key: "Fouls", value: 0 },
      { key: "Minutes", value: 0 },
      { key: "FG%", value: 0 },
      { key: "3P%", value: 0 },
      { key: "FT%", value: 0 }
    ],
    gameStats: {
      currentGame: {
        points: 21,
        rebounds: 0,
        assists: 0,
        steals: 0,
        blocks: 0,
        turnovers: 0,
        fouls: 0,
        minutesPlayed: 0,
        plusMinus: 21
      },
      seasonAverages: {
        gamesPlayed: 43,
        points: 0,
        rebounds: 0,
        assists: 0,
        steals: 0,
        blocks: 0,
        turnovers: 0,
        fouls: 0,
        minutesPlayed: 0,
        fieldGoalPercentage: 0,
        threePointPercentage: 0,
        freeThrowPercentage: 0
      }
    },
    radarData: [
      { category: "Serving", value: 72, maxValue: 100 },
      { category: "Smashing", value: 68, maxValue: 100 },
      { category: "Defense", value: 78, maxValue: 100 },
      { category: "Footwork", value: 75, maxValue: 100 },
      { category: "Strategy", value: 80, maxValue: 100 }
    ],
    
    equipment: [
      { id: "eq-009", name: "Yonex Voltric", type: "Badminton Racket", brand: "Yonex", model: "Voltric", condition: "Good" },
      { id: "eq-010", name: "Yonex Tournament", type: "Shuttlecock", brand: "Yonex", model: "Tournament", condition: "Excellent" }
    ],
    preferredSports: ["badminton", "tennis"],
    primarySport: "badminton",
    playingStyle: "Defensive doubles player with quick reflexes and excellent court coverage",
    
    matchHistory: [
      { id: "m-005", date: "2024-01-11", opponent: "Rain City Badminton", result: "Win", score: "21-18, 21-16", stats: { gamesPlayed: 1, points: 0, rebounds: 0, assists: 0, steals: 0, blocks: 0, turnovers: 0, fouls: 0, minutesPlayed: 0, fieldGoalPercentage: 0, threePointPercentage: 0, freeThrowPercentage: 0 } }
    ],
    gameResults: [
      { id: "gr-005", gameId: "g-005", date: "2024-01-11", result: "Win", score: "21-18, 21-16", performance: 7.8 }
    ],
    matchResults: [
      { id: "mr-005", matchId: "m-005", date: "2024-01-11", result: "Win", opponent: "Rain City Badminton", score: "21-18, 21-16" }
    ],
    highlights: [
      { id: "h-005", title: "Defensive Save", description: "Incredible defensive save to win the match point", imageUrl: "https://example.com/highlight5.jpg", date: "2024-01-11", type: "Defense" }
    ],
    achievements: ["Most Consistent 2023", "Tournament Semifinalist 2022", "Sportsmanship Award 2021"],
    
    reviews: [
      { id: "r-005", reviewerId: "rev-005", reviewerName: "Partner Lee", rating: 4, comment: "Great defensive partner, very reliable", date: "2024-01-09", gameId: "g-005" }
    ],
    ratingBreakdown: [
      { category: "Skill", rating: 4.3, count: 45 },
      { category: "Sportsmanship", rating: 4.6, count: 38 },
      { category: "Reliability", rating: 4.4, count: 29 }
    ],
    
    isActive: true,
    lastActive: "2024-01-11T18:45:00Z",
    availability: {
      monday: false,
      tuesday: true,
      wednesday: true,
      thursday: false,
      friday: true,
      saturday: true,
      sunday: false
    },
    preferredTimeSlots: ["19:00", "20:00", "21:00"]
  },

  // Basketball Player 7
  {
    id: "bb-007",
    name: "Amanda Foster",
    username: "mandy_hoops",
    avatar: "/images/club-members-players/paolo-banchero-orlando.png",
    location: "Manila City",
    isVerified: true,
    rating: 4.2,
    totalRatings: "78",
    level: "Intermediate",
    rank: "Top 25%",
    number: 22,
    tags: ["Small Forward", "Versatile", "Two-Way Player"],
    clubId: "1", // Atlanta Hawks
    
    logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=50&h=50&fit=crop",
    goals: 0,
    rebounds: 7,
    assists: 4,
    trueShootingPercentage: 53.4,
    bgColor: "#E03A3E",
    
    position: "Small Forward",
    trophies: 5,
    wreath: "🥉",
    ordinal: "3rd",
    podiumColor: "#CD7F32",
    leaderboardHeight: "6'0\"",
    wins: 52,
    winRatio: "65%",
    leaderboardRank: 25,
    
    role: "Small Forward",
    avatarFallback: "AF",
    
    teamLogo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=40&h=40&fit=crop",
    lastGameResult: "Lose",
    lastGamePoints: 19,
    teamId: "team-bb-007",
    
    stats: "Intermediate Small Forward",
    badge: "Most Versatile",
    isAdmin: false,
    type: "player",
    
    age: 24,
    height: "6'0\"",
    weight: "165 lbs",
    college: "Georgia Tech",
    yearsExperience: 3,
    jerseyNumber: "22",
    
    email: "amanda.foster@email.com",
    phone: "+1-404-555-0123",
    socialMedia: {
      instagram: "@mandy_hoops",
      twitter: "@mandy_hoops"
    },
    
    seasonStats: [
      { key: "Games", value: 36 },
      { key: "Points", value: 16.8 },
      { key: "Rebounds", value: 6.2 },
      { key: "Assists", value: 3.5 },
      { key: "Steals", value: 1.8 },
      { key: "Blocks", value: 0.6 },
      { key: "Turnovers", value: 2.4 },
      { key: "Fouls", value: 2.8 },
      { key: "Minutes", value: 29.5 },
      { key: "FG%", value: 44.5 },
      { key: "3P%", value: 35.2 },
      { key: "FT%", value: 78.9 }
    ],
    careerStats: [
      { key: "Games", value: 108 },
      { key: "Points", value: 15.2 },
      { key: "Rebounds", value: 5.8 },
      { key: "Assists", value: 3.2 },
      { key: "Steals", value: 1.6 },
      { key: "Blocks", value: 0.5 },
      { key: "Turnovers", value: 2.5 },
      { key: "Fouls", value: 2.9 },
      { key: "Minutes", value: 28.2 },
      { key: "FG%", value: 43.1 },
      { key: "3P%", value: 33.8 },
      { key: "FT%", value: 76.5 }
    ],
    gameStats: {
      currentGame: {
        points: 19,
        rebounds: 7,
        assists: 4,
        steals: 2,
        blocks: 1,
        turnovers: 3,
        fouls: 3,
        minutesPlayed: 31,
        plusMinus: -8
      },
      seasonAverages: {
        gamesPlayed: 36,
        points: 16.8,
        rebounds: 6.2,
        assists: 3.5,
        steals: 1.8,
        blocks: 0.6,
        turnovers: 2.4,
        fouls: 2.8,
        minutesPlayed: 29.5,
        fieldGoalPercentage: 44.5,
        threePointPercentage: 35.2,
        freeThrowPercentage: 78.9
      }
    },
    radarData: [
      { category: "Versatility", value: 85, maxValue: 100 },
      { category: "Defense", value: 80, maxValue: 100 },
      { category: "Scoring", value: 78, maxValue: 100 },
      { category: "Rebounding", value: 75, maxValue: 100 },
      { category: "Athleticism", value: 82, maxValue: 100 }
    ],
    
    equipment: [
      { id: "eq-021", name: "Adidas Harden Vol. 7", type: "Basketball Shoes", brand: "Adidas", model: "Harden Vol. 7", condition: "Good" },
      { id: "eq-022", name: "Wilson NBA Official Game Ball", type: "Basketball", brand: "Wilson", model: "NBA Official", condition: "Good" }
    ],
    preferredSports: ["basketball", "volleyball"],
    primarySport: "basketball",
    playingStyle: "Versatile small forward who can contribute in multiple ways on both ends",
    
    matchHistory: [
      { id: "m-011", date: "2024-01-09", opponent: "Peachtree Hoops", result: "Lose", score: "89-97", stats: { gamesPlayed: 1, points: 19, rebounds: 7, assists: 4, steals: 2, blocks: 1, turnovers: 3, fouls: 3, minutesPlayed: 31, fieldGoalPercentage: 47.4, threePointPercentage: 40.0, freeThrowPercentage: 75.0 } }
    ],
    gameResults: [
      { id: "gr-011", gameId: "g-011", date: "2024-01-09", result: "Lose", score: "89-97", performance: 7.1 }
    ],
    matchResults: [
      { id: "mr-011", matchId: "m-011", date: "2024-01-09", result: "Lose", opponent: "Peachtree Hoops", score: "89-97" }
    ],
    highlights: [
      { id: "h-011", title: "And-One Finish", description: "Strong finish through contact for the and-one", imageUrl: "https://example.com/highlight11.jpg", date: "2024-01-09", type: "Scoring" }
    ],
    achievements: ["Most Versatile 2023", "Most Improved 2022", "Rookie of the Year 2021"],
    
    reviews: [
      { id: "r-011", reviewerId: "rev-011", reviewerName: "Coach Thompson", rating: 4, comment: "Versatile player with good potential", date: "2024-01-07", gameId: "g-011" }
    ],
    ratingBreakdown: [
      { category: "Skill", rating: 4.2, count: 38 },
      { category: "Sportsmanship", rating: 4.4, count: 32 },
      { category: "Reliability", rating: 4.1, count: 8 }
    ],
    
    isActive: true,
    lastActive: "2024-01-09T19:15:00Z",
    availability: {
      monday: true,
      tuesday: true,
      wednesday: false,
      thursday: true,
      friday: true,
      saturday: false,
      sunday: true
    },
    preferredTimeSlots: ["17:00", "18:00", "19:00"]
  },

  // Basketball Player 8
  {
    id: "bb-008",
    name: "James Wilson",
    username: "james_swat",
    avatar: "/images/club-members-players/jalen-brunson.png",
    location: "Marikina City",
    isVerified: true,
    rating: 4.1,
    totalRatings: "67",
    level: "Intermediate",
    rank: "Top 30%",
    number: 55,
    tags: ["Power Forward", "Shot Blocker", "Energy Player"],
    clubId: "7", // Milwaukee Bucks
    
    logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop",
    goals: 0,
    rebounds: 12,
    assists: 1,
    trueShootingPercentage: 52.1,
    bgColor: "#CE1141",
    
    position: "Power Forward",
    trophies: 4,
    wreath: "🥉",
    ordinal: "3rd",
    podiumColor: "#CD7F32",
    leaderboardHeight: "6'7\"",
    wins: 45,
    winRatio: "58%",
    leaderboardRank: 32,
    
    role: "Power Forward",
    avatarFallback: "JW",
    
    teamLogo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop",
    lastGameResult: "Win",
    lastGamePoints: 14,
    teamId: "team-bb-008",
    
    stats: "Intermediate Power Forward",
    badge: "Energy Player",
    isAdmin: false,
    type: "player",
    
    age: 23,
    height: "6'7\"",
    weight: "220 lbs",
    college: "University of Houston",
    yearsExperience: 2,
    jerseyNumber: "55",
    
    email: "james.wilson@email.com",
    phone: "+1-713-555-0456",
    socialMedia: {
      instagram: "@james_swat",
      twitter: "@james_swat"
    },
    
    seasonStats: [
      { key: "Games", value: 28 },
      { key: "Points", value: 12.5 },
      { key: "Rebounds", value: 10.8 },
      { key: "Assists", value: 1.2 },
      { key: "Steals", value: 0.8 },
      { key: "Blocks", value: 2.8 },
      { key: "Turnovers", value: 2.1 },
      { key: "Fouls", value: 3.5 },
      { key: "Minutes", value: 24.2 },
      { key: "FG%", value: 48.5 },
      { key: "3P%", value: 22.1 },
      { key: "FT%", value: 65.2 }
    ],
    careerStats: [
      { key: "Games", value: 56 },
      { key: "Points", value: 11.8 },
      { key: "Rebounds", value: 10.2 },
      { key: "Assists", value: 1.1 },
      { key: "Steals", value: 0.7 },
      { key: "Blocks", value: 2.6 },
      { key: "Turnovers", value: 2.2 },
      { key: "Fouls", value: 3.6 },
      { key: "Minutes", value: 23.8 },
      { key: "FG%", value: 47.8 },
      { key: "3P%", value: 21.5 },
      { key: "FT%", value: 63.8 }
    ],
    gameStats: {
      currentGame: {
        points: 14,
        rebounds: 12,
        assists: 1,
        steals: 1,
        blocks: 3,
        turnovers: 2,
        fouls: 4,
        minutesPlayed: 26,
        plusMinus: 6
      },
      seasonAverages: {
        gamesPlayed: 28,
        points: 12.5,
        rebounds: 10.8,
        assists: 1.2,
        steals: 0.8,
        blocks: 2.8,
        turnovers: 2.1,
        fouls: 3.5,
        minutesPlayed: 24.2,
        fieldGoalPercentage: 48.5,
        threePointPercentage: 22.1,
        freeThrowPercentage: 65.2
      }
    },
    radarData: [
      { category: "Shot Blocking", value: 88, maxValue: 100 },
      { category: "Rebounding", value: 85, maxValue: 100 },
      { category: "Energy", value: 90, maxValue: 100 },
      { category: "Defense", value: 78, maxValue: 100 },
      { category: "Athleticism", value: 82, maxValue: 100 }
    ],
    
    equipment: [
      { id: "eq-023", name: "Nike Air Jordan 37", type: "Basketball Shoes", brand: "Nike", model: "Air Jordan 37", condition: "Good" },
      { id: "eq-024", name: "Spalding NBA Official Game Ball", type: "Basketball", brand: "Spalding", model: "NBA Official", condition: "Good" }
    ],
    preferredSports: ["basketball"],
    primarySport: "basketball",
    playingStyle: "High-energy power forward who excels at shot blocking and rebounding",
    
    matchHistory: [
      { id: "m-012", date: "2024-01-08", opponent: "Space City Hoops", result: "Win", score: "92-85", stats: { gamesPlayed: 1, points: 14, rebounds: 12, assists: 1, steals: 1, blocks: 3, turnovers: 2, fouls: 4, minutesPlayed: 26, fieldGoalPercentage: 50.0, threePointPercentage: 0.0, freeThrowPercentage: 66.7 } }
    ],
    gameResults: [
      { id: "gr-012", gameId: "g-012", date: "2024-01-08", result: "Win", score: "92-85", performance: 7.8 }
    ],
    matchResults: [
      { id: "mr-012", matchId: "m-012", date: "2024-01-08", result: "Win", opponent: "Space City Hoops", score: "92-85" }
    ],
    highlights: [
      { id: "h-012", title: "Monster Block", description: "Rejected a dunk attempt with authority", imageUrl: "https://example.com/highlight12.jpg", date: "2024-01-08", type: "Defense" }
    ],
    achievements: ["Energy Player 2023", "Most Improved 2022", "Rookie of the Year 2021"],
    
    reviews: [
      { id: "r-012", reviewerId: "rev-012", reviewerName: "Coach Davis", rating: 4, comment: "High energy player, needs to work on free throws", date: "2024-01-06", gameId: "g-012" }
    ],
    ratingBreakdown: [
      { category: "Skill", rating: 4.1, count: 32 },
      { category: "Sportsmanship", rating: 4.3, count: 28 },
      { category: "Reliability", rating: 4.0, count: 7 }
    ],
    
    isActive: true,
    lastActive: "2024-01-08T18:30:00Z",
    availability: {
      monday: false,
      tuesday: true,
      wednesday: true,
      thursday: false,
      friday: true,
      saturday: true,
      sunday: true
    },
    preferredTimeSlots: ["18:00", "19:00", "20:00"]
  },

  // Basketball Player 9
  {
    id: "bb-009",
    name: "Sofia Rodriguez",
    username: "sofia_hoops",
    avatar: "/images/club-members-players/ochai-agbaji.png",
    location: "Parañaque City",
    isVerified: true,
    rating: 4.0,
    totalRatings: "54",
    level: "Intermediate",
    rank: "Top 35%",
    number: 3,
    tags: ["Point Guard", "Quick", "Playmaker"],
    clubId: "9", // Toronto Raptors
    
    logo: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=50&h=50&fit=crop",
    goals: 0,
    rebounds: 2,
    assists: 8,
    trueShootingPercentage: 49.8,
    bgColor: "#1D428A",
    
    position: "Point Guard",
    trophies: 3,
    wreath: "🥉",
    ordinal: "3rd",
    podiumColor: "#CD7F32",
    leaderboardHeight: "5'6\"",
    wins: 38,
    winRatio: "52%",
    leaderboardRank: 38,
    
    role: "Point Guard",
    avatarFallback: "SR",
    
    teamLogo: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=40&h=40&fit=crop",
    lastGameResult: "Lose",
    lastGamePoints: 12,
    teamId: "team-bb-009",
    
    stats: "Intermediate Point Guard",
    badge: "Most Improved",
    isAdmin: false,
    type: "player",
    
    age: 22,
    height: "5'6\"",
    weight: "130 lbs",
    college: "University of Colorado",
    yearsExperience: 1,
    jerseyNumber: "3",
    
    email: "sofia.rodriguez@email.com",
    phone: "+1-303-555-0789",
    socialMedia: {
      instagram: "@sofia_hoops",
      twitter: "@sofia_hoops"
    },
    
    seasonStats: [
      { key: "Games", value: 24 },
      { key: "Points", value: 14.2 },
      { key: "Rebounds", value: 2.1 },
      { key: "Assists", value: 6.8 },
      { key: "Steals", value: 1.5 },
      { key: "Blocks", value: 0.1 },
      { key: "Turnovers", value: 3.2 },
      { key: "Fouls", value: 2.8 },
      { key: "Minutes", value: 28.5 },
      { key: "FG%", value: 42.1 },
      { key: "3P%", value: 32.8 },
      { key: "FT%", value: 78.5 }
    ],
    careerStats: [
      { key: "Games", value: 24 },
      { key: "Points", value: 14.2 },
      { key: "Rebounds", value: 2.1 },
      { key: "Assists", value: 6.8 },
      { key: "Steals", value: 1.5 },
      { key: "Blocks", value: 0.1 },
      { key: "Turnovers", value: 3.2 },
      { key: "Fouls", value: 2.8 },
      { key: "Minutes", value: 28.5 },
      { key: "FG%", value: 42.1 },
      { key: "3P%", value: 32.8 },
      { key: "FT%", value: 78.5 }
    ],
    gameStats: {
      currentGame: {
        points: 12,
        rebounds: 2,
        assists: 8,
        steals: 2,
        blocks: 0,
        turnovers: 4,
        fouls: 3,
        minutesPlayed: 29,
        plusMinus: -12
      },
      seasonAverages: {
        gamesPlayed: 24,
        points: 14.2,
        rebounds: 2.1,
        assists: 6.8,
        steals: 1.5,
        blocks: 0.1,
        turnovers: 3.2,
        fouls: 2.8,
        minutesPlayed: 28.5,
        fieldGoalPercentage: 42.1,
        threePointPercentage: 32.8,
        freeThrowPercentage: 78.5
      }
    },
    radarData: [
      { category: "Quickness", value: 88, maxValue: 100 },
      { category: "Passing", value: 82, maxValue: 100 },
      { category: "Ball Handling", value: 85, maxValue: 100 },
      { category: "Defense", value: 75, maxValue: 100 },
      { category: "Scoring", value: 78, maxValue: 100 }
    ],
    
    equipment: [
      { id: "eq-025", name: "Nike Zoom Freak 4", type: "Basketball Shoes", brand: "Nike", model: "Zoom Freak 4", condition: "Good" },
      { id: "eq-026", name: "Wilson NBA Official Game Ball", type: "Basketball", brand: "Wilson", model: "NBA Official", condition: "Good" }
    ],
    preferredSports: ["basketball", "tennis"],
    primarySport: "basketball",
    playingStyle: "Quick point guard with good playmaking ability and improving skills",
    
    matchHistory: [
      { id: "m-013", date: "2024-01-07", opponent: "Mile High Hoops", result: "Lose", score: "78-92", stats: { gamesPlayed: 1, points: 12, rebounds: 2, assists: 8, steals: 2, blocks: 0, turnovers: 4, fouls: 3, minutesPlayed: 29, fieldGoalPercentage: 35.7, threePointPercentage: 25.0, freeThrowPercentage: 100.0 } }
    ],
    gameResults: [
      { id: "gr-013", gameId: "g-013", date: "2024-01-07", result: "Lose", score: "78-92", performance: 6.2 }
    ],
    matchResults: [
      { id: "mr-013", matchId: "m-013", date: "2024-01-07", result: "Lose", opponent: "Mile High Hoops", score: "78-92" }
    ],
    highlights: [
      { id: "h-013", title: "Behind-the-Back Pass", description: "Creative behind-the-back pass for an assist", imageUrl: "https://example.com/highlight13.jpg", date: "2024-01-07", type: "Passing" }
    ],
    achievements: ["Most Improved 2023", "Rookie of the Year 2022"],
    
    reviews: [
      { id: "r-013", reviewerId: "rev-013", reviewerName: "Coach Martinez", rating: 3, comment: "Quick player with potential, needs to reduce turnovers", date: "2024-01-05", gameId: "g-013" }
    ],
    ratingBreakdown: [
      { category: "Skill", rating: 4.0, count: 28 },
      { category: "Sportsmanship", rating: 4.2, count: 24 },
      { category: "Reliability", rating: 3.8, count: 2 }
    ],
    
    isActive: true,
    lastActive: "2024-01-07T17:45:00Z",
    availability: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: false,
      friday: true,
      saturday: false,
      sunday: true
    },
    preferredTimeSlots: ["17:00", "18:00", "19:00"]
  },

  // Basketball Player 10
  {
    id: "bb-010",
    name: "Kevin Thompson",
    username: "kevin_hoops",
    avatar: "/images/club-members-players/stephen-curry.png",
    location: "Las Piñas City",
    isVerified: true,
    rating: 3.8,
    totalRatings: "42",
    level: "Beginner",
    rank: "Top 40%",
    number: 17,
    tags: ["Shooting Guard", "Rising Star", "Hard Worker"],
    clubId: "10", // Washington Wizards
    
    logo: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=50&h=50&fit=crop",
    goals: 0,
    rebounds: 3,
    assists: 2,
    trueShootingPercentage: 46.2,
    bgColor: "#E03A3E",
    
    position: "Shooting Guard",
    trophies: 2,
    wreath: "🥉",
    ordinal: "3rd",
    podiumColor: "#CD7F32",
    leaderboardHeight: "6'2\"",
    wins: 28,
    winRatio: "45%",
    leaderboardRank: 45,
    
    role: "Shooting Guard",
    avatarFallback: "KT",
    
    teamLogo: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=40&h=40&fit=crop",
    lastGameResult: "Win",
    lastGamePoints: 18,
    teamId: "team-bb-010",
    
    stats: "Beginner Shooting Guard",
    badge: "Rising Star",
    isAdmin: false,
    type: "player",
    
    age: 20,
    height: "6'2\"",
    weight: "175 lbs",
    college: "Portland State",
    yearsExperience: 1,
    jerseyNumber: "17",
    
    email: "kevin.thompson@email.com",
    phone: "+1-503-555-0123",
    socialMedia: {
      instagram: "@kevin_hoops",
      twitter: "@kevin_hoops"
    },
    
    seasonStats: [
      { key: "Games", value: 18 },
      { key: "Points", value: 16.8 },
      { key: "Rebounds", value: 3.2 },
      { key: "Assists", value: 2.5 },
      { key: "Steals", value: 1.2 },
      { key: "Blocks", value: 0.3 },
      { key: "Turnovers", value: 3.8 },
      { key: "Fouls", value: 3.2 },
      { key: "Minutes", value: 25.8 },
      { key: "FG%", value: 41.2 },
      { key: "3P%", value: 28.5 },
      { key: "FT%", value: 72.1 }
    ],
    careerStats: [
      { key: "Games", value: 18 },
      { key: "Points", value: 16.8 },
      { key: "Rebounds", value: 3.2 },
      { key: "Assists", value: 2.5 },
      { key: "Steals", value: 1.2 },
      { key: "Blocks", value: 0.3 },
      { key: "Turnovers", value: 3.8 },
      { key: "Fouls", value: 3.2 },
      { key: "Minutes", value: 25.8 },
      { key: "FG%", value: 41.2 },
      { key: "3P%", value: 28.5 },
      { key: "FT%", value: 72.1 }
    ],
    gameStats: {
      currentGame: {
        points: 18,
        rebounds: 4,
        assists: 3,
        steals: 2,
        blocks: 0,
        turnovers: 2,
        fouls: 2,
        minutesPlayed: 27,
        plusMinus: 8
      },
      seasonAverages: {
        gamesPlayed: 18,
        points: 16.8,
        rebounds: 3.2,
        assists: 2.5,
        steals: 1.2,
        blocks: 0.3,
        turnovers: 3.8,
        fouls: 3.2,
        minutesPlayed: 25.8,
        fieldGoalPercentage: 41.2,
        threePointPercentage: 28.5,
        freeThrowPercentage: 72.1
      }
    },
    radarData: [
      { category: "Scoring", value: 78, maxValue: 100 },
      { category: "Work Ethic", value: 85, maxValue: 100 },
      { category: "Potential", value: 88, maxValue: 100 },
      { category: "Athleticism", value: 75, maxValue: 100 },
      { category: "Defense", value: 68, maxValue: 100 }
    ],
    
    equipment: [
      { id: "eq-027", name: "Adidas Dame 8", type: "Basketball Shoes", brand: "Adidas", model: "Dame 8", condition: "Good" },
      { id: "eq-028", name: "Spalding NBA Official Game Ball", type: "Basketball", brand: "Spalding", model: "NBA Official", condition: "Good" }
    ],
    preferredSports: ["basketball"],
    primarySport: "basketball",
    playingStyle: "Young shooting guard with good scoring potential and strong work ethic",
    
    matchHistory: [
      { id: "m-014", date: "2024-01-06", opponent: "Rose City Hoops", result: "Win", score: "85-78", stats: { gamesPlayed: 1, points: 18, rebounds: 4, assists: 3, steals: 2, blocks: 0, turnovers: 2, fouls: 2, minutesPlayed: 27, fieldGoalPercentage: 47.1, threePointPercentage: 33.3, freeThrowPercentage: 75.0 } }
    ],
    gameResults: [
      { id: "gr-014", gameId: "g-014", date: "2024-01-06", result: "Win", score: "85-78", performance: 7.5 }
    ],
    matchResults: [
      { id: "mr-014", matchId: "m-014", date: "2024-01-06", result: "Win", opponent: "Rose City Hoops", score: "85-78" }
    ],
    highlights: [
      { id: "h-014", title: "Game-Winning Layup", description: "Clutch layup to secure the victory", imageUrl: "https://example.com/highlight14.jpg", date: "2024-01-06", type: "Game Winner" }
    ],
    achievements: ["Rising Star 2023", "Most Improved 2022"],
    
    reviews: [
      { id: "r-014", reviewerId: "rev-014", reviewerName: "Coach Wilson", rating: 4, comment: "Young player with good potential and work ethic", date: "2024-01-04", gameId: "g-014" }
    ],
    ratingBreakdown: [
      { category: "Skill", rating: 3.8, count: 22 },
      { category: "Sportsmanship", rating: 4.0, count: 18 },
      { category: "Reliability", rating: 3.6, count: 2 }
    ],
    
    isActive: true,
    lastActive: "2024-01-06T16:30:00Z",
    availability: {
      monday: true,
      tuesday: false,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: true,
      sunday: false
    },
    preferredTimeSlots: ["16:00", "17:00", "18:00"]
  }
];