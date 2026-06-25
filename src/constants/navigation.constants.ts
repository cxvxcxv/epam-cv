import type { NavigationTab } from '@/types/navigation.types';
import {
  faAddressBook,
  faBriefcase,
  faCode,
  faCommentDots,
  faFolderOpen,
  faGraduationCap,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export const APP_SECTIONS = {
  ABOUT: 'about',
  EDUCATION: 'education',
  EXPERIENCE: 'experience',
  SKILLS: 'skills',
  PORTFOLIO: 'portfolio',
  CONTACTS: 'contacts',
  FEEDBACKS: 'feedbacks',
} as const;

export const NAVIGATION_TABS: NavigationTab[] = [
  { name: 'About me', icon: faUser, sectionId: APP_SECTIONS.ABOUT },
  {
    name: 'Education',
    icon: faGraduationCap,
    sectionId: APP_SECTIONS.EDUCATION,
  },
  { name: 'Experience', icon: faBriefcase, sectionId: APP_SECTIONS.EXPERIENCE },
  { name: 'Skills', icon: faCode, sectionId: APP_SECTIONS.SKILLS },
  { name: 'Portfolio', icon: faFolderOpen, sectionId: APP_SECTIONS.PORTFOLIO },
  { name: 'Contacts', icon: faAddressBook, sectionId: APP_SECTIONS.CONTACTS },
  { name: 'Feedbacks', icon: faCommentDots, sectionId: APP_SECTIONS.FEEDBACKS },
];
