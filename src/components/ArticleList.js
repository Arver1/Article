import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import accordion from "../decorators/accordion";
import { connect } from 'react-redux';
import { deleteArticle } from "../AC";
import { articleFilterSelector } from "../selectors";
import { loadAllArticles } from "../AC";

class ArticleList extends PureComponent {

  static propTypes = {
    articles: PropTypes.array,
    openId: PropTypes.string,
    toggleOpenId: PropTypes.func
  };

  componentDidMount() {
    this.props.loadAllArticles();
  }

  render() {
    return (
      <ul className = "main-page__items">
        { this.getBody() }
      </ul>
    )
  }

  getBody = () => {
    const { articles , openId, toggleOpenId, deleteArticle } = this.props;
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
}

export default connect((state) => {
  return articleFilterSelector(state)
}, { loadAllArticles, deleteArticle })(accordion(ArticleList));
