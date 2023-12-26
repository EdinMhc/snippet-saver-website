import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import SnippetsContent from './Components/SnippetsContent';
import FooterNotes from './Components/FooterNotes';
import GridLayout from 'react-grid-layout';
import { generateLayout } from './Utils/layoutUtils/calculateSnippetHeight';
import { handleImports } from './Utils/layoutUtils/handleImport';
import { onLayoutChange } from './Utils/layoutUtils/onLayoutChange';
import useWindowSize from './hooks/useWindowSize';
import './Styles/App.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

function App() {
  const windowSize = useWindowSize();
  const [snippets, setSnippets] = useState([]);
  const layout = generateLayout(snippets);
  
  return (
    <>
     <NavBar onImport={handleImports(setSnippets)} />
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