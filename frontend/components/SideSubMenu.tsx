import {
  Box,
  Collapse,
  Flex,
  Icon,
  IconButton,
  keyframes,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { IconType } from "react-icons";
import { RiArrowDownSLine } from "react-icons/ri";
import SideSubMenuItem from "./SideSubMenuItem";

// TODO: Add header to menus
type SideMenuNavItem = {
  title: string;
  action: () => void;
  icon?: IconType;
};

const closeAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(-90deg); }
`;

const openAnimation = keyframes`
  from { transform: rotate(-90deg); }
  to { transform: rotate(0deg); }
`;

function MyIcon({ icon, size }: any) {
  return (
    <Icon
      as={icon}
      color="primary.400"
      _groupHover={{ color: "primary.500" }}
      boxSize="1.2em"
      mr="2"
      ml={size === "lg" ? 0 : 2}
    />
  );
}

interface Props {
  title: string;
  icon: IconType;
  items: SideMenuNavItem[];
  size: "sm" | "md" | "lg";
}

export default function SideSubMenu({
  title,
  icon,
  items,
  size,

}: Props): ReactElement {
  const { isOpen, onToggle } = useDisclosure();


  const animation = `${
    isOpen ? openAnimation : closeAnimation
  } forwards .2s ease`;

  return (
    <>
      <Flex
        alignItems="center"
        role="group"
        py={size !== "lg" ? 1 : 1}
        cursor="pointer"
        onClick={() => size === "lg" && onToggle()}
        _hover={{ bgColor: size !== "lg" ? "" : "primary.200" }}
      >
        {size === "lg" && (
          <Icon
            as={RiArrowDownSLine}
            animation={animation}
            color="primary.400"
            _groupHover={{ color: "primary.500" }}
            mr="1"
          />
        )}

        {size === "lg" ? (
          <MyIcon size={size} icon={icon} />
        ) : (
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<MyIcon size={size} icon={icon} />}
              bgColor="transparent"
              pr="2"
              ml="1"
            />
            <MenuList>
              {items.map((item, index) => (
                <MenuItem key={index} onClick={item.action}>
                  {item.title}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        )}

        {size === "lg" && (
          <Text
            flex="1"
            fontSize="sm"
            fontWeight="bold"
            color="primary.300"
            _groupHover={{ color: "primary.600" }}
          >
            {title}
          </Text>
        )}
      </Flex>

      <Collapse in={size === "lg" && isOpen}>
        <Box pb="3">
          {items.map((item, index) => (
            <SideSubMenuItem
              key={index}
              icon={item.icon || icon}
              title={item.title}
              onClick={item.action}
            />
          ))}
        </Box>
      </Collapse>
    </>
  );
}
