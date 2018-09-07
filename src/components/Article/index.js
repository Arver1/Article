import React from 'react';
import CommentList from '../CommentList';
import PropTypes from "prop-types";
import { CSSTransition } from 'react-transition-group';

function Article(props) {
  const {article : {title, text, comments, id}, toggleOpenId, openId} = props;
  const getTitle = openId === id ? 'Close' : 'Open';
  const getBody = () => {
    return (
      <CSSTransition
        in = { id === openId}
        timeout={{
          enter: 100,
          exit: 1000,
        }}
        classNames = "article__content"
        appear
        unmountOnExit
      >
        <section className = "article__content">
          <p className = "article__description">{ text }</p>
          <CommentList comments = { comments } id = { id }/>
        </section>
      </CSSTransition>
    )
  };

  return (
    <article className = "article">
      <h2 className = "article__title" title={ getTitle } onClick = { toggleOpenId(id) }>{ title }</h2>
      <button onClick = { deleteArticle.bind(null, props) } className = "btn btn--color">Delete Article</button>
      { getBody() }
    </article>
  )
}

function deleteArticle(props) {
  const { deleteArticle, article: { id }} = props;
  deleteArticle(id);
}

Article.propTypes = {
  articles: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    comments: PropTypes.array,
    id: PropTypes.string
  }),
  openId: PropTypes.string,
  toggleOpenId: PropTypes.func
};

export default Article;
