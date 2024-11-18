import React, { useState } from "react";
import "./../styles/Layout.css";

const Layout = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="layout">
            {/* Header */}
            <header className="header">
                <div className="header-left">
                    <button className="burger-menu" onClick={toggleMenu}>☰</button>
                </div>
                <div className="header-right">
                    <i class='bx bx-bell'></i>
                    <div className="user-icon">SA</div>
                    <i class='bx bx-grid-alt'></i>
                </div>
            </header>

            {/* Static Menu */}
            {menuOpen && (
                <div className="static-menu">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>
            )}

            {/* Main Content */}
            <main className="main-content">{children}</main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <img
                        src="/Media/png-transparent-logo-flydubai-flight-981-boeing-737-dubai-blue-text-trademark.png"
                        alt="FlyDubai Logo"
                        className="flydubai-logo"
                    />
                </div>
            </footer>
        </div>
    );
};

export default Layout;
