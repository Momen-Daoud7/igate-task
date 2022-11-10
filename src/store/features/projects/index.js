import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import projects from "../../../apis/projects";

// Get all projects from projects api
export const getAllProjects = createAsyncThunk(
  "projects/getAll",
  async (name = "") => {
    const res = await projects.get(`/projects?name=${name}`);
    return res.data;
  }
);

export const getProject = createAsyncThunk("projects/get", async (id) => {
  const res = await projects.get(`/projects/${id}`);
  return res.data;
});

export const createProject = createAsyncThunk(
  "projects/create",
  async (data) => {
    const res = await projects.post(`/projects`, data);
    return res.data;
  }
);

export const updateProject = createAsyncThunk(
  "projects/update",
  async (id, data) => {
    const res = await projects.put(`/projects/${id}`, data);
    return res.data;
  }
);

export const deleteProject = createAsyncThunk("projects/delete", async (id) => {
  const res = await projects.delete(`/projects/${id}`);
  return res;
});

const projectsSlice = createSlice({
  name: "projects",
  initialState: { projects: [], searchName: "" },
  reducers: {
    setSearchName: (state, action) => {
      state.searchName = action.payload;
    },
  },
  extraReducers: {
    [getAllProjects.fulfilled]: (state, action) => {
      state.projects = [...action.payload];
    },

    [getProject.fulfilled]: (state, action) => {
      state.projects = [action.payload];
    },

    [createProject.fulfilled]: (state, action) => {
      state.projects = [...state.projects, action.payload];
    },

    [updateProject.fulfilled]: (state, action) => {
      const index = state.projects.findIndex(
        (project) => project.id === action.payload.id
      );
      state.projects[index] = action.payload;
    },

    [deleteProject.fulfilled]: (state, action) => {
      const index = state.projects.findIndex(
        ({ id }) => id === action.payload.id
      );
      state.projects.splice(index, 1);
    },
  },
});

export const actions = projectsSlice.actions;

export default projectsSlice.reducer;
