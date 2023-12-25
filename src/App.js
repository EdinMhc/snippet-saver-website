import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import SnippetsContent from './Components/SnippetsContent';
import FooterNotes from './Components/FooterNotes';
import GridLayout from 'react-grid-layout';
import { calculateSnippetHeight, generateLayout } from './Utils/layoutUtils/calculateSnippetHeight';
import useWindowSize from './hooks/useWindowSize';
import './Styles/App.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

function calculateInitialSnippets(snippets) {
  return snippets.map(snippet => {
    const height = calculateSnippetHeight(snippet);
    const gridHeight = Math.ceil(height / 60);
    return { ...snippet, h: Math.max(gridHeight, 2) };
  });
}

function App() {
  const windowSize = useWindowSize();
  const [snippets, setSnippets] = useState([]);

  const handleImport = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedSnippets = JSON.parse(event.target.result);
        const updatedSnippets = importedSnippets.map((snippet, index) => ({
          ...snippet,
          id: snippet.id || `snippet-${index}`,
          x: index % 4,
          y: Math.floor(index / 4),
          w: 3,
          h: 2,
        }));
        setSnippets(updatedSnippets);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    };
    reader.readAsText(file);
  };

  const layout = generateLayout(snippets);

  const onLayoutChange = (newLayout) => {
    const updatedSnippets = newLayout.map(layoutItem => {
      const snippet = snippets.find(snip => snip.id === layoutItem.i);
      return { ...snippet, ...layoutItem };
    });
    setSnippets(updatedSnippets);
  };
  return (
    <>
     <NavBar onImport={handleImport} />
      <div className="App">
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={60}
          width={windowSize.width}
          onLayoutChange={onLayoutChange}
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