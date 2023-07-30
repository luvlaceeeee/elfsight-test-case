import { useState } from 'react';

export function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-3 text-4xl font-bold">React app Boilerplate</h1>
      <h2 className="mb-10 text-lg font-medium">
        Include: TypeScript, React, Vite, Tailwind, ESLint, Prettier, Husky,
        AirBnb
      </h2>

      <button
        className="rounded-xl bg-red-300 px-5 py-3 text-xl"
        onClick={() => setCount((already) => already + 1)}
      >
        count is {count}
      </button>
    </div>
  );
}
