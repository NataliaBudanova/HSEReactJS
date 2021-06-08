import { combineReducers } from "redux";
import { themeReducer } from "./Theme";
import { projectsReducer } from "./Projects";
import { tasksReducer } from "./Tasks";

export const rootReducer = combineReducers({
  theme: themeReducer,
  projectsById: projectsReducer,
  tasksById: tasksReducer
})