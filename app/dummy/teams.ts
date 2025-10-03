// Simplified team data with only essential fields for UI display
export interface SimplePlayer {
  id: string;
  name: string;
  position: string;
  lastGameStatus: "Win" | "Lose";
  clubLogo: string;
  avatar: string;
  lastGamePoints: number;
}

// Basketball Teams (Team A & Team B)
export const basketballTeam = {
  teamA: [
    {
      id: "bb-teamA-001",
      name: "LeBron James",
      position: "Small Forward",
      lastGameStatus: "Win" as const,
      clubLogo: "/images/clubs-logo/los-angeles-lakers-logo.png",
      avatar: "/images/club-members-players/lebron-james.png",
      lastGamePoints: 28
    },
    {
      id: "bb-teamA-002",
      name: "Stephen Curry",
      position: "Point Guard",
      lastGameStatus: "Win" as const,
      clubLogo: "/images/clubs-logo/los-angeles-lakers-logo.png",
      avatar: "/images/club-members-players/stephen-curry.png",
      lastGamePoints: 32
    },
    {
      id: "bb-teamA-003",
      name: "Jayson Tatum",
      position: "Small Forward",
      lastGameStatus: "Lose" as const,
      clubLogo: "/images/clubs-logo/chicago-bulls-logo.png",
      avatar: "/images/club-members-players/jayson-tatum.png",
      lastGamePoints: 24
    },
    {
      id: "bb-teamA-004",
      name: "Luka Doncic",
      position: "Point Guard",
      lastGameStatus: "Win" as const,
      clubLogo: "/images/clubs-logo/atlanta-hawks-logo.png",
      avatar: "/images/club-members-players/luka-doncic.png",
      lastGamePoints: 35
    },
    {
      id: "bb-teamA-005",
      name: "Magic Johnson",
      position: "Point Guard",
      lastGameStatus: "Win" as const,
      clubLogo: "/images/clubs-logo/los-angeles-lakers-logo.png",
      avatar: "/images/club-members-players/magic-johnson.png",
      lastGamePoints: 22
    },
    {
      id: "bb-teamA-006",
      name: "Jalen Brunson",
      position: "Point Guard",
      lastGameStatus: "Lose" as const,
      clubLogo: "/images/clubs-logo/toronto-raptors-logo.png",
      avatar: "/images/club-members-players/jalen-brunson.png",
      lastGamePoints: 28
    }
  ] as SimplePlayer[],
  teamB: [
    {
      id: "bb-teamB-001",
      name: "Paolo Banchero",
      position: "Power Forward",
      lastGameStatus: "Win" as const,
      clubLogo: "/images/clubs-logo/milwaukee-bucks-logo.png",
      avatar: "/images/club-members-players/paolo-banchero-orlando.png",
      lastGamePoints: 26
    },
    {
      id: "bb-teamB-002",
      name: "Ochai Agbaji",
      position: "Shooting Guard",
      lastGameStatus: "Lose" as const,
      clubLogo: "/images/clubs-logo/washington-wizards-logo.png",
      avatar: "/images/club-members-players/ochai-agbaji.png",
      lastGamePoints: 18
    },
    {
      id: "bb-teamB-003",
      name: "Marcus Johnson",
      position: "Point Guard",
      lastGameStatus: "Win" as const,
      clubLogo: "/images/clubs-logo/los-angeles-lakers-logo.png",
      avatar: "/images/club-members-players/lebron-james.png",
      lastGamePoints: 25
    },
    {
      id: "bb-teamB-004",
      name: "Sarah Chen",
      position: "Shooting Guard",
      lastGameStatus: "Lose" as const,
      clubLogo: "/images/clubs-logo/miami-heat-logo.png",
      avatar: "/images/club-members-players/stephen-curry.png",
      lastGamePoints: 20
    },
    {
      id: "bb-teamB-005",
      name: "Robert Martinez",
      position: "Center",
      lastGameStatus: "Win" as const,
      clubLogo: "/images/clubs-logo/phoenix-suns-logo.png",
      avatar: "/images/club-members-players/magic-johnson.png",
      lastGamePoints: 19
    },
    {
      id: "bb-teamB-006",
      name: "Emma Thompson",
      position: "Power Forward",
      lastGameStatus: "Lose" as const,
      clubLogo: "/images/clubs-logo/charlotte-hornets-logo.png",
      avatar: "/images/club-members-players/jayson-tatum.png",
      lastGamePoints: 23
    }
  ] as SimplePlayer[]
};

// Volleyball Teams (Team A & Team B)
export const volleyballTeam = {
  teamA: [
    {
      id: "vb-teamA-001",
      name: "Sarah Chen",
      position: "Outside Hitter",
      lastGameStatus: "Win" as const,
      clubLogo: "/images/clubs-logo/miami-heat-logo.png",
      avatar: "/images/club-members-players/stephen-curry.png",
      lastGamePoints: 18
    },
    {
      id: "vb-teamA-002",
      name: "Paolo Banchero",
      position: "Middle Blocker",
      lastGameStatus: "Lose" as const,
      clubLogo: "/images/clubs-logo/miami-heat-logo.png",
      avatar: "/images/club-members-players/paolo-banchero-orlando.png",
      lastGamePoints: 15
    },
    {
      id: "vb-teamA-003",
      name: "Ochai Agbaji",
      position: "Outside Hitter",
      lastGameStatus: "Win" as const,
      clubLogo: "/images/clubs-logo/miami-heat-logo.png",
      avatar: "/images/club-members-players/ochai-agbaji.png",
      lastGamePoints: 16
    },
    {
      id: "vb-teamA-004",
      name: "LeBron James",
      position: "Setter",
      lastGameStatus: "Win" as const,
      clubLogo: "/images/clubs-logo/miami-heat-logo.png",
      avatar: "/images/club-members-players/lebron-james.png",
      lastGamePoints: 20
    },
    {
      id: "vb-teamA-005",
      name: "Stephen Curry",
      position: "Opposite",
      lastGameStatus: "Lose" as const,
      clubLogo: "/images/clubs-logo/miami-heat-logo.png",
      avatar: "/images/club-members-players/stephen-curry.png",
      lastGamePoints: 17
    },
    {
      id: "vb-teamA-006",
      name: "Jayson Tatum",
      position: "Libero",
      lastGameStatus: "Win" as const,
      clubLogo: "/images/clubs-logo/miami-heat-logo.png",
      avatar: "/images/club-members-players/jayson-tatum.png",
      lastGamePoints: 12
    }
  ] as SimplePlayer[],
  teamB: [
    {
      id: "vb-teamB-001",
      name: "Luka Doncic",
      position: "Middle Blocker",
      lastGameStatus: "Lose" as const,
      clubLogo: "/images/clubs-logo/miami-heat-logo.png",
      avatar: "/images/club-members-players/luka-doncic.png",
      lastGamePoints: 14
    },
    {
      id: "vb-teamB-002",
      name: "Magic Johnson",
      position: "Outside Hitter",
      lastGameStatus: "Win" as const,
      clubLogo: "/images/clubs-logo/miami-heat-logo.png",
      avatar: "/images/club-members-players/magic-johnson.png",
      lastGamePoints: 19
    },
    {
      id: "vb-teamB-003",
      name: "Jalen Brunson",
      position: "Setter",
      lastGameStatus: "Lose" as const,
      clubLogo: "/images/clubs-logo/miami-heat-logo.png",
      avatar: "/images/club-members-players/jalen-brunson.png",
      lastGamePoints: 13
    },
    {
      id: "vb-teamB-004",
      name: "Robert Martinez",
      position: "Opposite",
      lastGameStatus: "Win" as const,
      clubLogo: "/images/clubs-logo/miami-heat-logo.png",
      avatar: "/images/club-members-players/magic-johnson.png",
      lastGamePoints: 16
    },
    {
      id: "vb-teamB-005",
      name: "Emma Thompson",
      position: "Libero",
      lastGameStatus: "Lose" as const,
      clubLogo: "/images/clubs-logo/miami-heat-logo.png",
      avatar: "/images/club-members-players/jayson-tatum.png",
      lastGamePoints: 11
    },
    {
      id: "vb-teamB-006",
      name: "Alex Kim",
      position: "Middle Blocker",
      lastGameStatus: "Win" as const,
      clubLogo: "/images/clubs-logo/miami-heat-logo.png",
      avatar: "/images/club-members-players/luka-doncic.png",
      lastGamePoints: 18
    }
  ] as SimplePlayer[]
};

// Pickleball Teams (Team A & Team B)
export const pickleballTeam = {
  teamA: [
    {
      id: "pb-teamA-001",
      name: "Robert Martinez",
      position: "Doubles Player",
      lastGameStatus: "Win" as const,
      clubLogo: "/images/clubs-logo/phoenix-suns-logo.png",
      avatar: "/images/club-members-players/magic-johnson.png",
      lastGamePoints: 11
    },
    {
      id: "pb-teamA-002",
      name: "Emma Thompson",
      position: "Doubles Player",
      lastGameStatus: "Lose" as const,
      clubLogo: "/images/clubs-logo/phoenix-suns-logo.png",
      avatar: "/images/club-members-players/jayson-tatum.png",
      lastGamePoints: 8
    }
  ] as SimplePlayer[],
  teamB: [
    {
      id: "pb-teamB-001",
      name: "LeBron James",
      position: "Doubles Player",
      lastGameStatus: "Win" as const,
      clubLogo: "/images/clubs-logo/phoenix-suns-logo.png",
      avatar: "/images/club-members-players/lebron-james.png",
      lastGamePoints: 15
    },
    {
      id: "pb-teamB-002",
      name: "Sarah Chen",
      position: "Doubles Player",
      lastGameStatus: "Lose" as const,
      clubLogo: "/images/clubs-logo/phoenix-suns-logo.png",
      avatar: "/images/club-members-players/stephen-curry.png",
      lastGamePoints: 9
    }
  ] as SimplePlayer[]
};

// Tennis Teams (Team A & Team B)
export const tennisTeam = {
  teamA: [
    {
      id: "tn-teamA-001",
      name: "Emma Thompson",
      position: "Singles Player",
      lastGameStatus: "Win" as const,
      clubLogo: "/images/clubs-logo/charlotte-hornets-logo.png",
      avatar: "/images/club-members-players/jayson-tatum.png",
      lastGamePoints: 6
    },
    {
      id: "tn-teamA-002",
      name: "Stephen Curry",
      position: "Singles Player",
      lastGameStatus: "Lose" as const,
      clubLogo: "/images/clubs-logo/charlotte-hornets-logo.png",
      avatar: "/images/club-members-players/stephen-curry.png",
      lastGamePoints: 4
    }
  ] as SimplePlayer[],
  teamB: [
    {
      id: "tn-teamB-001",
      name: "Luka Doncic",
      position: "Doubles Player",
      lastGameStatus: "Win" as const,
      clubLogo: "/images/clubs-logo/charlotte-hornets-logo.png",
      avatar: "/images/club-members-players/luka-doncic.png",
      lastGamePoints: 6
    },
    {
      id: "tn-teamB-002",
      name: "Paolo Banchero",
      position: "Doubles Player",
      lastGameStatus: "Lose" as const,
      clubLogo: "/images/clubs-logo/charlotte-hornets-logo.png",
      avatar: "/images/club-members-players/paolo-banchero-orlando.png",
      lastGamePoints: 3
    }
  ] as SimplePlayer[]
};

// Badminton Teams (Team A & Team B)
export const badmintonTeam = {
  teamA: [
    {
      id: "bd-teamA-001",
      name: "Alex Kim",
      position: "Doubles Player",
      lastGameStatus: "Win" as const,
      clubLogo: "/images/clubs-logo/cleveland-cavaliers-logo.png",
      avatar: "/images/club-members-players/luka-doncic.png",
      lastGamePoints: 21
    },
    {
      id: "bd-teamA-002",
      name: "Ochai Agbaji",
      position: "Singles Player",
      lastGameStatus: "Lose" as const,
      clubLogo: "/images/clubs-logo/cleveland-cavaliers-logo.png",
      avatar: "/images/club-members-players/ochai-agbaji.png",
      lastGamePoints: 18
    }
  ] as SimplePlayer[],
  teamB: [
    {
      id: "bd-teamB-001",
      name: "Magic Johnson",
      position: "Doubles Player",
      lastGameStatus: "Win" as const,
      clubLogo: "/images/clubs-logo/cleveland-cavaliers-logo.png",
      avatar: "/images/club-members-players/magic-johnson.png",
      lastGamePoints: 19
    },
    {
      id: "bd-teamB-002",
      name: "Jalen Brunson",
      position: "Singles Player",
      lastGameStatus: "Lose" as const,
      clubLogo: "/images/clubs-logo/cleveland-cavaliers-logo.png",
      avatar: "/images/club-members-players/jalen-brunson.png",
      lastGamePoints: 16
    }
  ] as SimplePlayer[]
};

export const matchParticipants = [
  {
    id: "mp-001",
    name: "LeBron James",
    position: "Coach",
    lastGameStatus: "Win" as const,
    clubLogo: "/images/clubs-logo/los-angeles-lakers-logo.png",
    avatar: "/images/club-members-players/lebron-james.png",
    lastGamePoints: 28
  },
  {
    id: "mp-002",
    name: "Stephen Curry",
    position: "Referee",
    lastGameStatus: "Win" as const,
    clubLogo: "/images/clubs-logo/los-angeles-lakers-logo.png",
    avatar: "/images/club-members-players/stephen-curry.png",
    lastGamePoints: 32
  },
  {
    id: "mp-003",
    name: "Jayson Tatum",
    position: "Scorer",
    lastGameStatus: "Lose" as const,
    clubLogo: "/images/clubs-logo/chicago-bulls-logo.png",
    avatar: "/images/club-members-players/jayson-tatum.png",
    lastGamePoints: 24
  },
  {
    id: "mp-004",
    name: "Luka Doncic",
    position: "Photographer",
    lastGameStatus: "Win" as const,
    clubLogo: "/images/clubs-logo/atlanta-hawks-logo.png",
    avatar: "/images/club-members-players/luka-doncic.png",
    lastGamePoints: 35
  },
  {
    id: "mp-005",
    name: "Magic Johnson",
    position: "Non Player",
    lastGameStatus: "Win" as const,
    clubLogo: "/images/clubs-logo/los-angeles-lakers-logo.png",
    avatar: "/images/club-members-players/magic-johnson.png",
    lastGamePoints: 22
  },
  {
    id: "mp-006",
    name: "Paolo Banchero",
    position: "Coach",
    lastGameStatus: "Win" as const,
    clubLogo: "/images/clubs-logo/milwaukee-bucks-logo.png",
    avatar: "/images/club-members-players/paolo-banchero-orlando.png",
    lastGamePoints: 26
  }
] as SimplePlayer[]

// Export all teams
export const allTeams = {
  basketball: basketballTeam,
  volleyball: volleyballTeam,
  pickleball: pickleballTeam,
  tennis: tennisTeam,
  badminton: badmintonTeam
};

// Export team by sport
export const getTeamBySport = (sport: string) => {
  return allTeams[sport as keyof typeof allTeams] || { teamA: [], teamB: [] };
};

// Export all players across all sports
export const allPlayers = {
  basketball: [...basketballTeam.teamA, ...basketballTeam.teamB],
  volleyball: [...volleyballTeam.teamA, ...volleyballTeam.teamB],
  pickleball: [...pickleballTeam.teamA, ...pickleballTeam.teamB],
  tennis: [...tennisTeam.teamA, ...tennisTeam.teamB],
  badminton: [...badmintonTeam.teamA, ...badmintonTeam.teamB]
};