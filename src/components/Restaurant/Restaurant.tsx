import {Menu} from '../Menu/Menu';
import {Reviews} from '../Reviews/Reviews';

import {useAppSelector} from '../../redux/hooks';
import styles from './Restaurant.module.scss';
import {useEffect} from 'react';

interface RestaurantProps {
    restaurantId: string;
}

export const Restaurant = ({restaurantId}: RestaurantProps) => {
    const restaurant = useAppSelector((store) => store.restaurants.entities[restaurantId]);

    if (!restaurant) {
        return null;
    }

    return (
        <div className={styles.root}>
            <h2>{restaurant.name}</h2>
            <Menu dishesIds={restaurant.menu} />
            <Reviews restaurantId={restaurantId} reviewsIds={restaurant.reviews} />
        </div>
    );
};
