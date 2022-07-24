// redux
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const setMiseDB = createAsyncThunk('setMise', async () => {
  try {
    const response = await (await fetch('http://localhost:5000/response')).json();
    const miseData = response.body.items;
    return { miseData };
  } catch (error) {
    console.log(error);
  }
});

const miseSlice = createSlice({
  name: 'mise',
  initialState: {
    list: [],
  },
  reducers: {},
  extraReducers: {
    [setMiseDB.fulfilled]: (state, { payload }) => {
      state.list = payload.miseData;
    },
  },
});

export const miseActions = miseSlice.actions;
export default miseSlice.reducer;
