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

  export const generateLayout = (snippets) => {
    return snippets.map((snippet, index) => {
      const id = snippet.id.toString();
      const x = snippet.x;
      const y = snippet.y;
      const w = snippet.w || 2;
      const h = snippet.h || 2;
  
      return { i: id, x, y, w, h };
    });
  };