import { useState } from "react";
import { increment } from "@tejaskumar/counter";

const Page = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(increment(count))}>Increment</button>
    </div>
  );
};

export default Page;
