import { configureStore } from "@reduxjs/toolkit";
import auth from "./features/auth";
import projects from "./features/projects";

const store = configureStore({
  reducer: {
    auth,
    projects,
  },
});

export default store;
