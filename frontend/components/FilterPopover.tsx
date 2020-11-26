import {
  Box,
  Button,
  Icon,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { RiFilterLine } from "react-icons/ri";

interface Props {
  size: "sm" | "md" | "lg";
}

export default function FilterPopover({ size }: Props): ReactElement {
  return (
    <Popover>
      <PopoverTrigger>
        <Box
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
            <Icon boxSize="1.4em" m="0" color="primary.300" as={RiFilterLine} />
          }
          leftIcon={
            size !== "sm" && (
              <Icon
                boxSize="1.2em"
                m="0"
                color="primary.300"
                as={RiFilterLine}
              />
            )
          }
        >
          FILTER
        </Box>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Filters</PopoverHeader>
        <PopoverBody>Filter inputs should be here</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
