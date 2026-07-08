import { ENDPOINTS } from '@/constants/api.constants';
import { LOCAL_STORAGE_KEYS } from '@/constants/app.constants';
import { INITIAL_SKILLS } from '@/constants/skills.constants';
import type { Skill } from '@/types/skill.types';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getStoredSkills = (): Skill[] => {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEYS.MOCK_SKILLS);
  if (stored) {
    try {
      return JSON.parse(stored) as Skill[];
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

export const fetchSkills = createAsyncThunk('skills/fetchAll', async () => {
  const response = await fetch(`/api/${ENDPOINTS.SKILLS}`);
  if (!response.ok) throw new Error('failed to fetch skills');

  const serverData = (await response.json()) as Skill[];

  const localStored = localStorage.getItem(LOCAL_STORAGE_KEYS.MOCK_SKILLS);

  if (localStored) {
    try {
      return JSON.parse(localStored) as Skill[];
    } catch (e) {
      console.error('failed to fetch skills from storage:', e);
    }
  }

  localStorage.setItem(
    LOCAL_STORAGE_KEYS.MOCK_SKILLS,
    JSON.stringify(serverData),
  );
  return serverData;
});

export const addSkill = createAsyncThunk(
  'skills/add',
  async (newSkillData: Omit<Skill, 'id'>) => {
    const response = await fetch(`/api/${ENDPOINTS.SKILLS}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newSkillData),
    });
    if (!response.ok) throw new Error('failed to add skill');

    const createdSkill = (await response.json()) as Skill;

    const currentSkills = getStoredSkills();
    const updatedSkills = [...currentSkills, createdSkill];
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.MOCK_SKILLS,
      JSON.stringify(updatedSkills),
    );

    return createdSkill;
  },
);
