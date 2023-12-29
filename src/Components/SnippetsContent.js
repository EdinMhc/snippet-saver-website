import React from 'react';
import '../Styles/SnippetContent.css';

function SnippetsContent({ snippet }) {
    const { name, code, url } = snippet;

    const hasContent = code && code.trim() !== '';

    const baseWidth = 150;
    const padding = 20;
    const charWidth = 10;
    const calculatedWidth = Math.max(name.length * charWidth + padding, baseWidth);

    const snippetStyle = hasContent ? {} : { width: `${calculatedWidth}px`};

    return (
        <div className="snippet" style={snippetStyle}>
            <h3 className="snippet-title">{name}</h3>
            {hasContent && (
                <div className="snippet-style-box">
                    <div className="snippet-content" dangerouslySetInnerHTML={{ __html: code }} />
                </div>
            )}
            <div className="snippet-url">
                {url}
            </div>
        </div>
    );
}

export default SnippetsContent;
