import { ButtonHTMLAttributes } from 'react';
import { cls } from '@/shared/helpers';

const buttonVariants = {
  base: 'relative inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    default: 'bg-orange-400 hover:bg-orange-300/80',
    outline: 'border border-orange-400 hover:bg-orange-300',
    destructive: 'bg-red-400 hover:bg-red-300/80',
  },
  size: {
    default: 'h-10 py-2 px-4',
    icon: 'h-7 px-1',
  },
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'destructive';
  size?: 'default' | 'icon';
};

export function Button(props: ButtonProps) {
  const {
    className = '',
    variant = 'default',
    size = 'default',
    type = 'button',
    children,
    ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      type={type}
      className={cls([
        buttonVariants.base,
        buttonVariants.variants[variant],
        buttonVariants.size[size],
        className,
      ])}
    >
      {children}
    </button>
  );
}
