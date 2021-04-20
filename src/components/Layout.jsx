import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
    return (
        <div className="container">
            <Header/>
                <div className="main">
                    {children}
                </div>
            <Footer/>
        </div>
    )
}

export default Layout;
