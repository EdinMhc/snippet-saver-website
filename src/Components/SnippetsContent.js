import React from 'react';
import '../Styles/SnippetContent.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

function SnippetsContent({ snippet }) {
    return (
        <div className="snippet">
            <h3 className="snippet-title">{snippet.name}</h3>
            <div className="snippet-content">{snippet.code}</div>
        </div>
    );
}

export default SnippetsContent;
