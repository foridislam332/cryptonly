import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const Main = () => {
    return (
        <main>
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    );
};

export default Main;