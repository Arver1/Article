import React from 'react';
import PropTypes from 'prop-types';

function Comment({comment :{user, text}}){
  return(
    <section className = "comment">
      <p className = "comment__description">{ text }</p>
      <cite className = "comment__author"> { user }</cite>
    </section>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    user: PropTypes.string,
    text: PropTypes.string,
  })
};

export default Comment;
