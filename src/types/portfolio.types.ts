export type ProjectScope = 'frontend' | 'fullstack';

export interface Project {
  title: string;
  description: string;
  source: string;
  photo: string;
  scope: ProjectScope;
}

export interface FilterButton {
  label: string;
  scope: ProjectScope | null;
}
