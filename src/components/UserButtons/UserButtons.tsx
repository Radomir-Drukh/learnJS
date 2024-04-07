import {FC, useContext} from 'react';
import {Button} from '../common/Button/Button';
import {UserContext} from '../../context/user';

interface UserButtonsProps {
    login: () => void;
    logout: () => void;
}

export const UserButtons: FC<UserButtonsProps> = ({login, logout}) => {
    const {user} = useContext(UserContext);
    return (
        <div>
            {user ? (
                <Button onClick={logout}>Logout</Button>
            ) : (
                <Button onClick={login}>Login</Button>
            )}
        </div>
    );
};
