import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderContainer from './Header/HeaderContainer';
import Footer from './Footer/FooterContainer';

const Layout = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="main-container">
            <HeaderContainer searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <main>
                <Outlet context={{ searchQuery }} />
            </main>
            <Footer />
        </div>
    );
};
 
export default Layout;