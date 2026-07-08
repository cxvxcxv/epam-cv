import type { Skill } from '@/types/skill.types';
import type { SerializedError } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { addSkill, fetchSkills } from './thunk';

export interface SkillState {
  entities: Skill[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: FetchBaseQueryError | SerializedError | undefined;
}

const initialState: SkillState = {
  entities: [],
  loading: 'idle',
  error: undefined,
};

export const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchSkills.pending, state => {
        state.loading = 'pending';
        state.error = undefined;
      })
      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.entities = action.payload;
      })
      .addCase(fetchSkills.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error;
      })
      .addCase(addSkill.fulfilled, (state, action) => {
        state.entities.push(action.payload);
      });
  },
});

export default skillsSlice.reducer;
