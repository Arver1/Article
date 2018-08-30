import React from 'react';
import CommentList from '../CommentList';
import PropTypes from "prop-types";

function Article(props) {
  const {article : {title, text, comments, id}, toggleOpenId, openId} = props;
  const getTitle = openId === id ? 'Close' : 'Open';

  const getBody = () => {
    if(id !== openId) return null;
    return (
      <section>
      <p className = "article__description">{ text }</p>
      <CommentList comments = {comments} />
      </section>
    )
  }

  return (
    <article className = "article">
      <h2 className = "article__title" title={ getTitle } onClick = { toggleOpenId(id) }>{ title }</h2>
      { getBody() }
    </article>
  )
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
