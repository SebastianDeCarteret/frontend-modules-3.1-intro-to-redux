import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";
// Write your code here

function Counter() {
  const [amount, setAmount] = useState<number>(10);
  const count = useSelector((state) => (state as any).counter.value);
  const dispatch = useDispatch();

  return (
    <div className="w-fit flex flex-col gap-2">
      <div className="flex justify-between">
        <div>
          <PrettyButton
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </PrettyButton>
          <PrettyButton
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </PrettyButton>
        </div>

        <span className="text-3xl text-green-800 mr-2">{count}</span>
      </div>

      <div className="rounded-md border-2 border-sky-700">
        <input
          type="number"
          className="text-xl py-2 px-2 border-r-2 border-sky-700"
          value={amount}
          onChange={(e) => setAmount(Number.parseInt(e.target.value))}
        />
        <button
          className="px-4 py-2 text-xl active:scale-95"
          aria-label="Increment by Amount"
          onClick={() => dispatch(incrementByAmount(amount))}
        >
          Increment by Amount
        </button>
      </div>
    </div>
  );
}

export { Counter };

interface Types {
  children: any;
  rest?: any;
  onClick: any;
}
const PrettyButton = ({ children, ...rest }: Types) => (
  <button
    className="rounded-md border-2 border-sky-700 px-4 py-2 mr-2 text-xl active:scale-95"
    {...rest}
  >
    {children}
  </button>
);
