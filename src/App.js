import React, { useState, useEffect, useRef } from 'react';
import NavBar from './Components/NavBar';
import SnippetsContent from './Components/SnippetsContent';
import FooterNotes from './Components/FooterNotes';
import './Styles/App.css';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {
  const [snippetsLeft, setSnippetsLeft] = useState([
    {
      id: "1",
      code: "Some code snippet or content here...",
      isFavorite: true,
      name: "path",
      url: ""
  },
  {
      id: "2",
      "code": "1CA43ED7E9310CB811A98CE4D485E20881DA8D6575BB3DFB8FE3DC5F2A6D4AA8021C75D95BC5F2E07FC06CDBDD16409A82F6DEB23BF9886BDC59483DC525CBA67BB37954FAB24D9DDA1C91E351F227DA58CE3873C7BDBB2365313738B249C2DE99AE86287D21A7199BC71745E85B67FE741019F20C572648828380052A6DC849",
      "isFavorite": true,
      "name": "parameters",
      "url": ""
    },
    {
      id: "3",
      "code": "{\n  \"pipingVariableNameCollection\": [\n    \"OptOut:CompanyLink\"\n  ],\n  \"emailAddressCollection\": [\n    {\n      \"respondentId\": 0,\n      \"emailAddress\": \"string@string.com\",\n      \"customHeaders\": {\n        \"additionalProp1\": \"string\",\n        \"additionalProp2\": \"string\",\n        \"additionalProp3\": \"string\"\n      }\n    }\n  ]\n}",
      "isFavorite": true,
      "name": "json filter",
      "url": "http://localhost:5000/swagger/index.html"
    },
    {
      id: "4",
      "code": "<label for=\"checkbox1702042728770\"></label><input type=\"checkbox\" id=\"checkbox1702042728770\" data-checked=\"true\" style=\"width: 12px; height: 12px;\">Themes black and white<div><br></div><div><label for=\"checkbox1702042754588\"></label><input type=\"checkbox\" id=\"checkbox1702042754588\" style=\"width: 12px; height: 12px;\">Search</div><div><br></div><div><label for=\"checkbox1702042753267\"></label><input type=\"checkbox\" id=\"checkbox1702042753267\" data-checked=\"true\" style=\"width: 12px; height: 12px;\">Json save file potential import feature</div><div><br></div><div><label for=\"checkbox1702042752060\"></label><input type=\"checkbox\" id=\"checkbox1702042752060\" data-checked=\"true\" style=\"width: 12px; height: 12px;\">Settings</div><div><br></div><div><label for=\"checkbox1702474771725\"></label><input type=\"checkbox\" id=\"checkbox1702474771725\"> Background script for popup.html so it has a cache feature<br></div>",
      "isFavorite": false,
      "name": "TODO Snippets",
      "url": ""
    },
    {
      id: "5",
      "code": "",
      "isFavorite": false,
      "name": "Telepresence codes",
      "url": "https://forsta.atlassian.net/wiki/spaces/FEH/pages/3234695260/How+to+use+Laptop+with+remote+k8s+environment"
    }
  ]);
  const [snippetsRight, setSnippetsRight] = useState([]);

  const leftAreaRef = useRef(null);
  const rightAreaRef = useRef(null);

  useEffect(() => {
    const droppableAreas = document.querySelectorAll('[data-rbd-droppable-context-id="0"]');
        if (droppableAreas.length === 0) return;

        const maxHeight = Array.from(droppableAreas).reduce((max, area) => {
            return Math.max(max, area.offsetHeight);
        }, 500);

        droppableAreas.forEach(area => {
            area.style.minHeight = `${maxHeight}px`;
            area.style.minWidth = `100%`;
        });
});

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
        return;
    }

    if (source.droppableId === destination.droppableId) {
        const sourceSnippets = source.droppableId === "left" ? snippetsLeft : snippetsRight;
        const setSourceSnippets = source.droppableId === "left" ? setSnippetsLeft : setSnippetsRight;

        const newSnippets = Array.from(sourceSnippets);
        const [reorderedItem] = newSnippets.splice(source.index, 1);
        newSnippets.splice(destination.index, 0, reorderedItem);

        setSourceSnippets(newSnippets);
    } else {
        const sourceSnippets = source.droppableId === "left" ? snippetsLeft : snippetsRight;
        const destinationSnippets = destination.droppableId === "left" ? snippetsLeft : snippetsRight;
        const setSourceSnippets = source.droppableId === "left" ? setSnippetsLeft : setSnippetsRight;
        const setDestinationSnippets = destination.droppableId === "left" ? setSnippetsLeft : setSnippetsRight;

        const sourceClone = Array.from(sourceSnippets);
        const destClone = Array.from(destinationSnippets);
        const [removed] = sourceClone.splice(source.index, 1);

        destClone.splice(destination.index, 0, removed);

        setSourceSnippets(sourceClone);
        setDestinationSnippets(destClone);
    }
};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
        <NavBar />
      <div className="App">
        <div className="left-area" ref={leftAreaRef}>
              <SnippetsContent droppableId="left" snippets={snippetsLeft} updateSnippets={setSnippetsLeft}/>
          </div>
          <div className="right-area" ref={rightAreaRef}>
              <SnippetsContent droppableId="right" snippets={snippetsRight} updateSnippets={setSnippetsRight} />
          </div>
      </div>
      <FooterNotes />
    </DragDropContext>
  );
}

export default App;