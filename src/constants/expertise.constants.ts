import type { ExpertiseDatum } from '@/types/expertise.types';

export const EXPERTISE_DATA: ExpertiseDatum[] = [
  {
    date: '2022',
    info: {
      company: '1st Oskemen Hackathon',
      job: 'Front-end developer',
      description:
        "3rd Place. Built a weather web application with geolocation features, providing real-time forecasts tailored to the user's location.",
    },
  },
  {
    date: '2022',
    info: {
      company: '2nd Oskemen Hackathon',
      job: 'Fullstack developer',
      description:
        '2nd Place. Developed a collaborative web application for task management (to-do app) within 48 hours, focusing on usability and team-based workflows.',
    },
  },
  {
    date: '2023',
    info: {
      company: 'Semey Hackathon',
      job: 'Front-end developer',
      description:
        'Participated in a 48-hour coding challenge focused on developing a mobile travel application to enhance trip planning and user experience.',
    },
  },
  {
    date: '2026',
    info: {
      company: 'Cushpen Group',
      job: 'Front-end developer',
      description:
        'Completed dual education, combining theoretical academic studies with intensive hands-on training to master modern web technologies and agile software workflows.',
    },
  },
  {
    date: '2026',
    info: {
      company: 'Cushpen Group',
      job: 'Front-end developer',
      description:
        'Contributed directly to the production environment by participating in the development, testing, and optimization of enterprise components for their medical information systems and software solutions.',
    },
  },
] as const;
