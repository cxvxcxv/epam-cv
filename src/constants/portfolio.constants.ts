import type { FilterButton, Project } from '@/types/portfolio.types';

export const FILTER_BUTTONS: FilterButton[] = [
  {
    label: 'All',
    scope: null,
  },
  {
    label: 'Frontend',
    scope: 'frontend',
  },
  {
    label: 'Fullstack',
    scope: 'fullstack',
  },
];

export const PORTFOLIO_DATA: Project[] = [
  {
    title: 'Vanilla Music Player',
    description:
      'Music player built with pure HTML, CSS, and JavaScript using the Audio API.',
    source: 'https://github.com/cxvxcxv/vanilla-music-player',
    photo:
      'https://github.com/user-attachments/assets/281e906b-a463-4570-8d85-23b670521b1b',
    scope: 'frontend',
  },
  {
    title: 'Budget Board',
    description:
      'Client-side budgeting application with categorized expenses and global state management using Redux Toolkit.',
    source: 'https://github.com/cxvxcxv/budget-board',
    photo:
      'https://github.com/user-attachments/assets/2ae9a2ad-2d77-414b-963c-e74843babf61',
    scope: 'frontend',
  },
  {
    title: 'AceIt',
    description:
      'Interactive quiz platform with dynamic UI flow, real-time score tracking, and responsive design.',
    source: 'https://github.com/cxvxcxv/AceIt',
    photo:
      'https://github.com/user-attachments/assets/30d2b208-3cc2-4266-840d-c4b9ecf9f21c',
    scope: 'fullstack',
  },
  {
    title: 'OrganizeIt',
    description: 'A lightweight web application for managing tasks everyday ',
    source: 'https://github.com/cxvxcxv/OrganizeIt',
    photo:
      'https://github.com/user-attachments/assets/293ed7dd-16be-46fd-b40a-b8f065e36ce1',
    scope: 'fullstack',
  },
] as const;
