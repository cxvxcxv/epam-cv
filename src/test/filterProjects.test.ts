import type { Project } from '@/types/portfolio.types';
import { filterProjects } from '@/utils/filterProjects';
import { describe, expect, test } from 'vitest';

const mockProjects: Project[] = [
  {
    title: 'test title',
    description: 'test description',
    source: 'somesite.com',
    photo: 'somesite.com',
    scope: 'frontend',
  },
];

describe('filterProjects utility', () => {
  test('returns an empty array if no projects match criteria', () => {
    const result = filterProjects(mockProjects, 'fullstack');

    expect(result).toEqual([]);
  });

  test('returns all projects unfiltered when targetScope is null', () => {
    const result = filterProjects(mockProjects, null);
    expect(result).toEqual(mockProjects);
  });
});
