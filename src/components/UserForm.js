import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class UserForm extends Component {

    static PropTypes = {

    }

    state = {
        username: ''
    }

    handleUserChange = ev => {
        if(ev.target.value.length > 10) return
        
        this.setState({
            username: ev.target.value
        })
    }

    render() {
        return (
            <div>
                Name: <input value = {this.state.username} onChange = {this.handleUserChange}/>
            </div>
        )
    }
}