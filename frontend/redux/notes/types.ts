export interface Note {
  id: number;
  notebook_id: number;
  title: string;
  content: string;
  createdAt: string; //TODO: decide if it should be date type
  tags: string[];
}

export interface NoteDescription {
  id: number;
  notebook_id: number;
  title: string;
  excerpt: string;
  createdAt: string; //TODO: decide if it should be date type
  tags: string[];
}

export interface NotesState {
  notes: Note[];
}
