import React from 'react';
import './style.scss';

function Article(props) {
  const {article : {title, text, comments}} = props;
  return (
    <article>
      <h2>{ title }</h2>
      <p>{ text }</p>
    </article>
  )
}

export default Article;
