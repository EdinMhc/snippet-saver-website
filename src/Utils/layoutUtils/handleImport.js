export function handleImports(setSnippets) {
  return (file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
          try {
              const importedSnippets = JSON.parse(event.target.result);
              setSnippets((currentSnippets) => {
                  const uniqueImportedSnippets = importedSnippets.filter(importedSnippet => 
                      !currentSnippets.some(currentSnippet => 
                          currentSnippet.name === importedSnippet.name
                      )
                  );
                  
                  const maxX = currentSnippets.reduce((max, snippet) => Math.max(max, snippet.x), 0);

                  // Add unique imported snippets to the right of existing snippets
                  const updatedImportedSnippets = uniqueImportedSnippets.map((snippet, index) => ({
                      ...snippet,
                      id: snippet.id || `imported-snippet-${Date.now()}-${index}`,
                      x: 0, // Place imported snippets to the right of existing ones
                      y: 0, // Start at the top row
                      w: snippet.w || 3,
                      h: snippet.h || 2,
                  }));

                  return [...currentSnippets, ...updatedImportedSnippets];
              });
          } catch (error) {
              console.error("Error parsing JSON:", error);
          }
      };
      reader.readAsText(file);
  };
}
