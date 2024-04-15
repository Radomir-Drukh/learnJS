import classNames from 'classnames';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {EmptyList} from '../EmptyList/EmptyList';
import {Meal} from '../Meal/Meal';
import styles from './Menu.module.scss';
import {useEffect} from 'react';
import {getDish} from '../../redux/slices/entities/dishes/dishes.thunks';

interface MenuProps {
    dishesIds: string[];
}

export const Menu = ({dishesIds}: MenuProps) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dishesIds.forEach((dishId) => dispatch(getDish(dishId)));
    }, [dishesIds]);

    return (
        <div className={classNames(styles.root)}>
            <h3>Меню</h3>
            {dishesIds?.length ? (
                <ul className={classNames(styles.menuList)}>
                    {dishesIds.map((dishId, index) => (
                        <Meal key={dishId + index} dishId={dishId} />
                    ))}
                </ul>
            ) : (
                <EmptyList entity="меню" />
            )}
        </div>
    );
};
