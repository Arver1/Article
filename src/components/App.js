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
import { loadAllArticles } from "../AC";
import Loader from './Loader';

class App extends PureComponent {
  static propTypes = {
    articles: PropTypes.array
  }

  componentDidMount() {
    const { loaded, loading, loadAllArticles } = this.props;
    if (!loaded || !loading) loadAllArticles();
  }

  render(){
    const { articles, loading } = this.props;
    if (loading) return <Loader/>;
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
  return {
    ...articleFilterSelector(state),
    loading: state.articles.loading,
    loaded: state.articles.loaded
  }
}, { loadAllArticles })(hot(module)(App));
