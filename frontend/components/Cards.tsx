import {
  Box,
  Flex,
  Heading,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tooltip,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { RiAlarmLine, RiBook2Line, RiStickyNoteLine } from "react-icons/ri";
import FilterPopover from "./FilterPopover";
import NoteCard from "./NoteCard";
import SortMenu from "./SortMenu";

interface Props {
  width: number;
}

const note = {
  id: 1,
  title: "First lesson of first notebook",
  excerpt:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, facilis blanditi...",
  createdAt: "3:50 PM",
  tags: ["work", "upper", "game", "game", "game"],
};

export default function Cards({ width }: Props): ReactElement {
  let size: "sm" | "md" | "lg" = width <= 220 ? "sm" : "md";

  return (
    <Box>
      <Box bgColor="primary.100">
        <Flex alignItems="center" p="4">
          <Icon as={RiBook2Line} mr="2" color="primary.400" />
          <Tooltip
            label="A Very long long notebook name"
            aria-label="Notebook name"
          >
            <Heading isTruncated fontSize="xl" textColor="primary.600">
              A Very long long notebook name
            </Heading>
          </Tooltip>
        </Flex>
        <Flex
          justifyContent={size === "sm" ? "space-evenly" : "end"}
          mx="4"
          pb={size === "sm" ? 1 : 3}
        >
          <FilterPopover size={size} />
          <SortMenu size={size} />
        </Flex>
      </Box>

      <Tabs isFitted variant="unstyled">
        <TabList
          mb="1em"
          border="1px"
          borderColor="primary.200"
          bgColor="primary.100"
        >
          <Tab
            color="primary.500"
            borderRight="1px"
            borderColor="primary.200"
            borderBottom="2px"
            borderBottomColor="transparent"
            _selected={{ borderBottomColor: "primary.500" }}
            _focus={{ bgColor: "primary.200" }}
          >
            {size === "sm" ? (
              <Icon as={RiStickyNoteLine} color="currentcolor" />
            ) : (
              "Notes"
            )}
          </Tab>
          <Tab
            color="primary.500"
            borderBottom="2px"
            borderBottomColor="transparent"
            _selected={{ borderBottomColor: "primary.500" }}
            _focus={{ bgColor: "primary.200" }}
          >
            {size === "sm" ? (
              <Icon as={RiAlarmLine} color="currentcolor" />
            ) : (
              "Reminders"
            )}
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel p="0">
            <NoteCard size="sm" note={note} />
            <NoteCard size="sm" note={note} />
          </TabPanel>
          <TabPanel p="0">
            <NoteCard size="sm" note={note} />
            <NoteCard size="sm" note={note} />
            <NoteCard size="sm" note={note} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
