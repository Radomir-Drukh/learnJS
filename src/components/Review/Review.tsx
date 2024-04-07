import {FC} from 'react';
import {ReviewInterface} from '../../types/review.models';

interface ReviewProps {
    review: ReviewInterface;
}

export const Review = ({review}: ReviewProps) => <li>{review.text}</li>;