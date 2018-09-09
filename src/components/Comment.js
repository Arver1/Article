import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CommentFilterSelector } from '../selectors';

function Comment({comment :{user, text}}){
  return(
    <section className = "comment">
      <p className = "comment__description">{ text }</p>
      <cite className = "comment__author"> { user }</cite>
    </section>
  )
}

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  comment: PropTypes.shape({
    user: PropTypes.string,
    text: PropTypes.string,
  })
};

const mapStateToProps = () => {
  const CommentSelector = CommentFilterSelector();
  return (state, ownProps) => CommentSelector(state, ownProps )
};

export default connect(mapStateToProps)(Comment);
