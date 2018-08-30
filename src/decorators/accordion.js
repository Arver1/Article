import React, { Component } from 'react';

export default (OriginalComponent) => class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openId: props.defaultItemId
    }
  }

  toggleOpenId = (id) => (ev) => {
    ev.preventDefault();
    if(this.state.openId === id) {
      return this.setState({
        openId: null
      })
    }
    this.setState({
      openId: id
    })
  }

  render(){
    return (
      <OriginalComponent {...this.props} toggleOpenId = { this.toggleOpenId } openId = { this.state.openId}/>
    )
  }
}
