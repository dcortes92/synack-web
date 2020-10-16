import React, { useState } from 'react';
import { stringify } from 'query-string';
import { API_URL, ENDPOINTS } from './service';
import { parseResults } from './utils/formatter';
import Result from './components/Result';
import SearchForm from './components/SearchForm'
import './App.css';

function App() {
  const [submitting, setSubmitting] = useState(false);
  const [results, setResults] = useState([]);

  function handleErrors(response) {
    setSubmitting(false);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  function onSubmit(engine, query) {
    const params = { engine, query };
    setSubmitting(true);
    fetch(`${API_URL}/${ENDPOINTS.SEARCH}?${stringify(params)}`, { method: 'GET' })
      .then(handleErrors)
      .then(response => response.json())
      .then(results => {
        setSubmitting(false);
        setResults(parseResults(results));
      });
  }

  function renderResults(results) {
    if(results && results.length) {
      return results.map((result, i) => {
        return (
          <Result
            key={`result-${i}`}
            {...result}
          />
        );
      })
    } else {
      return '';
    }
  }

  return (
    <div>
      <SearchForm
        onSubmit={onSubmit}
        submitting={submitting}
      />

      {renderResults(results)}
    </div>
  );
}

export default App;
