import type { Review } from '~/schema/review';

export const dummyReviews: Review[] = [
    {
        id: '1',
        clubId: '1',
        userId: '1',
        userName: '#0 TheMageSlayer (G)',
        userAvatar: '/images/club-members-players/stephen-curry.png',
        userRank: 'G',
        rating: 4,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        createdAt: new Date('2025-09-30'),
        helpful: 12
    },
    {
        id: '2',
        clubId: '1',
        userId: '2',
        userName: '#0 TheMageSlayer (G)',
        userAvatar: '/images/club-members-players/stephen-curry.png',
        userRank: 'G',
        rating: 4,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        createdAt: new Date('2025-09-30'),
        helpful: 8
    },
    {
        id: '3',
        clubId: '1',
        userId: '3',
        userName: 'BasketballPro (S)',
        userAvatar: '/images/club-members-players/lebron-james.png',
        userRank: 'S',
        rating: 5,
        comment: 'Amazing club with great facilities and friendly members. The coaching staff is top-notch and really helps improve your game. Highly recommend joining!',
        createdAt: new Date('2025-09-28'),
        helpful: 25
    },
    {
        id: '4',
        clubId: '1',
        userId: '4',
        userName: 'CourtKing (A)',
        userAvatar: '/images/club-members-players/luka-doncic.png',
        userRank: 'A',
        rating: 5,
        comment: 'Best basketball club in the city! The community is welcoming and the training sessions are intense but rewarding. Great place to improve your skills.',
        createdAt: new Date('2025-09-25'),
        helpful: 18
    },
    {
        id: '5',
        clubId: '1',
        userId: '5',
        userName: 'HoopsMaster (B)',
        userAvatar: '/images/club-members-players/jayson-tatum.png',
        userRank: 'B',
        rating: 4,
        comment: 'Good club with decent facilities. The members are competitive but fair. Could use some improvements in the equipment but overall a solid experience.',
        createdAt: new Date('2025-09-22'),
        helpful: 15
    },
    {
        id: '6',
        clubId: '1',
        userId: '6',
        userName: 'BallHandler (C)',
        userAvatar: '/images/club-members-players/paolo-banchero-orlando.png',
        userRank: 'C',
        rating: 3,
        comment: 'Average club experience. The facilities are okay but could be better maintained. The coaching is decent but not exceptional.',
        createdAt: new Date('2025-09-20'),
        helpful: 6
    },
    {
        id: '7',
        clubId: '1',
        userId: '7',
        userName: 'Shooter (D)',
        userAvatar: '/images/club-members-players/ochai-agbaji.png',
        userRank: 'D',
        rating: 2,
        comment: 'Not impressed with this club. The facilities are outdated and the coaching staff seems disinterested. Would not recommend.',
        createdAt: new Date('2025-09-18'),
        helpful: 3
    }
];

// Helper function to get reviews by club ID
export const getReviewsByClubId = (clubId: string): Review[] => {
    return dummyReviews.filter(review => review.clubId === clubId);
};

// Helper function to calculate average rating
export const getAverageRating = (reviews: Review[]): number => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return Math.round((sum / reviews.length) * 10) / 10; // Round to 1 decimal place
};

// Helper function to get rating distribution
export const getRatingDistribution = (reviews: Review[]): { [key: number]: number } => {
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach(review => {
        distribution[review.rating as keyof typeof distribution]++;
    });
    return distribution;
};
