import { Flex, Icon, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  title: string;
  onClick: () => void;
}

export default function SideSubMenuItem({
  icon,
  title,
  onClick,
}: Props): ReactElement {
  return (
    <Flex
      alignItems="center"
      role="group"
      py="1"
      pl="12"
      cursor="pointer"
      _hover={{ bgColor: "primary.200" }}
      onClick={onClick}
    >
      <Icon
        as={icon}
        color="primary.400"
        _groupHover={{ color: "primary.500" }}
        boxSize=".8em"
        mr="2"
      />
      <Text
        fontSize="sm"
        flex="1"
        _groupHover={{ color: "primary.600" }}
        color="primary.300"
      >
        {title}
      </Text>
    </Flex>
  );
}
