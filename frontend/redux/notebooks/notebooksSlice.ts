import { NotebooksState } from "./types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: NotebooksState = {
  notebooks: [
    {
      id: 1,
      name: "Notebook1",
      createdAt: "3:50 PM",
    },
    {
      id: 2,
      name: "Notebook2",
      createdAt: "8:50 PM",
    },
  ],
  currentNotebook: null,
};

const notebooksSlice = createSlice({
  name: "notebooks",
  initialState,
  reducers: {
    addNotebook: (state, action) => state,
    setCurrentNotebook: (state, action) => {
      const notebookId = action.payload;
      if (
        notebookId === null ||
        state.notebooks.find((n) => n.id === notebookId)
      ) {
        state.currentNotebook = notebookId;
      }
    },
  },
});

export const { addNotebook, setCurrentNotebook } = notebooksSlice.actions;
export default notebooksSlice.reducer;
