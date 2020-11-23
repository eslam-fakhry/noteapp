import { Box } from "@chakra-ui/react";
import React, { ReactElement, useState } from "react";
import SplitPane from "react-split-pane";
import NoteCard from "./NoteCard";

const PANE1_SMALL_SIZE = 50;
const PANE1_LARGE_MIN_SIZE = 150;
const PANE1_LARGE_MAX_SIZE = 250;

interface Props {}

const note = {
  id: 1,
  title: "First lesson of first notebook",
  excerpt:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, facilis blanditi...",
  createdAt: "3:50 PM",
  tags: ["work", "upper", "game", "game", "game"],
};


export default function Panes({}: Props): ReactElement {
  const [pane1Size, setPane1Size] = useState(200);

  const snapPane1 = () => {
    const midPoint = (PANE1_LARGE_MIN_SIZE + PANE1_SMALL_SIZE) / 2;
    if (pane1Size > PANE1_SMALL_SIZE && pane1Size < PANE1_LARGE_MIN_SIZE) {
      setPane1Size(
        pane1Size < midPoint ? PANE1_SMALL_SIZE : PANE1_LARGE_MIN_SIZE
      );
    }
  };
  return (
    <Box
      as={SplitPane}
      split="vertical"
      minSize={PANE1_SMALL_SIZE}
      maxSize={PANE1_LARGE_MAX_SIZE}
      size={pane1Size}
      onDragFinished={snapPane1}
      onChange={(size) => setPane1Size(Number(size))}
    >
      <div>Pane1</div>
      <SplitPane
        allowResize={true}
        split="vertical"
        minSize={200}
        maxSize={300}
        defaultSize={200}
      >
        <div>
          <NoteCard size="sm" note={note} />
          <NoteCard size="sm" note={note} />
        </div>
        <div>Pane3</div>
      </SplitPane>
    </Box>
  );
}
