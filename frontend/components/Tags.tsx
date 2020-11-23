import { Tag, useMultiStyleConfig, Wrap, WrapItem } from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface Props {
  tags: string[];
  size?: string;
}
export default function Tags({ tags, size }: Props): ReactElement {
  const styles: any = useMultiStyleConfig("Tags", { size });

  const spacing = styles?.tags?.spacing || 3;

  return (
    <Wrap spacing={spacing}>
      {tags.map((tag, i) => (
        <WrapItem key={i} as={Tag} sx={styles["tag"]}>
          {tag}
        </WrapItem>
      ))}
    </Wrap>
  );
}
