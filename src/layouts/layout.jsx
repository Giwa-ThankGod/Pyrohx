import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

// Components

import { Toaster } from "@/components/ui/toaster";
import Header from './header';
import Sidebar from './sidebar';
import Footer from './footer';

// Layout Wrapper
const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header toggleSidebar={toggleSidebar} />

      <div className="flex flex-1">
        {/* Main content */}
        <div className="flex-1">
          {children} {/* Render child components here */}
          <Outlet />
        </div>

        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} closeSidebar={closeSidebar} />
      </div>

      {/* Footer */}
      <Footer />

      {/* <Toaster /> */}
    </div>
  );
};

export default Layout;