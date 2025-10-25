import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
      <div className="home">
        <div className="home-content">
          <Navbar></Navbar>
          <div className="flex-grow container mx-auto px-4">
            <Outlet />
          </div>
        </div>
      </div>
    );
};

export default Layout;