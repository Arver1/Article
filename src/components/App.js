import React from 'react';
import {findDOMNode} from 'react-dom'
import { hot } from 'react-hot-loader';
import SelectFilter from './Filters/Select';
import CalendarFilter from './Filters/Calendar';
import ArticleList from './ArticleList';
import PropTypes from "prop-types";
import PopUp from './PopUp';
import { connect } from 'react-redux';

function App({articles}) {
  if(!articles.length) {
    return (
      <div>Articles not found</div>
    )
  }

  return (
    <main className = "main-page">
      <SelectFilter />
      <CalendarFilter />
      <ArticleList defaultItemId = { articles[0].id }/>
    </main>
  )
}

App.propTypes = {
  articles: PropTypes.array
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
})(hot(module)(App));
