import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="flex flex-col items-center gap-5">
      <p className="text-5xl font-bold text-zinc-800">404</p>
      <p className="text-3xl font-semibold text-zinc-800">
        Страница не найдена
      </p>
      <Link to="/">Назад</Link>
    </div>
  );
}
