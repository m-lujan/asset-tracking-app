"use client";
import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import Image from "next/image";

export default function Home() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <>
      <Navbar onToggleSidebar={toggleSidebar} />
      <Flex height="calc(100vh - 56px)">
        <Sidebar isCollapsed={isSidebarCollapsed} />
        <MainContent>
        <div>
          <h1>Welcome to My App</h1>
          <p>This is the main content of the home page.</p>
        </div>
        </MainContent>
      </Flex>
    </>
  );
}