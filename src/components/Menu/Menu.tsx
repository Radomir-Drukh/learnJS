import {FC} from "react";
import {Meal} from "../Meal/Meal";
import {EmptyList} from "../EmptyList/EmptyList";
import {MealInterface} from "../../types/meal.models";
import styles from "./Menu.module.scss";
import classNames from "classnames";

interface MenuProps {
  menu: MealInterface[];
}

export const Menu: FC<MenuProps> = ({menu}) => (
  <div className={classNames(styles.root)}>
    <h3>Меню</h3>
    {menu?.length ? (
      <ul className={classNames(styles.menuList)}>
        {menu.map((item, index) => (
          <Meal key={index} meal={item} />
        ))}
      </ul>
    ) : (
      <EmptyList entity="меню" />
    )}
  </div>
);
