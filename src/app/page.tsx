"use client";

import { useState } from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100">
      <h1 className="text-5xl font-bold">Hello World</h1>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4 text-2xl">
      <button
        type="button"
        className="rounded-md bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 px-4 py-2 text-xl"
        onClick={() => setCount((value) => value - 1)}
      >
        -
      </button>
      <span className="font-semibold w-16 text-center">{count}</span>
      <button
        type="button"
        className="rounded-md bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 px-4 py-2 text-xl"
        onClick={() => setCount((value) => value + 1)}
      >
        +
      </button>
    </div>
  );
}
