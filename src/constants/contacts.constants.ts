import type { ContactLink } from '@/types/contact.types';
import { faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export const CONTACT_LINKS: ContactLink[] = [
  { contact: '8 771 350 2500', href: 'tel:+77713502500', icon: faPhone },
  {
    contact: 'alisher.askar.work@gmail.com',
    href: 'mailto:alisher.askar.work@gmail.com',
    icon: faEnvelope,
  },
  {
    contact: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alisher-askar',
    username: 'https://www.linkedin.com',
    icon: faLinkedin,
  },
  {
    contact: 'Telegram',
    username: '@cxv495',
    href: 'https://t.me/cxv495',
    icon: faTelegram,
  },
];
