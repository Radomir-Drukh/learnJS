import {FC} from 'react';
import {Tab} from '../common/Tab/Tab';
import {RestaurantInterface} from '../../types/restaurant.models';

interface RestaurantsTabsProps {
    restaurants: RestaurantInterface[];
    currentIndex: number;
    onTabClick: (index: number) => void;
}

export const RestaurantsTabs = ({restaurants, onTabClick, currentIndex}: RestaurantsTabsProps) => {
    return (
        <div>
            {restaurants.map((restaurant, index) => (
                <Tab
                    key={index}
                    title={restaurant.name}
                    isActive={index === currentIndex}
                    onClick={() => onTabClick(index)}
                />
            ))}
        </div>
    );
};
