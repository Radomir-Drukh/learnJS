import {useAppSelector} from '../../redux/hooks';
import {Tab} from '../common/Tab/Tab';

interface RestaurantsTabsProps {
    currentId: string | undefined;
    onTabClick: (index: string) => void;
}

export const RestaurantsTabs = ({onTabClick, currentId}: RestaurantsTabsProps) => {
    const restaurantsIds = useAppSelector((state) => state.restaurants.ids);

    return (
        <div>
            {restaurantsIds.map((restaurantId) => (
                <Tab
                    key={restaurantId}
                    id={restaurantId}
                    isActive={currentId === restaurantId}
                    onClick={() => onTabClick(restaurantId)}
                />
            ))}
        </div>
    );
};
