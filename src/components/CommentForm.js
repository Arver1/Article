import React from 'react';
import AuthorField from './AuthorField';

function CommentForm({id}){
  return (
    <form className = "comment__form">
      <AuthorField />
      <div className = "comment__wrapper">
        <label htmlFor="field-text" className = "comment__label">Message</label>
        <textarea cols = {40} rows = {10}
                  id = "field-text"
                  name = "message"
                  placeholder = "Добавить сообщение">{ null }
                  </textarea>
      </div>
        <button className = "btn"
                onClick ={ sendMessage(id) }
        >Отправить</button>
    </form>
  )
}

function sendMessage(id) {
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
}
export default CommentForm;
