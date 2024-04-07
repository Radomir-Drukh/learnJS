import {FC, useContext} from 'react';
import {UserContext} from '../../context/user';
import {MealInterface} from '../../types/meal.models';
import {Counter} from '../common/Counter/Counter';

interface MealProps {
    meal: MealInterface;
}

export const Meal: FC<MealProps> = ({meal}) => {
    const {user} = useContext(UserContext);

    return (
        <li>
            <div>{meal.name}</div>
            {user && <Counter min={0} max={5} />}
        </li>
    );
};
