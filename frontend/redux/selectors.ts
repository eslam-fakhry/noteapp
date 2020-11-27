import { RootState } from "./rootReducer";
import { createSelector } from "reselect";
import { Notebook } from "./notebooks/types";

const getCurrentNotebookId = (state: RootState) =>
  state.notebooks.currentNotebook;
const getAllNotes = (state: RootState) => state.notes.notes;
const getAllNotebooks = (state: RootState) => state.notebooks.notebooks;

export const getAllNotebookNoteDescriptions = createSelector(
  [getAllNotes],
  (allNotes) => {
    return allNotes.map((note) => {
      const { id, title, createdAt, content, notebook_id, tags } = note;
      const excerptLength = 50;
      let excerpt =
        content.length > excerptLength
          ? content.substring(0, excerptLength) + "..."
          : content;

      return {
        id,
        notebook_id,
        title,
        createdAt,
        excerpt,
        tags,
      };
    });
  }
);

export const getNotebookNoteDescriptions = createSelector(
  [getCurrentNotebookId, getAllNotebookNoteDescriptions],
  (currentNotebook, allNoteDescriptions) => {
    if (!currentNotebook) {
      return allNoteDescriptions;
    }

    return allNoteDescriptions.filter(
      (note) => note.notebook_id === currentNotebook
    );
  }
);

export const getCurrentNotebook = createSelector(
  [getCurrentNotebookId, getAllNotebooks],
  (currentNotebook, allNotebooks) => {
    const defaultNotebook = {
      id: 0,
      name: "All Notes",
      createdAt: "",
    };
    if (!currentNotebook) {
      return defaultNotebook;
    }

    return (
      allNotebooks.find((notebook) => notebook.id === currentNotebook) ||
      defaultNotebook
    );
  }
);
