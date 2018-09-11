import React, { PureComponent } from 'react';
import AuthorField from './AuthorField';
import { connect } from 'react-redux';
import { addComment } from '../AC';

class CommentForm extends PureComponent {
  constructor(props){
    super(props);
  }

  render() {
    const { id, addComment } = this.props;
    return (
      <form className = "comment__form">
        <AuthorField ref = { this.getRefAuthor } />
        <div className = "comment__wrapper">
          <label htmlFor="field-text" className = "comment__label">Message</label>
          <textarea cols = {40} rows = {10}
                    id = "field-text"
                    name = "message"
                    placeholder = "Добавить сообщение"
                    ref = { this.getRefText }>{ null }
                  </textarea>
        </div>
        <button className = "btn"
                onClick ={ this.sendMessage(id, addComment) }
        >Отправить</button>
      </form>
    )
  }

  getRefText = (ref) => {
    this.textRef = ref;
  }

  getRefAuthor = (ref) => {
    this.AuthorRef = ref;
  }

  sendMessage = (id, addComment) => {
    return (e) => {
      e.preventDefault();
      addComment(this.AuthorRef.state.value ,this.textRef.value, id);
    }
  }
}

  /*
  return (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    const formData = new FormData(document.querySelector('.comment__form'));
    formData.append("id", id.toString());
    xhr.open('POST', 'http://localhost:3001');
    xhr.onload = () => {
      if(xhr.status !== 200) {
        console.log(xhr.statusText);
      } else {
        console.log(xhr.response);
      }
    };
    xhr.send(formData);
  }
  */
export default connect(null, { addComment })(CommentForm);
