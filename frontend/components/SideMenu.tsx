import { Avatar, Box, Divider, Text } from "@chakra-ui/react";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { ReactElement } from "react";
import { ImBooks } from "react-icons/im";
import { RiPriceTag3Line } from "react-icons/ri";
import { connect } from "react-redux";
import { setCurrentNotebook } from "../redux/notebooks/notebooksSlice";
import NotebooksSubMenu from "./NotebooksSubMenu";
import SideMenuItem from "./SideMenuItem";

const tags = [
  {
    title: "work",
    action: () => {},
  },
  {
    title: "game",
    action: () => {},
  },
];

interface Props {
  size: "sm" | "md" | "lg";
  setCurrentNotebook: ActionCreatorWithPayload<any, string>;
}

export function SideMenu({ size, setCurrentNotebook }: Props): ReactElement {
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
      <SideMenuItem
        size={size}
        title="All Notes"
        icon={ImBooks}
        onClick={() => setCurrentNotebook(null)}
      />
      <NotebooksSubMenu size={size} />
      <SideMenuItem
        size={size}
        title="Tags"
        icon={RiPriceTag3Line}
        items={tags}
        isMenu
      />
    </Box>
  );
}

const mapDispatchToProp = {
  setCurrentNotebook,
};

export default connect(null, mapDispatchToProp)(SideMenu);
