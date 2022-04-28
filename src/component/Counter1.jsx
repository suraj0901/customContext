import { useCounter } from "../store/counter.js";

export default () => {
  const [count, setCount] = useCounter();
  return (
    <div className="p-4">
      <button
        className="border p-4 rounded"
        onClick={() => setCount((count) => ++count)}
      >
        {count}
      </button>
    </div>
  );
};
