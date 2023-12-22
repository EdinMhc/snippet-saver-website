import React, { useState, useEffect, useRef } from 'react';
import NavBar from './Components/NavBar';
import SnippetsContent from './Components/SnippetsContent';
import FooterNotes from './Components/FooterNotes';
import './Styles/App.css';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

function calculateSnippetHeight(snippet) {
  const tempDiv = document.createElement('div');
  tempDiv.style.width = '300px';
  tempDiv.style.visibility = 'hidden';
  tempDiv.innerHTML = `<div class='snippet-content'>${snippet.code}</div>`;

  document.body.appendChild(tempDiv);

  const height = tempDiv.offsetHeight;

  document.body.removeChild(tempDiv);

  return height;
}

function App() {
  const [gridWidth] = useState(window.innerWidth);
  const rowHeight = 60;
  useEffect(() => {
    const updatedSnippets = snippets.map(snippet => {
        const height = calculateSnippetHeight(snippet);
        const gridHeight = Math.ceil(height / rowHeight);

        return {
            ...snippet,
            h: Math.max(gridHeight, 2)
        };
    });

    setSnippets(updatedSnippets);
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
        x: 0, y: 0, w: 3, h: 2
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
        x: 4, y: 0, w: 3, h: 2
    },
    {
        id: "5",
        name: "Telepresence codes",
        code: "",
        isFavorite: false,
        url: "https://forsta.atlassian.net/wiki/spaces/FEH/pages/3234695260/How+to+use+Laptop+with+remote+k8s+environment",
        x: 8, y: 0, w: 3, h: 2
    },
    {
        id: "6",
        "code": "The <b>System.OutOfMemoryException you're encountering in your application, particularly when uploading an Excel file and using ClosedXML</b>, suggests that your application is running out of memory. This can be due to several reasons, especially when dealing with large Excel files. Here are some steps you can take to troubleshoot and potentially resolve this issue:<div>\n<b>Check File Size and Content</b>:\nDetermine the size of the Excel file you're trying to upload. Large files can consume a lot of memory, especially if they contain complex data, formulas, or images.\nIf possible, try uploading a smaller or simpler Excel file to see if the issue persists.</div><div>\n<b>Optimize Memory Usage</b>:</div><div>Ensure that your application is efficiently using memory. This includes disposing of objects that are no longer needed and avoiding unnecessary data duplication.\nIf you're processing the file in parts (like reading row by row), make sure you're not keeping references to objects longer than necessary.</div><div>\n<b>Increase Available Memory</b>:\nIf you're running your application in a constrained environment (like a server with limited resources or a 32-bit process), consider increasing the available memory or moving to a 64-bit environment.\nFor web applications, consider adjusting the memory limits in the application pool (if applicable).</div><div>\n<b>Use Streaming APIs</b>:\nIf ClosedXML is causing memory issues due to its in-memory model, consider using a more stream-based approach to handle Excel files, like EPPlus or NPOI, which can be more memory-efficient for large files.</div><div>\n<b>Check for Memory Leaks</b>:\nEnsure that your application doesn't have memory leaks. Tools like Visual Studio’s diagnostic tools, dotMemory, or a profiler can help identify leaks.</div><div>\n<b>Update Libraries</b>:\nMake sure you are using the latest version of ClosedXML, as newer versions might have optimizations or bug fixes that reduce memory usage.</div><div>\n<b>Split the File</b>:\nIf the file is exceptionally large, consider splitting it into smaller parts before processing.</div><div>\n<b>Server Configuration</b>:\nCheck the server configuration where the application is hosted. Ensure it has enough physical memory and is configured to allocate sufficient memory to your application.</div><div>\n<b>Error Handling and Logging</b>:\nImplement robust error handling and logging to capture more details when the exception occurs. This can provide insights into the specific operations that are leading to high memory usage.</div><div>\n<b>Consult Documentation and Community</b>:\nReview the documentation of ClosedXML for any recommendations on handling large files.\nConsider reaching out to the ClosedXML community or forums for advice. Others might have encountered and solved similar issues.\nIf after trying these steps the issue persists, you might need to consider an alternative approach to processing the Excel file or consulting with a developer experienced in handling large datasets and memory management in .NET applications.<br></div>",
        "isFavorite": false,
        "name": "Out of memory exception",
        "url": "",
        x: 8, y: 0, w: 3, h: 2
      },
      {
        id: "7",
        code: "account and password",
        isFavorite: false,
        name: "Netflix account and password",
        url : "",
        x: 8, y: 0, w: 3, h: 2
      },
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
          w: layoutItem.w,
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
                rowHeight={rowHeight}
                width={gridWidth}
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