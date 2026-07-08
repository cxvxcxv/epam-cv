import type { Education } from '@/types/timeline.types';
import type { SerializedError } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { fetchEducation } from './thunk';

export interface EducationState {
  entities: Education[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: FetchBaseQueryError | SerializedError | undefined;
}

const initialState: EducationState = {
  entities: [],
  loading: 'idle',
  error: undefined,
};

export const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchEducation.pending, state => {
        state.loading = 'pending';
        state.error = undefined;
      })
      .addCase(fetchEducation.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.entities = action.payload;
      })
      .addCase(fetchEducation.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error;
      });
  },
});

export default educationSlice.reducer;
