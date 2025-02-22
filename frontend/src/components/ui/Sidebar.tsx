"use client";

import { useState } from "react";
import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { BiBuoy } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { PanelRight, PanelLeft } from "lucide-react";

function SidebarComponent() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`h-screen transition-all duration-300 ${isOpen ? "w-64" : "w-16"}`}>
        <Sidebar aria-label="Sidebar with content separator example" className="h-full border-r border-gray-200">
          {/* รายการเมนู */}
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item as={Link} to="/" icon={HiChartPie}>
                {isOpen && "Home"}
              </Sidebar.Item>
              <Sidebar.Item as={Link} to="/about" icon={HiViewBoards}>
                {isOpen && "About"}
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiInbox}>
                {isOpen && "Inbox"}
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiUser}>
                {isOpen && "Users"}
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiShoppingBag}>
                {isOpen && "Products"}
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiArrowSmRight}>
                {isOpen && "Sign In"}
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiTable}>
                {isOpen && "Sign Up"}
              </Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiChartPie}>
                {isOpen && "Upgrade to Pro"}
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiViewBoards}>
                {isOpen && "Documentation"}
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={BiBuoy}>
                {isOpen && "Help"}
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
}

export default SidebarComponent;
