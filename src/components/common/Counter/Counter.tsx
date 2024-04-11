import {useCount} from '../../../hooks/counter';
import {Button} from '../Button/Button';

interface CounterProps {
    min: number;
    max: number;
}

export const Counter = ({min, max}: CounterProps) => {
    const {amount, increment, decrement} = useCount();

    const increase = () => {
        if (amount === max) {
            return;
        }

        increment();
    };

    const decrease = () => {
        if (amount === min) {
            return;
        }

        decrement();
    };

    return (
        <div>
            <Button onClick={decrease}>-</Button>
            <span> {amount} </span>
            <Button onClick={increase}>+</Button>
        </div>
    );
};
