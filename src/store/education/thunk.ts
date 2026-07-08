import { ENDPOINTS } from '@/constants/api.constants';
import type { Education } from '@/types/timeline.types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchEducation = createAsyncThunk(
  'education/fetchAll',
  async () => {
    const response = await fetch(`/api/${ENDPOINTS.EDUCATIONS}`);
    if (!response.ok) throw new Error('failed to fetch educations');
    return (await response.json()) as Education[];
  },
);
