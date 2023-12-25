import React from 'react';
import '../Styles/NavBar.css';

function NavBar({ onImport }) {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          onImport(file);
        }
      };
    return (
        <nav>
            <div>
                <a href="#about">About</a>
                <a href="#snippets">Snippets</a>
                <a href="#support">Support</a>
                <a href="#contact">Contact</a>
                <input type="file" accept=".json" onChange={handleFileChange} />
            </div>
        </nav>
    );
}

export default NavBar;