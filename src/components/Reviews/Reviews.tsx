import {FC} from 'react';
import {Review} from '../Review/Review';
import {EmptyList} from '../EmptyList/EmptyList';
import {ReviewInterface} from '../../types/review.models';
import styles from './Reviews.module.scss';
import classNames from 'classnames';

interface ReviewsProps {
    reviews: ReviewInterface[];
}

export const Reviews = ({reviews}: ReviewsProps) => (
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
