import React from 'react';
import { hot } from 'react-hot-loader';
import ArticleList from './ArticleList';
import PropTypes from "prop-types";

function App({ articles }) {
    if(!articles.length) return (
      <div>Articles not found</div>
    )

    return (
      <ArticleList articles = { articles } defaultItemId = { articles[0].id }/>
    )
}

ArticleList.propTypes = {
  articles: PropTypes.array
};

export default hot(module)(App);
