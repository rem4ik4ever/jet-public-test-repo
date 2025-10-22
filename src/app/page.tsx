"use client";

import { useState } from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-white text-gray-900">
      <h1 className="text-4xl font-semibold">Hello World</h1>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        className="h-12 w-12 rounded-full bg-gray-200 text-2xl font-medium text-gray-900 transition hover:bg-gray-300"
        onClick={() => setCount((value) => value - 1)}
      >
        -
      </button>
      <span className="min-w-[3rem] text-center text-3xl font-semibold">{count}</span>
      <button
        type="button"
        className="h-12 w-12 rounded-full bg-gray-200 text-2xl font-medium text-gray-900 transition hover:bg-gray-300"
        onClick={() => setCount((value) => value + 1)}
      >
        +
      </button>
    </div>
  );
}
