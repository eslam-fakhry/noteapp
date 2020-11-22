import { Box, Heading, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import Tags from "./Tags";

type noteDescription = {
    id:number,
    title:string,
    excerpt:string,
    createdAt:string,
    tags:string[],
}

interface Props {
  note: noteDescription
 }


export default function NoteCard({note}: Props): ReactElement {
  return (
    <Box p="3" pt="4" borderBottom="1px solid black">
      <Text pb="2" fontWeight="light" color="secondary.400">
        {note.createdAt}
      </Text>
      <Heading size="sm" pb="2" color="secondary.700">
        {note.title}
      </Heading>
      <Text pb="4" color="secondary.600" fontSize="md">
        {note.excerpt}
      </Text>
      <Tags tags={note.tags} />
    </Box>
  );
}
