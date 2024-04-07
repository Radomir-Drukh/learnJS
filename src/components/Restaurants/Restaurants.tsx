import {useState} from 'react';
import {Restaurant} from '../Restaurant/Restaurant';

import {RestaurantsTabs} from '../RestaurantsTabs/RestaurantsTabs';
import styles from './Restaurants.module.scss';
import {useAppSelector} from '../../redux/hooks';

const initialRestaurantId = localStorage.getItem('currentRestaurantId');

export const Restaurants = () => {
    const alternativeInitialId = useAppSelector((store) => store.restaurants.ids[0]);
    const [currentRestaurantId, setRestaurantId] = useState(
        initialRestaurantId ?? alternativeInitialId,
    );

    const onTabClickHandler = (id: string) => {
        setRestaurantId(id);
        localStorage.setItem('currentRestaurantId', `${id}`);
    };

    return (
        <div className={styles.container}>
            <RestaurantsTabs currentId={currentRestaurantId} onTabClick={onTabClickHandler} />
            <Restaurant restaurantId={currentRestaurantId} />
        </div>
    );
};
