import { cn } from '@/utils/cn';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconProp;
}

export const Button = ({ icon, children, className, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={cn(
        'bg-foreground text-background hover:bg-primary disabled:hover:bg-foreground flex cursor-pointer items-center gap-2 rounded-md px-5 py-2 disabled:cursor-not-allowed disabled:opacity-30',
        className,
      )}
    >
      {icon ? <FontAwesomeIcon icon={icon} /> : null}
      {children}
    </button>
  );
};
