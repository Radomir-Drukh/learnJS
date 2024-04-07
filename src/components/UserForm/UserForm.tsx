import {useContext, useState} from 'react';
import {UserContext} from '../../context/user';
import {UserButtons} from '../UserButtons/UserButtons';
import styles from './UserForm.module.scss';

export const UserForm = () => {
    const [userName, setUserName] = useState<string>('');
    const {user, login, logout} = useContext(UserContext);

    const logoutCallback = () => {
        setUserName('');
        logout();
    };

    return (
        <div className={styles.container}>
            {!user ? (
                <input type="text" onChange={(event) => setUserName(event.target.value)} />
            ) : (
                userName
            )}
            <UserButtons login={() => login(userName)} logout={logoutCallback} />
        </div>
    );
};
