import { Flex, Button, Text } from "@chakra-ui/react";

interface NavbarProps {
    onToggleSidebar: () => void;
  }

export default function Navbar({ onToggleSidebar }: NavbarProps) {
  return (
    <Flex
      as="nav"
      bg="yellowgreen"
      color="white"
      p={3}
      align="center"
      justify="space-between"
    >
      <Flex align="center">
        <Button variant="ghost" color="white" onClick={onToggleSidebar}>
          ☰
        </Button>
        <Text ml={4} fontSize="lg">
          Tracker
        </Text>
      </Flex>
    </Flex>
  );
}