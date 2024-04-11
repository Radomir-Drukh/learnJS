import classNames from 'classnames';
import {useAppSelector} from '../../redux/hooks';
import {EmptyList} from '../EmptyList/EmptyList';
import {Meal} from '../Meal/Meal';
import styles from './Menu.module.scss';

interface MenuProps {
    dishesIds: string[];
}

export const Menu = ({dishesIds}: MenuProps) => {
    return (
        <div className={classNames(styles.root)}>
            <h3>Меню</h3>
            {dishesIds?.length ? (
                <ul className={classNames(styles.menuList)}>
                    {dishesIds.map((item, index) => (
                        <Meal key={item + index} mealID={item} />
                    ))}
                </ul>
            ) : (
                <EmptyList entity="меню" />
            )}
        </div>
    );
};
