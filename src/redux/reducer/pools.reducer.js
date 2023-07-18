import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPools = createAsyncThunk("pools/fetchPools", async (props) => {
  try {
    const response = await axios.get("http://localhost:3002/pools"); 
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const postPool = createAsyncThunk("pools/postPool", async (poolData) => {
  try {
    const response = await axios.post("http://localhost:3002/pools", poolData);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const updatePool = createAsyncThunk(
  "pools/updatePool",
  async ({ poolId, poolData }) => {
    try {
      const response = await axios.patch(`http://localhost:3002/pools/${poolId}`, poolData); // Replace with your actual API endpoint
      return response.data;
    } catch (error) {
      throw new Error("Failed to update the pool.");
    }
  }
);


const poolSlice = createSlice({
  name: "pools",
  initialState: {
    data: [],
    loading: false,
    error: ''
  },
  reducers: {
    get: (state, action) => {
      return state.data.filter((el) => el.status === action.payload);
    },
  },
   extraReducers: (builder) => {
    builder
       .addCase(fetchPools.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchPools.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPools.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postPool.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(postPool.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(postPool.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updatePool.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(updatePool.fulfilled, (state, action) => {
        state.loading = false;
        const updatedPool = action.payload;
        const existingPoolIndex = Array.from(state.data).findIndex(
          (pool) => pool._id === updatedPool._id
        );
        if (existingPoolIndex !== -1) {
          state.data[existingPoolIndex] = updatedPool;
        }
      })
      .addCase(updatePool.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { register, get, participate } = poolSlice.actions;

export default poolSlice.reducer;
