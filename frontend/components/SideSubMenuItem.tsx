import { Flex, Icon, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  title: string;
  onClick: () => void;
  active?: boolean;
}

export default function SideSubMenuItem({
  icon,
  title,
  onClick,
  active,
}: Props): ReactElement {
  return (
    <Flex
      alignItems="center"
      role="group"
      py="1"
      pl="12"
      cursor="pointer"
      bgColor={active ? "primary.200" : "transparent"}
      _hover={{ bgColor: "primary.200" }}
      onClick={onClick}
    >
      <Icon
        as={icon}
        color={active ? "primary.500" : "primary.400"}
        _groupHover={{ color: "primary.500" }}
        boxSize=".8em"
        mr="2"
      />
      <Text
        fontSize="sm"
        flex="1"
        _groupHover={{ color: "primary.600" }}
        color={active ? "primary.600" : "primary.300"}
      >
        {title}
      </Text>
    </Flex>
  );
}
