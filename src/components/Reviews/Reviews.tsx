import {FC, useEffect} from 'react';
import {Review} from '../Review/Review';
import {EmptyList} from '../EmptyList/EmptyList';
import {ReviewInterface} from '../../types/review.models';
import styles from './Reviews.module.scss';
import classNames from 'classnames';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {getReviewsByRestaurantId} from '../../redux/slices/entities/reviews/reviews.thunks';

interface ReviewsProps {
    reviewsIds: string[];
    restaurantId: string;
}

export const Reviews = ({reviewsIds, restaurantId}: ReviewsProps) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getReviewsByRestaurantId(restaurantId));
    }, [restaurantId]);

    return (
        <div className={classNames(styles.root)}>
            <h3>Отзывы</h3>
            {reviewsIds?.length ? (
                <ul className={classNames(styles.reviewList)}>
                    {reviewsIds.map(
                        (item, index) => item && <Review key={index} reviewId={item} />,
                    )}
                </ul>
            ) : (
                <EmptyList entity="отзывов" />
            )}
        </div>
    );
};
