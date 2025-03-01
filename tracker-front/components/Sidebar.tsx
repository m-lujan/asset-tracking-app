import { Box, List } from "@chakra-ui/react";

interface SidebarProps {
    isCollapsed: boolean;
}

export default function Sidebar({ isCollapsed }: SidebarProps) {
  return (
    <Box
      as="aside"
      width={isCollapsed ? "0px" : "250px"}
      bg="gray.100"
      p={4}
      transition="width 0.3s ease"
      overflowX="hidden"
    >
      <List.Root>
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
        <List.Item>Item 3</List.Item>
      </List.Root>
    </Box>
  );
}