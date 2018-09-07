import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import accordion from "../decorators/accordion";
import { connect } from 'react-redux';
import { deleteArticle } from "../AC";

function ArticleList({ articles , openId, toggleOpenId, deleteArticle }) {
  const getBody = () => {
    const list = articles.map((article) => {
      return (
        <li key = { article.id }>
          <Article article = { article } openId = { openId }
                   toggleOpenId = { toggleOpenId }
                   deleteArticle = { deleteArticle }
          />
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
};

export default connect(({ articles, filters }) => {
  if(!filters.selectedOption.length) {
    return {
      articles
    }
  }

  return {
    articles: articles.filter(({title}) => !!~filters.selectedOption.indexOf(title))
  }
}, { deleteArticle })(accordion(ArticleList));
