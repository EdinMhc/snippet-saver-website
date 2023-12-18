import React from 'react';
import NavBar from './Components/NavBar';
import SnippetsContent from './Components/SnippetContent';
import FooterNotes from './Components/FooterNotes';
import './Styles/App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SnippetsContent />
      <FooterNotes />
    </div>
  );
}

export default App;