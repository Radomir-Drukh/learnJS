import {FC} from 'react';
import {ReviewInterface} from '../../types/review.models';
import {normalizedReviews} from '../../constants/normalized-mock';

interface ReviewProps {
    review: (typeof normalizedReviews)[number];
}

export const Review = ({review}: ReviewProps) => {
    return <li>{review.text}</li>;
};
