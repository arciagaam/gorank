import { z } from 'zod';

export type Review = {
    id: string;
    clubId: string;
    userId: string;
    userName: string;
    userAvatar: string;
    userRank: string;
    rating: number; // 1-5 stars
    comment: string;
    createdAt: Date;
    helpful: number;
};

export const CreateReviewSchema = z.object({
    rating: z.number().min(1).max(5),
    comment: z.string().min(1, 'Review comment is required'),
});

export type CreateReview = z.infer<typeof CreateReviewSchema>;
