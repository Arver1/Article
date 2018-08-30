import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import accordion from "../decorators/accordion";

function ArticleList({ articles , openId, toggleOpenId}) {
  const getBody = () => {
    return articles.map((article) => {
      return (
        <li key = { article.id }>
          <Article article = { article } openId = { openId } toggleOpenId = { toggleOpenId }/>
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
  articles: PropTypes.array,
  openId: PropTypes.string,
  toggleOpenId: PropTypes.func
}

export default accordion(ArticleList);
