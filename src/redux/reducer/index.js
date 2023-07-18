import { combineReducers } from "redux";

import poolSlice from "./pools.reducer";
import userSlice from "./users.reducer";

const rootReducer = combineReducers({
  pool: poolSlice,
  user: userSlice,
});

export default rootReducer;
