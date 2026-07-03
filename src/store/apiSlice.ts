import { ENDPOINTS } from '@/constants/api.constants';
import type { Skill } from '@/types/skill.types';
import type { Education } from '@/types/timeline.types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Skills', 'Educations'],
  endpoints: builder => ({
    getSkills: builder.query<Skill[], void>({
      query: () => `/${ENDPOINTS.SKILLS}`,
      providesTags: ['Skills'],
    }),

    addSkill: builder.mutation<Skill, Partial<Skill>>({
      query: newSkill => ({
        url: `/${ENDPOINTS.SKILLS}`,
        method: 'POST',
        body: newSkill,
      }),
      invalidatesTags: ['Skills'],
    }),

    getEducations: builder.query<Education[], void>({
      query: () => `/${ENDPOINTS.EDUCATIONS}`,
      providesTags: ['Educations'],
    }),
  }),
});

export const { useGetSkillsQuery, useAddSkillMutation, useGetEducationsQuery } =
  appApi;
