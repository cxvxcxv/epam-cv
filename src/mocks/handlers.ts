import { ENDPOINTS } from '@/constants/api.constants';
import { LOCAL_STORAGE_KEYS } from '@/constants/app.constants';
import { INITIAL_SKILLS } from '@/constants/skills.constants';
import { TIMELINE_DATA } from '@/constants/timeline.constants';
import type { Skill } from '@/types/skill.types';
import { delay, http, HttpResponse } from 'msw';

const getStoredSkills = (): Skill[] => {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEYS.MOCK_SKILLS);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return [...INITIAL_SKILLS];
    }
  }
  localStorage.setItem(
    LOCAL_STORAGE_KEYS.MOCK_SKILLS,
    JSON.stringify(INITIAL_SKILLS),
  );
  return [...INITIAL_SKILLS];
};

export const handlers = [
  http.get(`/api/${ENDPOINTS.SKILLS}`, async () => {
    await delay(3000);
    const currentSkills = getStoredSkills();
    return HttpResponse.json(currentSkills);
  }),

  http.post<any, Omit<Skill, 'id'>>(
    `/api/${ENDPOINTS.SKILLS}`,
    async ({ request }) => {
      const currentSkills = getStoredSkills();
      const body = await request.json();
      const newSkill = {
        id: crypto.randomUUID(),
        ...body,
      };

      const updatedSkills = [...currentSkills, newSkill];

      localStorage.setItem(
        LOCAL_STORAGE_KEYS.MOCK_SKILLS,
        JSON.stringify(updatedSkills),
      );

      return HttpResponse.json(newSkill, { status: 201 });
    },
  ),

  http.get(`/api/${ENDPOINTS.EDUCATIONS}`, async () => {
    await delay(3000);
    return HttpResponse.json(TIMELINE_DATA);
  }),
];
