import {useEffect, useMemo} from 'react';
import {Layout} from './components/Layout/Layout';
import {Restaurants} from './components/Restaurants/Restaurants';
import {ThemeContext} from './context/theme';
import {UserContext} from './context/user';
import {useTheme} from './hooks/theme';
import {useUserLoginLogout} from './hooks/user';
import {useAppDispatch} from './redux/hooks';
import {getRestaurants} from './redux/slices/entities/restaurants/restaurants.thunks';
import {getUsers} from './redux/slices/entities/users/users.thunk';

export const App = () => {
    const {theme, setTheme} = useTheme();
    const {user, login, logout} = useUserLoginLogout();

    const themeContextMemo = useMemo(() => ({theme, setTheme}), [theme, setTheme]);
    const userContextMemo = useMemo(() => ({user, login, logout}), [user, login, logout]);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getRestaurants());
        dispatch(getUsers());
    }, []);

    return (
        <UserContext.Provider value={userContextMemo}>
            <ThemeContext.Provider value={themeContextMemo}>
                <Layout>
                    <Restaurants />
                </Layout>
            </ThemeContext.Provider>
        </UserContext.Provider>
    );
};
