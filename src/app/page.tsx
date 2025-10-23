"use client";

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex gap-4 items-center">
      <button
        onClick={() => setCount(count - 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        -
      </button>
      <span className="text-2xl font-bold">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        +
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="text-6xl font-bold">Hello World</div>
        <Counter />
      </main>
    </div>
  );
}
