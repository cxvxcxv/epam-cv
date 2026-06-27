import {
  FILTER_BUTTONS,
  PORTFOLIO_DATA,
} from '@/constants/portfolio.constants';
import type { ProjectScope } from '@/types/portfolio.types';
import { cn } from '@/utils/cn';
import { filterProjects } from '@/utils/filterProjects';
import { useState } from 'react';

export const Portfolio = () => {
  const [targetScope, setTargetScope] = useState<ProjectScope | null>(null);

  const filteredProjects = filterProjects(PORTFOLIO_DATA, targetScope);
  return (
    <div>
      <div className="flex gap-2">
        {FILTER_BUTTONS.map(btn => (
          <button
            key={btn.label}
            onClick={() => setTargetScope(btn.scope)}
            className={cn('text-lg', {
              'text-primary font-bold': targetScope === btn.scope,
            })}
          >
            {btn.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-8">
        {filteredProjects.map(project => (
          <div
            key={`${project.title}-${targetScope}`}
            className="group animate-fadein relative aspect-video w-full overflow-hidden"
          >
            <img
              src={project.photo}
              alt={`${project.title} screenshot`}
              className="h-full w-full object-cover"
            />
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
          </div>
        ))}
      </div>
    </div>
  );
};
