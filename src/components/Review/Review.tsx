import {useAppSelector} from '../../redux/hooks';
import {ReviewUser} from '../ReviewUser/ReviewUser';

interface ReviewProps {
    reviewId: string;
}

export const Review = ({reviewId}: ReviewProps) => {
    const review = useAppSelector((store) => store.reviews.entities[reviewId]);

    if (!review) {
        return null;
    }

    return (
        <li>
            <ReviewUser userId={review.userId} />
            {` - ${review.rating}* - ${review.text}`}
        </li>
    );
};
