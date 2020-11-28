import React, { ReactElement } from "react";
import { connect } from "react-redux";
import SideMenuItem from "./SideMenuItem";
import { RiBook2Line, RiPriceTag3Line } from "react-icons/ri";
import { RootState } from "../redux/rootReducer";
import { setCurrentNotebook } from "../redux/notebooks/notebooksSlice";
import { Notebook } from "../redux/notebooks/types";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

interface Props {
  size: "sm" | "md" | "lg";
  notebooks: Notebook[];
  currentNotebook: number | null;
  setCurrentNotebook: ActionCreatorWithPayload<any, string>;
}

export function NotebooksSubMenu({
  size,
  notebooks,
  currentNotebook,
  setCurrentNotebook,
}: Props): ReactElement {
  const items = notebooks.map((nb) => ({
    title: nb.name,
    action: () => setCurrentNotebook(nb.id),
    active: currentNotebook === nb.id
  }));

  return (
    <SideMenuItem
      size={size}
      title="Notebooks"
      icon={RiBook2Line}
      items={items}
      isMenu
      active={currentNotebook !== null}
    />
  );
}

const mapStateToProps = (state: RootState) => ({
  notebooks: state.notebooks.notebooks,
  currentNotebook: state.notebooks.currentNotebook,
});

const mapDispatchToProps = {
  setCurrentNotebook,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebooksSubMenu);
