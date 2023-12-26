export function handleImports(setSnippets){
    return (file) => {
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
} 