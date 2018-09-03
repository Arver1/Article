import React, { PureComponent } from 'react';

class AuthorField extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  changeValue = (e) => {
    const valueLength = e.target.value.length;
    if(valueLength > 15) return
    this.setState({
      value: e.target.value
    })
  }

  getClassName = () => {
    if(!this.state.value.length) return "comment__field-author";
    return this.state.value.length < 5
      ? "comment__field-author comment__field-author--color" :
      "comment__field-author"
  }

  render() {
    return (
      <div className = "comment__wrapper">
        <label htmlFor="field-author"
               className = "comment__label">Author</label>
        <input type = "text"
               className = { this.getClassName() }
               id = "field-author"
               value = { this.state.value }
               onChange = { this.changeValue}
               name = "author"
        />
      </div>
    )
  }
}

export default AuthorField;
