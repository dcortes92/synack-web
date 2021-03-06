import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm(props) {
  const {onSubmit, submitting} = props;
  const [engine, setEngine] = useState('google');
  const [query, setQuery] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if(engine.trim().length && query.trim().length) {
      onSubmit(engine.trim(), query.trim());
    }
  }

  return (
    <form
      className="SearchForm"
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <label>Engine</label>
        <select
          id="engine"
          name="engine"
          onChange={e => setEngine(e.target.value)}
          value={engine}
        >
          <option value="google">Google</option>
          <option value="bing">Bing</option>
          <option value="both">Both</option>
        </select>
      </div>

      <div className="form-group">
        <label>Query</label>
        <input
          id="query"
          name="query"
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      <div className="form-group">
        <button id="submit" type="submit" disabled={submitting}>Search</button>
      </div>
    </form>
  );
}

export default SearchForm;
