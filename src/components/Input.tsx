import { cn } from '@/utils/cn';
import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  wrapperClassName?: string;
}

export const Input = ({
  label,
  id,
  name,
  error,
  className,
  wrapperClassName,
  ...props
}: InputProps) => {
  return (
    <div className={wrapperClassName}>
      <label htmlFor={id || name} className="mr-2">
        {label}
      </label>
      <input
        id={id || name}
        className={cn(
          'focus:border-primary disabled:border-dimmed disabled:bg-dimmed/10 rounded-md border px-4 py-2 outline-none disabled:cursor-not-allowed',
          { 'border-danger': error },
        )}
        {...props}
      />
      <p className="text-danger mt-1 text-sm">{error}</p>
    </div>
  );
};
