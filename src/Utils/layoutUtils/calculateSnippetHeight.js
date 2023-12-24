export function calculateSnippetHeight(snippet) {
    const tempDiv = document.createElement('div');
    tempDiv.style.width = '300px';
    tempDiv.style.visibility = 'hidden';
    tempDiv.innerHTML = `<div class='snippet-content'>${snippet.code}</div>`;
  
    document.body.appendChild(tempDiv);
  
    const height = tempDiv.offsetHeight;
  
    document.body.removeChild(tempDiv);
  
    return height;
  }

  export function generateLayout(snippets) {
    return snippets.map(snippet => ({
      i: snippet.id.toString(),
      x: snippet.x || 0,
      y: snippet.y || 0,
      w: snippet.w || 2,
      h: snippet.h || 2
    }));
  }