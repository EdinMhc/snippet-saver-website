import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import SnippetsContent from './Components/SnippetsContent';
import FooterNotes from './Components/FooterNotes';
import GridLayout from 'react-grid-layout';
import { generateLayout } from './Utils/layoutUtils/calculateSnippetHeight';
import { handleImports } from './Utils/layoutUtils/handleImport';
import { onLayoutChange } from './Utils/layoutUtils/onLayoutChange';
import { handleAddSnippet } from './Utils/layoutUtils/handleAddSnippet';
import useWindowSize from './hooks/useWindowSize';
import SnippetForm from './Components/SnippetForm';
import './Styles/App.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

function App() {
  const windowSize = useWindowSize();
  const [snippets, setSnippets] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const layout = generateLayout(snippets);

  return (
    <>
     <NavBar onImport={handleImports(setSnippets)} />
    <div className="add-snippet-button" onClick={() => setShowForm(true)}>+</div>
    {showForm && (
      <SnippetForm
          onAdd={handleAddSnippet(snippets, setSnippets, setShowForm)}
          onCancel={() => setShowForm(false)}
        />
    )}
    <div className="App">
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={60}
        width={windowSize.width}
        onLayoutChange={onLayoutChange(snippets, setSnippets)}
        isResizable={true}
      >
        {snippets.map(snippet => (
          <div key={snippet.id}>
            <SnippetsContent snippet={snippet} />
          </div>
        ))}
      </GridLayout>
    </div>
    <FooterNotes />
    </>
  );
}

export default App;