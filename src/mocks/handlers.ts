import { ENDPOINTS } from '@/constants/api.constants';
import { SKILLS } from '@/constants/skills.constants';
import { TIMELINE_DATA } from '@/constants/timeline.constants';
import type { Skill } from '@/types/skill.types';
import { delay, http, HttpResponse } from 'msw';

export const handlers = [
  http.get(`/api/${ENDPOINTS.SKILLS}`, async () => {
    await delay(3000);
    return HttpResponse.json(SKILLS);
  }),

  http.post<any, Partial<Skill>>(
    `/api/${ENDPOINTS.SKILLS}`,
    async ({ request }) => {
      const newSkill = await request.json();

      return HttpResponse.json(
        { message: 'Skill created successfully!', data: newSkill },
        { status: 201 },
      );
    },
  ),

  http.get(`/api/${ENDPOINTS.EDUCATIONS}`, async () => {
    await delay(3000);
    return HttpResponse.json(TIMELINE_DATA);
  }),
];
