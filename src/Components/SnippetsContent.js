import React from 'react';
import '../Styles/SnippetContent.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

function SnippetsContent({ snippet }) {
    const { name, code, url } = snippet;
    if(code === ''){
    }
    return (
        <div className="snippet">
            <h3 className="snippet-title">{name}</h3>
            <div className="snippet-style-box">
             {<div className="snippet-content" dangerouslySetInnerHTML={{ __html: code }}
             />}
            </div>
             <div className="snippet-url">
                {url}
             </div>
        </div>
    );
}

export default SnippetsContent;
