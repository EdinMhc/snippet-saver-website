import React from 'react';
import '../Styles/NavBar.css';

function NavBar() {
    return (
        <nav>
            <div>
                <a href="#about">About</a>
                <a href="#snippets">Snippets</a>
                <a href="#support">Support</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
}

export default NavBar;