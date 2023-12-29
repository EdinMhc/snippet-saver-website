import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import SnippetsContent from './Components/SnippetsContent';
import FooterNotes from './Components/FooterNotes';
import { handleAddSnippet } from './Utils/layoutUtils/handleAddSnippet';
import useWindowSize from './hooks/useWindowSize';
import SnippetForm from './Components/SnippetForm';
import './Styles/App.css';

function App() {
  const windowSize = useWindowSize();
  const [snippets, setSnippets] = useState([]);
  const [showForm, setShowForm] = useState(false);

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
      <div className="App">
        {snippets.map(snippet => (
          <SnippetsContent key={snippet.id} snippet={snippet} />
        ))}
      </div>
      <FooterNotes />
    </>
  );
}
export default App;