import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface MainContentProps {
  children: ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  return <Box flex="1" p={4}>{children}</Box>;
}