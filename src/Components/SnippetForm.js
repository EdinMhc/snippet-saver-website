import React, { useState } from 'react';
import '../Styles/SnippetForm.css';

function SnippetForm({ onAdd, onCancel }) {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({ name, code, url });
    setName('');
    setCode('');
    setUrl('');
  };

  return (
    <div className="snippet-form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Code:</label>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <div>
          <label>URL:</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="form-actions">
          <button type="submit">Add</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default SnippetForm;
