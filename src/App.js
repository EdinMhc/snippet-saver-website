import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
import SnippetsContent from './Components/SnippetsContent';
import FooterNotes from './Components/FooterNotes';
import GridLayout from 'react-grid-layout';
import { calculateSnippetHeight, generateLayout } from './Utils/layoutUtils/calculateSnippetHeight';
import useWindowSize from './hooks/useWindowSize';
import './Styles/App.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

function App() {
  const windowSize = useWindowSize();

  const [snippets, setSnippets] = useState([
    {
        id: "1",
        name: "path",
        code: "Some code snippet or content here...",
        isFavorite: true,
        url: "",
        x: 0, y: 0, w: 3, h: 2
    },
    {
        id: "2",
        name: "parameters",
        code: "1CA43ED7E9310CB811A98CE4D485E20881DA8D6575BB3DFB8FE3DC5F2A6D4AA8021C75D95BC5F2E07FC06CDBDD16409A82F6DEB23BF9886BDC59483DC525CBA67BB37954FAB24D9DDA1C91E351F227DA58CE3873C7BDBB2365313738B249C2DE99AE86287D21A7199BC71745E85B67FE741019F20C572648828380052A6DC849",
        isFavorite: true,
        url: "",
        x: 0, y: 0, w: 3, h: 2
    },
    {
        id: "3",
        name: "json filter",
        code: "{\n  \"pipingVariableNameCollection\": [\n    \"OptOut:CompanyLink\"\n  ],\n  \"emailAddressCollection\": [\n    {\n      \"respondentId\": 0,\n      \"emailAddress\": \"string@string.com\",\n      \"customHeaders\": {\n        \"additionalProp1\": \"string\",\n        \"additionalProp2\": \"string\",\n        \"additionalProp3\": \"string\"\n      }\n    }\n  ]\n}",
        isFavorite: true,
        url: "http://localhost:5000/swagger/index.html",
        x: 3, y: 0, w: 3, h: 2
    },
    {
        id: "4",
        name: "TODO Snippets",
        code: "<label for=\"checkbox1702042728770\"></label><input type=\"checkbox\" id=\"checkbox1702042728770\" data-checked=\"true\" style=\"width: 12px; height: 12px;\">Themes black and white<div><br></div><div><label for=\"checkbox1702042754588\"></label><input type=\"checkbox\" id=\"checkbox1702042754588\" style=\"width: 12px; height: 12px;\">Search</div><div><br></div><div><label for=\"checkbox1702042753267\"></label><input type=\"checkbox\" id=\"checkbox1702042753267\" data-checked=\"true\" style=\"width: 12px; height: 12px;\">Json save file potential import feature</div><div><br></div><div><label for=\"checkbox1702042752060\"></label><input type=\"checkbox\" id=\"checkbox1702042752060\" data-checked=\"true\" style=\"width: 12px; height: 12px;\">Settings</div><div><br></div><div><label for=\"checkbox1702474771725\"></label><input type=\"checkbox\" id=\"checkbox1702474771725\"> Background script for popup.html so it has a cache feature<br></div>",
        isFavorite: false,
        url: "",
        x: 3, y: 0, w: 3, h: 2
    },
    {
        id: "5",
        name: "Telepresence codes",
        code: "",
        isFavorite: false,
        url: "https://forsta.atlassian.net/wiki/spaces/FEH/pages/3234695260/How+to+use+Laptop+with+remote+k8s+environment",
        x: 6, y: 0, w: 3, h: 2
    },
    {
      id: "7",
      code: "account and password",
      isFavorite: false,
      name: "Netflix account and password",
      url : "",
      x: 9, y: 0, w: 3, h: 2
    },
    {
      id: "8",
      code: "Some content",
      isFavorite: false,
      name: "Test1",
      url : "",
      x: 9, y: 0, w: 3, h: 2
    },
    {
      id: "9",
      code: "Some content",
      isFavorite: false,
      name: "Test2",
      url : "",
      x: 9, y: 0, w: 3, h: 2
    },
  ]);

 useEffect(() => {
    const updatedSnippets = snippets.map(snippet => {
      const height = calculateSnippetHeight(snippet);
      const gridHeight = Math.ceil(height / 60);
      return { ...snippet, h: Math.max(gridHeight, 2) };
    });
    setSnippets(updatedSnippets);
  }, []);

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
      <NavBar />
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