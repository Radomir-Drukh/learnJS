import {FC} from 'react';
import {Menu} from '../Menu/Menu';
import {Reviews} from '../Reviews/Reviews';
import {RestaurantInterface} from '../../types/restaurant.models';
import classNames from 'classnames';

import styles from './Restaurant.module.scss';

interface RestaurantProps {
    restaurant: RestaurantInterface;
}

export const Restaurant = ({restaurant}: RestaurantProps) => (
    <div className={styles.root}>
        <h2>{restaurant.name}</h2>
        <Menu menu={restaurant.menu} />
        <Reviews reviews={restaurant.reviews} />
    </div>
);
