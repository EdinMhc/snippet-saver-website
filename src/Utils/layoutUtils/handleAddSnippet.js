export function handleAddSnippet(snippets, setSnippets,setShowForm){
    const findAvailablePosition = () => {
        let x = 0, y = 0;
        while (true) {
          let found = true;
          for (let snippet of snippets) {
            if (snippet.x === x && snippet.y === y) {
              found = false;
              break;
            }
          }
          if (found) return { x, y };
          x += 2;
          if (x >= 12) {
            x = 0;
            y += 2;
          }
        }
      };

    return (newSnippet) => {
        const position = findAvailablePosition();
        const newSnippets = [
            ...snippets,
            {
              ...newSnippet,
              id: `snippet-${snippets.length + 1}`,
              x: position.x,
              y: position.y,
              w: 2,
              h: 2,
            },
          ];
          setSnippets(newSnippets);
          setShowForm(false);
        };
}