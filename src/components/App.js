import React, { PureComponent} from 'react';
import {findDOMNode} from 'react-dom'
import { hot } from 'react-hot-loader';
import SelectFilter from './Filters/Select';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import ArticleList from './ArticleList';
import PropTypes from "prop-types";
import PopUp from './PopUp';
import { connect } from 'react-redux';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      from: null,
      to: null
    }
  }

  static propTypes = {
    articles: PropTypes.array
  };

  filterBySelect = (articles) => {
    if(!this.state.selectedOption) {
      return articles
    }
    const selectedOption =this.state.selectedOption.map(({value}) => value);

    if(!selectedOption.length) {
      return articles
    }
    return articles.filter((article) => {
      return !!~selectedOption.indexOf(article.title)
    })
  }

  filterByDate = (articles) => {

  }

  getRefPopUp = (ref) => {
    console.log(findDOMNode(ref));
  }

  render() {
    const { articles } = this.props;
    const favoriteArticles = this.filterBySelect(articles);
    if(!articles.length) {
      return (
        <div>Articles not found</div>
      )
    }
    return (
      <main className = "main-page">
        <SelectFilter />
        <DayPicker
          className = "Selectable main-page__calendar"
          numberOfMonths = {2}
        />
        <ArticleList articles = { favoriteArticles }
                     defaultItemId = { favoriteArticles[0].id }
        />
        <PopUp ref = { this.getRefPopUp }/>
      </main>
    )
  }
}

export default connect((state) => {
  return {
    articles: state.articles
  }
})(hot(module)(App));
