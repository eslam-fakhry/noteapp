import { Icon, keyframes } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const closeAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(-90deg); }
`;

const openAnimation = keyframes`
  from { transform: rotate(-90deg); }
  to { transform: rotate(0deg); }
`;

interface Props {
  isOpen: boolean;
}

export default function ArrowIcon({ isOpen }: Props): ReactElement {
  const animation = `${
    isOpen ? openAnimation : closeAnimation
  } forwards .2s ease`;
  return (
    <Icon
      as={RiArrowDownSLine}
      animation={animation}
      color="primary.400"
      _groupHover={{ color: "primary.500" }}
      mr="1"
    />
  );
}
