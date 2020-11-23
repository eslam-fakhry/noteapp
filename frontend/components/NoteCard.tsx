import { Box, Heading, Text, useMultiStyleConfig } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import Tags from "./Tags";

type noteDescription = {
  id: number;
  title: string;
  excerpt: string;
  createdAt: string;
  tags: string[];
};

interface Props {
  note: noteDescription;
  size?: string;
}

export default function NoteCard({ note, size }: Props): ReactElement {
  const styles: any = useMultiStyleConfig("NoteCard", { size });

  return (
    <Box sx={styles["card"]}>
      <Text sx={styles["date"]}>{note.createdAt}</Text>
      <Heading sx={styles["title"]}>{note.title}</Heading>
      <Text sx={styles["excerpt"]}>{note.excerpt}</Text>
      <Tags size={size} tags={note.tags} />
    </Box>
  );
}
