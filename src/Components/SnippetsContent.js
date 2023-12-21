import React from 'react';
import '../Styles/SnippetContent.css';
import { Droppable, Draggable } from 'react-beautiful-dnd';

function SnippetsContent({ snippets, updateSnippets }) {
    const reorderSnippets = (startIndex, endIndex) => {
        const result = Array.from(snippets);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        updateSnippets(result);
    };

    return (
        <Droppable droppableId="snippets">
            {(provided) => (
                <div 
                    className="snippets-container" 
                    {...provided.droppableProps} 
                    ref={provided.innerRef}
                >
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
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
}

export default SnippetsContent;
