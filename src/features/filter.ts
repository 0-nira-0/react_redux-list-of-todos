import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Status } from '../types/Status';

const initialState: { query: string; status: Status } = {
  query: '',
  status: 'all',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: ({ query, status }, { payload }: PayloadAction<Status>) => ({
      query,
      status: payload,
    }),
    setQuery: ({ query, status }, { payload }: PayloadAction<string>) => ({
      query: payload,
      status,
    }),
  },
});
