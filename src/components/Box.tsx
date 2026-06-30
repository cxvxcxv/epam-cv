import { cn } from '@/utils/cn';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

interface BoxProps extends ComponentPropsWithoutRef<'section'> {
  title: string;
  children: ReactNode;
}

export const Box = ({ title, children, className, ...props }: BoxProps) => {
  return (
    <section className={cn('mb-12', className)} {...props}>
      <h2 className="text-primary mb-10 text-2xl font-bold">{title}</h2>
      <div>{children}</div>
    </section>
  );
};
