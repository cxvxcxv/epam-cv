import {
  FILTER_BUTTONS,
  PORTFOLIO_DATA,
} from '@/constants/portfolio.constants';
import type { ProjectScope } from '@/types/portfolio.types';
import { cn } from '@/utils/cn';
import { filterProjects } from '@/utils/filterProjects';
import { useState } from 'react';
import { PortfolioInfo } from './PortfolioInfo';

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
      <div className="grid gap-8 lg:grid-cols-2">
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
            <PortfolioInfo project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};
