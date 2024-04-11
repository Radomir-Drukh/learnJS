import {FC, useContext} from 'react';
import {UserContext} from '../../context/user';
import {MealInterface} from '../../types/meal.models';
import {Counter} from '../common/Counter/Counter';
import {useAppSelector} from '../../redux/hooks';

interface MealProps {
    mealID: string;
}

export const Meal = ({mealID}: MealProps) => {
    const {user} = useContext(UserContext);

    const dish = useAppSelector((store) => store.dishes.entities[mealID]);

    return (
        <li>
            <div>{dish.name}</div>
            {user && <Counter min={0} max={5} />}
        </li>
    );
};
