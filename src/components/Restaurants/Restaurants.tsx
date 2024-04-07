import {useState} from 'react';
import {Restaurant} from '../Restaurant/Restaurant';

import {restaurants} from '../../constants/mock';
import {RestaurantsTabs} from '../RestaurantsTabs/RestaurantsTabs';
import styles from './Restaurants.module.scss';

const initialRestaurantIndex = Number(localStorage.getItem('currentRestaurantIndex'));

export const Restaurants = () => {
    const [currentRestaurantIndex, setRestaurantIndex] = useState(initialRestaurantIndex);

    const currentRestaurant = restaurants[currentRestaurantIndex];

    const onTabClickHandler = (index: number) => {
        setRestaurantIndex(index);
        localStorage.setItem('currentRestaurantIndex', `${index}`);
    };

    return (
        <div className={styles.container}>
            <RestaurantsTabs
                restaurants={restaurants}
                currentIndex={currentRestaurantIndex}
                onTabClick={onTabClickHandler}
            />
            {currentRestaurant && <Restaurant restaurant={currentRestaurant} />}
        </div>
    );
};
