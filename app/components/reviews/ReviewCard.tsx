import type { Review } from "~/schema/review";
import { StarRating } from "../ui/star-rating";

export const ReviewCard = ({ review }: { review: Review }) => {
    return (
        <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-start gap-3">
                <div className="flex items-center gap-2">
                    <StarRating rating={review.rating} size="sm" />
                    <img
                        src={review.userAvatar}
                        alt={review.userName}
                        className="w-8 h-8 rounded-full object-cover"
                    />
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">{review.userName}</span>
                        <span className="text-xs text-gray-500">
                            {review.createdAt.toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{review.comment}</p>
                    {review.helpful > 0 && (
                        <div className="mt-2 text-xs text-gray-500">
                            {review.helpful} people found this helpful
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};