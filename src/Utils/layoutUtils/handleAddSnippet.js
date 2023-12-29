export function handleAddSnippet(snippets, setSnippets, setShowForm) {
  return (newSnippet) => {
    let snippetAtZeroPosition = snippets.find(snip => snip.x === 0 && snip.y === 0);

    let updatedSnippets = snippets.map(snippet => {
      if (snippet.id === snippetAtZeroPosition?.id) {
        return { ...snippet, x: snippet.x + 2 };
      }
      return snippet;
    });

    const newSnippetWithPosition = {
      ...newSnippet,
      id: `snippet-${snippets.length + 1}`,
    };

    setSnippets([newSnippetWithPosition, ...updatedSnippets]);
    setShowForm(false);
  };
}
