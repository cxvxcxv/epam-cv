import type { Project, ProjectScope } from '@/types/portfolio.types';

export const filterProjects = (
  projects: Project[],
  targetScope: ProjectScope | null,
) => {
  return targetScope
    ? projects.filter(project => project.scope === targetScope)
    : projects;
};
