import {useContext} from 'react';
import {useDispatch} from 'react-redux';
import {UserContext} from '../../context/user';
import {useAppSelector} from '../../redux/hooks';
import {decrementProduct, incrementProduct, selectProductAmount} from '../../redux/slices/ui/cart';
import {Counter} from '../common/Counter/Counter';

interface MealProps {
    dishId: string;
}

export const Meal = ({dishId}: MealProps) => {
    const {user} = useContext(UserContext);

    const dish = useAppSelector((store) => store.dishes.entities[dishId]);

    const dispatch = useDispatch();
    const amount = useAppSelector((state) => selectProductAmount(state, dishId));
    const increment = () => dispatch(incrementProduct(dishId));
    const decrement = () => dispatch(decrementProduct(dishId));

    if (!dish) {
        return null;
    }

    return (
        <li>
            <div>{dish.name}</div>
            {user && (
                <Counter
                    min={0}
                    max={5}
                    amount={amount}
                    increment={increment}
                    decrement={decrement}
                />
            )}
        </li>
    );
};
