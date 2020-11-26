import { Avatar, Box, Divider, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { RiBook2Line, RiPriceTag3Line } from "react-icons/ri";
import SideSubMenu from "./SideSubMenu";

const items = [
  {
    title: "work",
    url: "/work",
  },
  {
    title: "game",
    url: "/game",
  },
];

interface Props {
  size: "sm" | "md" | "lg";
}

export default function SideMenu({ size }: Props): ReactElement {
  let avatarSize = "";
  if (size === "sm") {
    avatarSize = "34px";
  } else if (size === "md") {
    avatarSize = "1.8em";
  } else {
    avatarSize = "2em";
  }

  return (
    <Box bgColor="primary.600" h="100%">
      <Avatar
        boxSize={avatarSize}
        ml="2"
        my="2"
        bgColor="primary.300"
        name="Eslam Fakhry"
      />
      {size === "lg" && (
        <Text isTruncated ml="2" mb="2" color="primary.300">
          eslam@example.com
        </Text>
      )}
      <Divider borderColor="primary.300" mb="5" />
      <SideSubMenu
        size={size}
        title="Notebooks"
        icon={RiBook2Line}
        items={items}
      />
      <SideSubMenu
        size={size}
        title="Tags"
        icon={RiPriceTag3Line}
        items={items}
      />
    </Box>
  );
}
