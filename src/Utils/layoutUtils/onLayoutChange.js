export function onLayoutChange(snippets, setSnippets){
    return (newLayout) => {
        const updatedSnippets = newLayout.map(layoutItem => {
          const snippet = snippets.find(snip => snip.id === layoutItem.i);
          return { ...snippet, ...layoutItem };
        });
        setSnippets(updatedSnippets);
      };
}