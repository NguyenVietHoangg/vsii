import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
//component

interface Breed {
  id: string;
  name: string;
}

interface BreedState {
  breeds: Breed[];
  loading: boolean;
  status: string;
  error: string | null;
}

const initialState: BreedState = {
  breeds: [],
  loading: false,
  error: null,
  status: 'call'
};

const fetchBreedsWithTimeout = async (timeout = 5000) => {
  const fetchPromise = axios.get('https://dogapi.dog/api/v2/breeds', {
    headers: {
      accept: 'application/json'
    }
  });

  const timeoutPromise = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error('Request timed out')), timeout)
  );

  return Promise.race([fetchPromise, timeoutPromise]);
};

export const fetchBreeds = createAsyncThunk('breeds/fetchBreeds', async () => {
  const response = await fetchBreedsWithTimeout();
  return response.data;
});

const breedsSlice = createSlice({
  name: 'breeds',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBreeds.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = 'pending';
      })
      .addCase(fetchBreeds.fulfilled, (state, action) => {
        state.loading = false;
        state.breeds = action.payload.data;
        state.status = 'fulfilled';
      })
      .addCase(fetchBreeds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch breeds';
        console.log(action.error.message);
        state.status = 'rejected';
      });
  }
});

export default breedsSlice.reducer;
