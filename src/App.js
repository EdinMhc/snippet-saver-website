import React, { useState } from 'react';
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
      "code": "The <b>System.OutOfMemoryException you're encountering in your application, particularly when uploading an Excel file and using ClosedXML</b>, suggests that your application is running out of memory. This can be due to several reasons, especially when dealing with large Excel files. Here are some steps you can take to troubleshoot and potentially resolve this issue:<div>\n<b>Check File Size and Content</b>:\nDetermine the size of the Excel file you're trying to upload. Large files can consume a lot of memory, especially if they contain complex data, formulas, or images.\nIf possible, try uploading a smaller or simpler Excel file to see if the issue persists.</div><div>\n<b>Optimize Memory Usage</b>:</div><div>Ensure that your application is efficiently using memory. This includes disposing of objects that are no longer needed and avoiding unnecessary data duplication.\nIf you're processing the file in parts (like reading row by row), make sure you're not keeping references to objects longer than necessary.</div><div>\n<b>Increase Available Memory</b>:\nIf you're running your application in a constrained environment (like a server with limited resources or a 32-bit process), consider increasing the available memory or moving to a 64-bit environment.\nFor web applications, consider adjusting the memory limits in the application pool (if applicable).</div><div>\n<b>Use Streaming APIs</b>:\nIf ClosedXML is causing memory issues due to its in-memory model, consider using a more stream-based approach to handle Excel files, like EPPlus or NPOI, which can be more memory-efficient for large files.</div><div>\n<b>Check for Memory Leaks</b>:\nEnsure that your application doesn't have memory leaks. Tools like Visual Studio’s diagnostic tools, dotMemory, or a profiler can help identify leaks.</div><div>\n<b>Update Libraries</b>:\nMake sure you are using the latest version of ClosedXML, as newer versions might have optimizations or bug fixes that reduce memory usage.</div><div>\n<b>Split the File</b>:\nIf the file is exceptionally large, consider splitting it into smaller parts before processing.</div><div>\n<b>Server Configuration</b>:\nCheck the server configuration where the application is hosted. Ensure it has enough physical memory and is configured to allocate sufficient memory to your application.</div><div>\n<b>Error Handling and Logging</b>:\nImplement robust error handling and logging to capture more details when the exception occurs. This can provide insights into the specific operations that are leading to high memory usage.</div><div>\n<b>Consult Documentation and Community</b>:\nReview the documentation of ClosedXML for any recommendations on handling large files.\nConsider reaching out to the ClosedXML community or forums for advice. Others might have encountered and solved similar issues.\nIf after trying these steps the issue persists, you might need to consider an alternative approach to processing the Excel file or consulting with a developer experienced in handling large datasets and memory management in .NET applications.\n \n </div>",
      "isFavorite": false,
      "name": "Out of memory exception",
      "url": "https://forsta.atlassian.net/wiki/spaces/FEH/pages/3234695260/How+to+use+Laptop+with+remote+k8s+environment"
    },
    {
      id: "6",
      "code": "",
      "isFavorite": false,
      "name": "Telepresence codes",
      "url": "https://forsta.atlassian.net/wiki/spaces/FEH/pages/3234695260/How+to+use+Laptop+with+remote+k8s+environment"
    }
  ]);
  const [snippetsRight, setSnippetsRight] = useState([]);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // Do nothing if dropped outside the list
    if (!destination) {
        return;
    }

    // Reordering within the same list
    if (source.droppableId === destination.droppableId) {
        const sourceSnippets = source.droppableId === "left" ? snippetsLeft : snippetsRight;
        const setSourceSnippets = source.droppableId === "left" ? setSnippetsLeft : setSnippetsRight;

        const newSnippets = Array.from(sourceSnippets);
        const [reorderedItem] = newSnippets.splice(source.index, 1);
        newSnippets.splice(destination.index, 0, reorderedItem);

        setSourceSnippets(newSnippets);
    } else {
        // Moving between lists
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
        <div className="left-area">
              <SnippetsContent droppableId="left" snippets={snippetsLeft} updateSnippets={setSnippetsLeft}/>
          </div>
          <div className="right-area">
              <SnippetsContent droppableId="right" snippets={snippetsRight} updateSnippets={setSnippetsRight} />
          </div>
      </div>
      <FooterNotes />
    </DragDropContext>
  );
}

export default App;