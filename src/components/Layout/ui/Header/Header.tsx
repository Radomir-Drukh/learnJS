import {useContext} from 'react';
import {Button} from '../../../common/Button/Button';
import {ThemeContext} from '../../../../context/theme';
import styles from './Header.module.scss';
import {UserForm} from '../../../UserForm/UserForm';

export const Header = () => {
    const {setTheme} = useContext(ThemeContext);

    return (
        <div className={styles.container}>
            <UserForm />
            <Button defaultOnly={true} onClick={setTheme}>
                Сменить тему
            </Button>
        </div>
    );
};
