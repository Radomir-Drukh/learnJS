import {Button} from '../Button/Button';

interface CounterProps {
    min: number;
    max: number;
    amount: number;
    increment: () => void;
    decrement: () => void;
}

export const Counter = ({min, max, amount, increment, decrement}: CounterProps) => {
    return (
        <div>
            <Button onClick={decrement} disabled={amount === min}>
                -
            </Button>
            <span> {amount} </span>
            <Button onClick={increment} disabled={amount === max}>
                +
            </Button>
        </div>
    );
};
