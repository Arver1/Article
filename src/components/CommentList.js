import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

class CommentList extends PureComponent {

  state = {
    isOpen: false
  }

  static defaultProps = {
    comments: []
  }

  static propTypes = {
    comments: PropTypes.array
  }

  render() {
    const { comments } = this.props;
    if(!comments.length) {
      return (
        <div>
          <p>No comments yet</p>
          <CommentForm />
        </div>
      )
    }
    return (
      <ul className = "article__items">
        <button
          className = "btn"
          onClick = { this.toggleOpen }>
          {this.state.isOpen ? 'Close commments' : 'Show comments'}
          </button>
        { this.getBody() }
      </ul>
    )
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  getBody = () => {
    if(!this.state.isOpen) return null;
    const { comments } = this.props;
    return comments.map((comment) => {
      return (
        <li key = { comment.id }><Comment comment = { comment } /></li>
      )
    })
  };
}

export default CommentList;
