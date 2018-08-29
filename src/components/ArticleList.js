import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

function ArticleList(props) {
  const { articles } = props;
  const getBody = () => {
    return articles.map((article) => {
      return (
        <li key = { article.id }>
          <button>Open</button>
          <Article article = { article }/>
        </li>
      )
    })
  };

  return (
    <ul>
      { getBody() }
    </ul>
  )
}

ArticleList.propTypes = {
  articles: PropTypes.array
};

export default ArticleList;
