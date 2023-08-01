import { InputHTMLAttributes } from 'react';
import { cls } from '@/shared/helpers';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = '', type, ...props }: InputProps) {
  return (
    <input
      type={type}
      className={cls([
        'flex h-10 w-full rounded-2xl border border-zinc-300 px-3 py-2 text-sm outline-none',
        className,
      ])}
      {...props}
    />
  );
}
