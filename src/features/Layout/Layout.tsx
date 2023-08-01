import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="relative min-h-screen bg-zinc-300">
      <div className="container py-5">
        <Outlet />
      </div>
    </div>
  );
}
