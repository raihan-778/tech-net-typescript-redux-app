import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="w-1/4">
      <div className="w-1/2">
        <button
          onClick={() => dispatch(increment())}
          className="h-[30px] w-[100px] border-2 border-blue-500"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className=" h-[30px] w-100 my-2 px-2 border-2 border-blue-500"
        >
          IncrementByValue
        </button>
        <div className="text-red-300 text-center">{count}</div>
        <button
          onClick={() => dispatch(decrement())}
          className="h-[30px] w-[100px] border-cyan-800 border-2"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
