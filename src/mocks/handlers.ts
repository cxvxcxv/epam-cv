import { ENDPOINTS } from '@/constants/api.constants';
import { SKILLS } from '@/constants/skills.constants';
import { TIMELINE_DATA } from '@/constants/timeline.constants';
import type { Skill } from '@/types/skill.types';
import { delay, http, HttpResponse } from 'msw';

let mockSkillsDb = [...SKILLS];

export const handlers = [
  http.get(`/api/${ENDPOINTS.SKILLS}`, async () => {
    await delay(3000);
    return HttpResponse.json(mockSkillsDb);
  }),

  http.post<any, Omit<Skill, 'id'>>(
    `/api/${ENDPOINTS.SKILLS}`,
    async ({ request }) => {
      const body = await request.json();
      const newSkill = {
        id: crypto.randomUUID(),
        ...body,
      };

      mockSkillsDb.push(newSkill);

      return HttpResponse.json(newSkill, { status: 201 });
    },
  ),

  http.get(`/api/${ENDPOINTS.EDUCATIONS}`, async () => {
    await delay(3000);
    return HttpResponse.json(TIMELINE_DATA);
  }),
];
