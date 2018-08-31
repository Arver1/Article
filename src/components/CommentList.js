import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
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
      <section>
        <button
          className = "btn"
          onClick = { this.toggleOpen }>
          {this.state.isOpen ? 'Close commments' : 'Show comments'}
        </button>
        <CSSTransition
          classNames = "article__items"
          in = { this.state.isOpen }
          timeout={{
            enter: 100,
            exit: 1000,
          }}
          unmountOnExit
        >
          <ul className = "article__items">
            { this.getBody() }
          </ul>
        </CSSTransition>
      </section>
    )
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  getBody = () => {
    const { comments } = this.props;
    return comments.map((comment) => {
      return (
        <li key = { comment.id }><Comment comment = { comment } /></li>
      )
    })
  };
}

export default CommentList;
