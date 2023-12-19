import React from 'react';
import '../Styles/SnippetContent.css';

function SnippetsContent() {
    const snippets = [
        { id: 1, title: "Snippet Title 1", content: "Snippet 1 content..." },
        { id: 2, title: "Snippet Title 2", content: "Snippet 2 content..." },
    ];

    return (
        <div className="snippets-container">
            {snippets.map(snippet => (
                <div key={snippet.id} className="snippet">
                    <h3 className="snippet-title">{snippet.title}</h3>
                    <p className="snippet-content">{snippet.content}</p>
                </div>
            ))}
        </div>
    );
}

export default SnippetsContent;
