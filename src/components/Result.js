import React from 'react';
import './Result.css';

function Result(props) {
  const {title, link, description} = props;

  return (
    <div className="Result">
      <div className="link">
        <a href={link}>
          <span>{link}</span>
          <h3>{title}</h3>
        </a>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Result;
