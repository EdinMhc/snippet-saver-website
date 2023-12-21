import React, { useState, useEffect, useRef } from 'react';
import NavBar from './Components/NavBar';
import SnippetsContent from './Components/SnippetsContent';
import FooterNotes from './Components/FooterNotes';
import './Styles/App.css';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

function App() {
  const [gridWidth, setGridWidth] = useState(window.innerWidth);
  const gridRef = useRef(null);

  useEffect(() => {
    // Function to update width
    const updateWidth = () => {
        if (gridRef.current) {
            setGridWidth(gridRef.current.offsetWidth);
        } else {
            setGridWidth(window.innerWidth);
        }
    };

    // Update width on mount and window resize
    window.addEventListener('resize', updateWidth);
    updateWidth();

    // Cleanup
    return () => window.removeEventListener('resize', updateWidth);
}, []);

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
        x: 2, y: 0, w: 3, h: 2
    },
    {
        id: "3",
        name: "json filter",
        code: "{\n  \"pipingVariableNameCollection\": [\n    \"OptOut:CompanyLink\"\n  ],\n  \"emailAddressCollection\": [\n    {\n      \"respondentId\": 0,\n      \"emailAddress\": \"string@string.com\",\n      \"customHeaders\": {\n        \"additionalProp1\": \"string\",\n        \"additionalProp2\": \"string\",\n        \"additionalProp3\": \"string\"\n      }\n    }\n  ]\n}",
        isFavorite: true,
        url: "http://localhost:5000/swagger/index.html",
        x: 4, y: 0, w: 3, h: 2
    },
    {
        id: "4",
        name: "TODO Snippets",
        code: "<label for=\"checkbox1702042728770\"></label><input type=\"checkbox\" id=\"checkbox1702042728770\" data-checked=\"true\" style=\"width: 12px; height: 12px;\">Themes black and white<div><br></div><div><label for=\"checkbox1702042754588\"></label><input type=\"checkbox\" id=\"checkbox1702042754588\" style=\"width: 12px; height: 12px;\">Search</div><div><br></div><div><label for=\"checkbox1702042753267\"></label><input type=\"checkbox\" id=\"checkbox1702042753267\" data-checked=\"true\" style=\"width: 12px; height: 12px;\">Json save file potential import feature</div><div><br></div><div><label for=\"checkbox1702042752060\"></label><input type=\"checkbox\" id=\"checkbox1702042752060\" data-checked=\"true\" style=\"width: 12px; height: 12px;\">Settings</div><div><br></div><div><label for=\"checkbox1702474771725\"></label><input type=\"checkbox\" id=\"checkbox1702474771725\"> Background script for popup.html so it has a cache feature<br></div>",
        isFavorite: false,
        url: "",
        x: 6, y: 0, w: 3, h: 2
    },
    {
        id: "5",
        name: "Telepresence codes",
        code: "",
        isFavorite: false,
        url: "https://forsta.atlassian.net/wiki/spaces/FEH/pages/3234695260/How+to+use+Laptop+with+remote+k8s+environment",
        x: 8, y: 0, w: 3, h: 2
    }
]);


  const layout = snippets.map(snippet => ({
    i: snippet.id.toString(),
    x: snippet.x || 0,
    y: snippet.y || 0,
    w: snippet.w || 2,
    h: snippet.h || 2
}));

const onLayoutChange = (newLayout) => {
  const updatedSnippets = newLayout.map(layoutItem => {
      const snippet = snippets.find(snip => snip.id === layoutItem.i);
      return {
          ...snippet,
          x: layoutItem.x,
          y: layoutItem.y,
          w: Math.max(layoutItem.w, 3),
          h: layoutItem.h
      };
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
                rowHeight={30}
                width={gridWidth}
                onLayoutChange={onLayoutChange}
            >
                {snippets.map(snippet => (
                    <div key={snippet.id}>
                        <h3>{snippet.name}</h3>
                        <p>{snippet.code}</p>
                    </div>
                ))}
            </GridLayout>
      </div>
      <FooterNotes />
  </>
);
}

export default App;