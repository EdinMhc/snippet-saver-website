import React from 'react';
import '../Styles/SnippetContent.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

function SnippetsContent({ snippet }) {
    const { name, code, h } = snippet;
    
    const titleStyle = h === 1 ? {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        margin: 0,
        textAlign: 'center'
      } : {};

      const handleDragStart = (e) => {
        e.stopPropagation(); // Prevents the drag event from bubbling up
    };

    return (
        <div className="snippet">
            <h3 className="snippet-title" style={titleStyle}>{name}</h3>
             {h > 1 && <div className="snippet-content" onMouseDown={handleDragStart}
             dangerouslySetInnerHTML={{ __html: code }}
             />}
        </div>
    );
}

export default SnippetsContent;
