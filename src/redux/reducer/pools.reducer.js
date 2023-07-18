import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPools = createAsyncThunk("pools/fetchPools", async () => {
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

const poolSlice = createSlice({
  name: "pools",
  initialState: {
    data: [],
    loading: false,
    error: ''
  },
  reducers: {
    get: (state, action) => {
      console.log("state:", state, "action:", action);
      return state.data.filter((el) => el.status === action.payload);
    },
    participate: (state, action) => {
      console.log()
      state.data.forEach((el) => {
        if (action.payload.id === el.id) {
          el.ticketValue += parseInt(action.payload.amount);
          if (
            el.participators.length > 0 &&
            el.participators.includes(action.payload.address)
          ) {
            console.log("Already participated");
          } else {
            console.log("New participant");
            el.participators.push(action.payload.address);
          }
        }
      });
    },
    // participate: (state, action) => {
    //   state.forEach((el) => {
    //     if (action.payload.id === el.id) {
    //       el.ticketValue += parseInt(action.payload.amount);
    //       if (!el.participators.includes(action.payload.address)) {
    //         el.participators.push(action.payload.address);
    //       }
    //     }
    //   });
    // },
    // increaseValue: (state, action) => {
    //   let dt = state.filter(el => el.id === action.payload.id)
    //   dt.ticketValue += action.payload.amount
    //   [state, ...dt]
    // }
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
      });
  },
});

export const { register, get, participate } = poolSlice.actions;

export default poolSlice.reducer;
