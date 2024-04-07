import {FC, useContext} from "react";
import {MealInterface} from "../../types/meal.models";
import {Counter} from "../common/Counter/Counter";
import {useCount} from "../../hooks/counter";
import {useUserLoginLogout} from "../../hooks/user";
import {UserContext} from "../../context/user";

interface MealProps {
  meal: MealInterface;
}

export const Meal: FC<MealProps> = ({meal}) => {
  const {user} = useContext(UserContext);
  return (
    <li>
      <div>{meal.name}</div>
      {user && <Counter {...useCount()} min={0} max={5} />}
    </li>
  );
};
