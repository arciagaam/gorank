import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
    rating: number;
    maxRating?: number;
    size?: 'sm' | 'md' | 'lg';
    interactive?: boolean;
    onRatingChange?: (rating: number) => void;
    className?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({
    rating,
    maxRating = 5,
    size = 'md',
    interactive = false,
    onRatingChange,
    className = ''
}) => {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6'
    };

    const handleClick = (newRating: number) => {
        if (interactive && onRatingChange) {
            onRatingChange(newRating);
        }
    };

    return (
        <div className={`flex items-center gap-1 ${className}`}>
            {Array.from({ length: maxRating }, (_, index) => {
                const starValue = index + 1;
                const isFilled = starValue <= rating;
                
                return (
                    <Star
                        key={index}
                        className={`${sizeClasses[size]} ${
                            isFilled 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : 'text-gray-300'
                        } ${
                            interactive 
                                ? 'cursor-pointer hover:text-yellow-400 transition-colors' 
                                : ''
                        }`}
                        onClick={() => handleClick(starValue)}
                    />
                );
            })}
        </div>
    );
};
