import { type RootState } from './index';

export const selectSkills = (state: RootState) => state.skills;
export const selectEducations = (state: RootState) => state.education;
