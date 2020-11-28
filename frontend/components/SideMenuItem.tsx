import {
  Box,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { IconType } from "react-icons";
import ArrowIcon from "./ArrowIcon";
import SideSubMenuItem from "./SideSubMenuItem";

// TODO: Add header to menus
type SideMenuNavItem = {
  title: string;
  action: () => void;
  icon?: IconType;
};

interface Props {
  title: string;
  icon: IconType;
  items?: SideMenuNavItem[];
  size: "sm" | "md" | "lg";
  isMenu?: boolean;
  onClick?: () => void;
}

export default function SideMenuItem({
  title,
  icon,
  items,
  size,
  isMenu,
  onClick,
}: Props): ReactElement {
  const { isOpen, onToggle } = useDisclosure();
  const isSize = (sizeArg: "sm" | "md" | "lg") => size === sizeArg;

  const renderSmallSize = (): JSX.Element => {
    if (isMenu) {
      return renderMenu();
    }
    return (
      <IconButton
        aria-label="MenuItem"
        icon={renderMainIcon()}
        bgColor="transparent"
        pr="2"
        ml="1"
      />
    );
  };

  const renderLargeSize = (): JSX.Element => {
    if (isMenu) {
      return (
        <>
          <ArrowIcon isOpen={isOpen} />
          {renderMainIcon()}
          {renderTitle()}
        </>
      );
    }
    return (
      <>
        {renderMainIcon()}
        {renderTitle()}
      </>
    );
  };
  const renderCollapse = () =>
    isMenu && (
      <Collapse in={isSize("lg") && isOpen}>
        <Box pb="3">
          {items?.map((item, index) => (
            <SideSubMenuItem
              key={index}
              icon={item.icon || icon}
              title={item.title}
              onClick={item.action}
            />
          ))}
        </Box>
      </Collapse>
    );

  const renderMenu = (): JSX.Element => (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={renderMainIcon()}
        bgColor="transparent"
        pr="2"
        ml="1"
      />
      <MenuList>
        {items?.map((item, index) => (
          <MenuItem key={index} onClick={item.action}>
            {item.title}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );

  const renderMainIcon = (): JSX.Element => {
    const ml = isMenu ? 0 : 5;

    return (
      <Icon
        as={icon}
        color="primary.400"
        _groupHover={{ color: "primary.500" }}
        boxSize="1.2em"
        mr="2"
        ml={isSize("lg") ? ml : 2}
      />
    );
  };

  const renderTitle = (): JSX.Element => (
    <Text
      flex="1"
      fontSize="sm"
      fontWeight="bold"
      color="primary.300"
      _groupHover={{ color: "primary.600" }}
    >
      {title}
    </Text>
  );

  const clickHandler = () => {
    onClick && onClick();
    isMenu && size === "lg" && onToggle();
  };

  return (
    <>
      <Flex
        alignItems="center"
        role="group"
        py={size !== "lg" ? 1 : 1}
        cursor="pointer"
        onClick={clickHandler}
        _hover={{ bgColor: size !== "lg" ? "" : "primary.200" }}
      >
        {size === "lg" ? renderLargeSize() : renderSmallSize()}
      </Flex>
      {renderCollapse()}
    </>
  );
}
