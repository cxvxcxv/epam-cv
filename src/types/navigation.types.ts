import type { APP_SECTIONS } from '@/constants/navigation.constants';
import { type IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type AppSectionId = (typeof APP_SECTIONS)[keyof typeof APP_SECTIONS];

export interface NavigationTab {
  name: string;
  icon: IconDefinition;
  sectionId: AppSectionId;
}
