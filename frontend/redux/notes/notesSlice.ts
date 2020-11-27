import { NotesState } from "./types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: NotesState = {
  notes: [
    {
      id: 1,
      notebook_id:1,
      title: "First lesson of first notebook",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus porro at ad numquam nesciunt temporibus molestias deserunt! Minima quia doloremque, optio, velit harum quas, molestias consequatur sint commodi delectus eos.",
      createdAt: "3:50 PM",
      tags: ["work", "upper", "game", "game", "game"],
    },
    {
      id: 2,
      notebook_id:2,
      title: "Second lesson of first notebook",
      content:
        "Lorem1, ipsum dolor sit amet consectetur adipisicing elit. Animi, facilis blanditi...",
      createdAt: "8:50 PM",
      tags: ["long long tag", "game", "upper", "game", "game"],
    },
  ],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => state,
  },
});

export const { addNote } = notesSlice.actions;

export default notesSlice.reducer;
