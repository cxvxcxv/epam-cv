import type { Skill } from '@/types/skill.types';

export const SKILLS: Skill[] = [
  {
    id: 'c4273cd6-0f66-4562-8003-d9cb4db493c6',
    name: 'HTML5 & CSS3',
    range: 85,
  },
  {
    id: '24fadefc-3099-4500-879c-ab93eb10f3c1',
    name: 'JavaScript (ES6+)',
    range: 75,
  },
  { id: '92241ec1-79f1-4334-b25b-7052a7198243', name: 'React', range: 70 },
  { id: '3cf8fdfc-40e0-4e42-bea4-e89b85b07133', name: 'Next.js', range: 60 },
  {
    id: '7e54333e-6b54-4bee-9f60-25d6ac6f5c48',
    name: 'TailwindCSS',
    range: 80,
  },
] as const;

export const SKILL_RANKS = ['Beginner', 'Proficient', 'Expert', 'Master'];
