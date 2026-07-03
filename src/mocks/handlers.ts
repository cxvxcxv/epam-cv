import { ENDPOINTS } from '@/constants/api.constants';
import { SKILLS } from '@/constants/skills.constants';
import { TIMELINE_DATA } from '@/constants/timeline.constants';
import type { Skill } from '@/types/skill.types';
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(`/api/${ENDPOINTS.SKILLS}`, () => {
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

  http.get(`/api/${ENDPOINTS.EDUCATIONS}`, () => {
    return HttpResponse.json(TIMELINE_DATA);
  }),
];
