import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import NavBar from './Components/NavBar';
import SnippetsContent from './Components/SnippetsContent';
import FooterNotes from './Components/FooterNotes';
import { handleAddSnippet } from './Utils/layoutUtils/handleAddSnippet';
import useWindowSize from './hooks/useWindowSize';
import SnippetForm from './Components/SnippetForm';
import './Styles/App.css';

function App() {
  const [snippets, setSnippets] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(snippets);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setSnippets(items);
  };

  return (
    <>
      <NavBar />
      <div className='add-snippet-container'>
        <div className="add-snippet-button" onClick={() => setShowForm(true)}>
          <img src={`${process.env.PUBLIC_URL}/addIcon.png`} alt="Add Snippet" />
        </div>
        {showForm && (
          <SnippetForm
            onAdd={handleAddSnippet(snippets, setSnippets, setShowForm)}
            onCancel={() => setShowForm(false)}
          />
        )}
      </div>
      <div className='outline-snippet-container'>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div className="App" {...provided.droppableProps} ref={provided.innerRef}>
              {snippets.map((snippet, index) => (
                <Draggable key={snippet.id} draggableId={snippet.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <SnippetsContent snippet={snippet} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      </div>
      <FooterNotes />
    </>
  );
}

export default App;