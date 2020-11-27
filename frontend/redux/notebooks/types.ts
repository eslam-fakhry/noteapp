export interface Notebook {
  id: number;
  name: string;
  createdAt: string; //TODO: decide if it should be date type
}

export interface NotebooksState {
  notebooks: Notebook[];
  currentNotebook: number | null;
}
