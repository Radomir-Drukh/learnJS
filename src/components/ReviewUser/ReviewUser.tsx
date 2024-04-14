import {useAppSelector} from '../../redux/hooks';

interface ReviewUserProps {
    userId: string;
}

export const ReviewUser = ({userId}: ReviewUserProps) => {
    const user = useAppSelector((store) => store.users.entities[userId]);

    if (!user) {
        return null;
    }

    return <span>{user.name}</span>;
};
