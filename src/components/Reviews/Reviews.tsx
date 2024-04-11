import {FC} from 'react';
import {Review} from '../Review/Review';
import {EmptyList} from '../EmptyList/EmptyList';
import {ReviewInterface} from '../../types/review.models';
import styles from './Reviews.module.scss';
import classNames from 'classnames';
import {useAppSelector} from '../../redux/hooks';

interface ReviewsProps {
    reviewsIds: string[];
}

export const Reviews = ({reviewsIds}: ReviewsProps) => {
    const reviews = useAppSelector((store) => reviewsIds.map((id) => store.reviews.entities[id]));

    return (
        <div className={classNames(styles.root)}>
            <h3>Отзывы</h3>
            {reviews?.length ? (
                <ul className={classNames(styles.reviewList)}>
                    {reviews.map((item, index) => (
                        <Review key={index} review={item} />
                    ))}
                </ul>
            ) : (
                <EmptyList entity="отзывов" />
            )}
        </div>
    );
};
