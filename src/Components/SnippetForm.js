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
      <div className="snippet-whitespace">
      <form onSubmit={handleSubmit}>
        <div className="snippet-form-content">
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Name'
            />
          </div>
          <div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder='Content'
            />
          </div>
          <div>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder='Url'
            />
          </div>
        </div>
        <div className="form-actions">
          <button type="submit">Add</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default SnippetForm;
