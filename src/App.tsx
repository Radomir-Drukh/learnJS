import {useMemo} from 'react';
import {Layout} from './components/Layout/Layout';
import {Restaurants} from './components/Restaurants/Restaurants';
import {ThemeContext} from './context/theme';
import {UserContext} from './context/user';
import {useTheme} from './hooks/theme';
import {useUserLoginLogout} from './hooks/user';

export const App = () => {
    const {theme, setTheme} = useTheme();
    const {user, login, logout} = useUserLoginLogout();

    const themeContextMemo = useMemo(() => ({theme, setTheme}), [theme, setTheme]);
    const userContextMemo = useMemo(() => ({user, login, logout}), [user, login, logout]);

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
