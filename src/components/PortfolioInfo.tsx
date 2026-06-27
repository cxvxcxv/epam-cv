import type { Project } from '@/types/portfolio.types';

interface PortfolioInfoProps {
  project: Project;
}

export const PortfolioInfo = ({ project }: PortfolioInfoProps) => {
  return (
    <div className="absolute right-0 bottom-0 left-0 flex h-full translate-y-full flex-col gap-2 bg-white/80 p-4 backdrop-blur-sm transition-transform group-hover:translate-y-0">
      <p className="font-bold">{project.title}</p>
      <p>{project.description}</p>
      <a
        href={project.source}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 underline"
      >
        View source
      </a>
    </div>
  );
};
