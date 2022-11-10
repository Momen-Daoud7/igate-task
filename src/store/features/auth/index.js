import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import projects from "../../../apis/projects";

export const login = createAsyncThunk("auth/login", async (data) => {
  const res = await projects.post("/login", data);
  console.log(res.data);
  // store token in local storage
  localStorage.setItem("user", JSON.stringify(res.data));

  return res.data;
});

// init userToken value from localStorage
const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : { name: null, token: null };

const authSlice = createSlice({
  name: "auth",
  initialState: user,
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {
      state.user = { ...payload.user, userToken: payload.token };
    },
  },
});

export default authSlice.reducer;
