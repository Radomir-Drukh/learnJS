import classNames from 'classnames';
import {useAppSelector} from '../../redux/hooks';
import {EmptyList} from '../EmptyList/EmptyList';
import {Meal} from '../Meal/Meal';
import styles from './Menu.module.scss';

interface MenuProps {
    dishesIds: string[];
}

export const Menu = ({dishesIds}: MenuProps) => {
    const menuItems = useAppSelector((store) => dishesIds.map((id) => store.dishes.entities[id]));

    return (
        <div className={classNames(styles.root)}>
            <h3>Меню</h3>
            {menuItems?.length ? (
                <ul className={classNames(styles.menuList)}>
                    {menuItems.map((item, index) => (
                        <Meal key={item.id} meal={item} />
                    ))}
                </ul>
            ) : (
                <EmptyList entity="меню" />
            )}
        </div>
    );
};
