import {FC, MouseEventHandler} from 'react';
import {useAppSelector} from '../../../redux/hooks';

interface TabProps {
    id: string;
    isActive: boolean;
    onClick: MouseEventHandler;
}

export const Tab = ({id, isActive, onClick}: TabProps) => {
    const restaurant = useAppSelector((store) => store.restaurants.entities[id]);

    if (!restaurant) {
        return null;
    }

    return (
        <button onClick={onClick} disabled={isActive}>
            {restaurant.name}
        </button>
    );
};
