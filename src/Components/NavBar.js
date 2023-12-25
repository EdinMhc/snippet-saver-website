import React from 'react';
import '../Styles/NavBar.css';

function NavBar({ onImport }) {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          onImport(file);
        }
    };

    const triggerFileUpload = () => {
        document.getElementById('fileInput').click();
    };

    return (
        <nav>
            <div>
                <a href="#about">About</a>
                <a href="#snippets">Snippets</a>
                <a href="#support">Support</a>
                <a href="#contact">Contact</a>
                <img 
                    src="/uploadIconWhite.svg" 
                    alt="Upload" 
                    onClick={triggerFileUpload} 
                    style={{ cursor: 'pointer', width: '22px', height: '21px'}}
                />
                <input type="file" id="fileInput" accept=".json" onChange={handleFileChange} style={{ display: 'none' }} />
            </div>
        </nav>
    );
}

export default NavBar;
