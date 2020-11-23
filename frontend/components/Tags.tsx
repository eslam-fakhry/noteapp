import React, { ReactElement } from "react";
import { HStack, Tag } from "@chakra-ui/react";

interface Props {
  tags: string[];
}
export default function Tags({ tags }: Props): ReactElement {
  return (
    <HStack spacing="12px">
      {tags.map((tag, i) => (
        <Tag key={i}>{tag}</Tag>
      ))}
    </HStack>
  );
}
