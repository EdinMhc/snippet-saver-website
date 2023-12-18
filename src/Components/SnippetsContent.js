import React from 'react';

function SnippetsContent() {
    const snippets = [
        { id: 1, content: "Snippet 1 content..." },
        { id: 2, content: "Snippet 2 content..." },
    ];

    return (
        <div>
            {snippets.map(snippet => (
                <div key={snippet.id} style={{ width: '300px', margin: '10px' }}>
                    {snippet.content}
                </div>
            ))}
        </div>
    );
}

export default SnippetsContent;
