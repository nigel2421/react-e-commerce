import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <h1>E-commerce Website</h1>
            <nav>
                {/* Add navigation links here */}
                <a href="/">Home</a>
                <a href="/products">Products</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header;
