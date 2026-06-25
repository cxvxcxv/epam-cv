import type { ReactNode } from 'react';

interface BoxProps {
  title: string;
  children: ReactNode;
}

export const Box = ({ title, children }: BoxProps) => {
  return (
    <section className="mb-12">
      <h2 className="text-primary mb-10 text-2xl font-bold">{title}</h2>
      <div>{children}</div>
    </section>
  );
};
