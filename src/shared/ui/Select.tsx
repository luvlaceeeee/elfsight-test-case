import { SelectHTMLAttributes } from 'react';
import { cls } from '@/shared/helpers';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
}

export function Select(props: SelectProps) {
  const { className = '', children, placeholder, ...rest } = props;

  return (
    <select
      className={cls([
        'flex h-10 w-full rounded-2xl border border-zinc-300 px-3 py-2 text-sm outline-none',
        className,
      ])}
      {...rest}
    >
      <option value="" hidden>
        {placeholder}
      </option>
      {children}
    </select>
  );
}
