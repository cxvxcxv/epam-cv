import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ContactLink {
  contact: string;
  username?: string;
  href: string;
  icon: IconDefinition;
}
