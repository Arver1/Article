import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom'
import { hot } from 'react-hot-loader';
import SelectFilter from './Filters/Select';
import CalendarFilter from './Filters/Calendar';
import ArticleList from './ArticleList';
import PropTypes from "prop-types";
import PopUp from './PopUp';
import { connect } from 'react-redux';
import { articleFilterSelector } from "../selectors";
import {loadAllArticles} from "../AC";

class App extends PureComponent {
  static propTypes = {
    articles: PropTypes.array
  }

  componentDidMount() {
    this.props.loadAllArticles();
  }

  render(){
    const { articles } = this.props;
    if(!articles.length) {
      return (
        <main className = "main-page">
          <SelectFilter />
          <CalendarFilter />
          <div>Articles not found</div>
        </main>
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
}

export default connect((state) => {
  return articleFilterSelector(state)
}, { loadAllArticles })(hot(module)(App));
