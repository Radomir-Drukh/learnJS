import {useState} from 'react';
import {Restaurant} from '../Restaurant/Restaurant';

import {RestaurantsTabs} from '../RestaurantsTabs/RestaurantsTabs';
import styles from './Restaurants.module.scss';

export const Restaurants = () => {
    const [currentRestaurantId, setRestaurantId] = useState<string | undefined>();

    const onTabClickHandler = (id: string) => {
        setRestaurantId(id);
        localStorage.setItem('currentRestaurantId', `${id}`);
    };

    return (
        <div className={styles.container}>
            <RestaurantsTabs currentId={currentRestaurantId} onTabClick={onTabClickHandler} />
            {currentRestaurantId && <Restaurant restaurantId={currentRestaurantId} />}
        </div>
    );
};
