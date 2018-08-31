import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import accordion from "../decorators/accordion";

function ArticleList({ articles , openId, toggleOpenId}) {
  const getBody = () => {
    const list = articles.map((article) => {
      return (
        <li key = { article.id }>
          <Article article = { article } openId = { openId } toggleOpenId = { toggleOpenId }/>
        </li>
      )
    });
    list.unshift(<li key = {0} className = "article__caption">List of articles</li>)
    return list;
  };

  return (
    <ul className = "main-page__items">
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
