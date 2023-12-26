export function handleAddSnippet(snippets, setSnippets,setShowForm){
    return (newSnippet) => {
      const updatedSnippets = snippets.map(snippet => {
          return { ...snippet, x: snippet.x + 2 };
        });
      const newSnippetWithPosition = {
        ...newSnippet,
        id: `snippet-${snippets.length + 1}`,
        x: 0,
        y: 0,
        w: 2,
        h: 2,
        };
        setSnippets([newSnippetWithPosition, ...updatedSnippets]);
        setShowForm(false);
        };
}