import React from 'react';
import '../Styles/SnippetContent.css';
import { Droppable, Draggable } from 'react-beautiful-dnd';

function SnippetsContent({ droppableId, snippets, updateSnippets }) {
    return (
        <Droppable droppableId={droppableId}>
            {(provided) => (
                <div 
                    className="snippets-container" 
                    {...provided.droppableProps} 
                    ref={provided.innerRef}
                >
                    <div className="snippets-wrapper">
                    {snippets.map((snippet, index) => (
                        <Draggable key={snippet.id.toString()} draggableId={snippet.id.toString()} index={index}>
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="snippet"
                                >
                                    <h3 className="snippet-title">{snippet.name}</h3>
                                    <div className="snippet-content">{snippet.code}</div>
                                </div>
                            )}
                        </Draggable>
                    ))}
                    </div>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
}

export default SnippetsContent;
