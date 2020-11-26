import {
  Button,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { RiFilter3Line } from "react-icons/ri";

interface Props {
  size: "sm" | "md" | "lg";
}

export default function SortMenu({ size }: Props): ReactElement {
  return (
    <Menu>
      <MenuButton
        as={size === "sm" ? IconButton : Button}
        h="auto"
        borderRadius="0"
        px="4"
        bgColor="transparent"
        textColor="primary.500"
        py="2"
        fontSize="sm"
        fontWeight="400"
        icon={
          <Icon boxSize="1.4em" m="0" color="primary.300" as={RiFilter3Line} />
        }
        leftIcon={
          size !== "sm" && (
            <Icon
              boxSize="1.2em"
              m="0"
              color="primary.300"
              as={RiFilter3Line}
            />
          )
        }
      >
        SORT
      </MenuButton>
      <MenuList>
        <MenuGroup title="Order by">
          <MenuItem>Title </MenuItem>
          <MenuItem>Created Date</MenuItem>
          <MenuItem>Updated Date</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}
