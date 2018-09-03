import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader';
import Select from 'react-select';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import ArticleList from './ArticleList';
import PropTypes from "prop-types";
import PopUp from './PoPUp';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      from: null,
      to: null
    }
  }

  static propTypes = {
    articles: PropTypes.array
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

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
        <Select className = "main-page__select"
                value = { this.state.selectedOption }
                onChange={ this.handleChange }
                options = { articles.map((article) => ({value: article.title, label: article.title}))}
                isMulti
        />
        <DayPicker
          className = "Selectable main-page__calendar"
          numberOfMonths = {2}
        />
        <ArticleList articles = { favoriteArticles }
                     defaultItemId = { favoriteArticles[0].id }/>
        <PopUp />
      </main>
    )
  }
}

export default hot(module)(App);
