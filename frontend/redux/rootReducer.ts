import { combineReducers } from "@reduxjs/toolkit";
import notebooksSlice from "./notebooks/notebooksSlice";
import notesReduce from "./notes/notesSlice";
export const rootReducer = combineReducers({
  notes: notesReduce,
  notebooks: notebooksSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
