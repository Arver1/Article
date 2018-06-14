import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'

class CommentList extends Component {

    static defaultProps = {
        comments: []
    }

    static PropTypes = {
        comments: PropTypes.array,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    state = {
        userField: '',
        textField: ''
    }

    checkFieldUser(ev) {
        if(ev.target.value.length < 5 || ev.target.value.length > 15) {
            this.setState({
                userField: 'red'
            })
        } else {
            this.setState({
                userField: ''
            })
        }
    }

    checkFieldText(ev) {
        if(ev.target.value.length < 20 || ev.target.value.length > 50) {
            this.setState({
                textField: 'red'
            })
        } else {
            this.setState({
                textField: ''
            })
        }
    }
    render() {
        const {isOpen,toggleOpen} = this.props;
        const btn = isOpen ? "Hide comments" : "Show comments";
        return (
            <div>
                <form style={{display: "flex", flexDirection: 'column'}}>
                    <input style={{width: '100px', fontSize: '12px', marginBottom: '10px', borderColor: this.state.userField, outline: 'none', borderWidth: '1px'}} placeholder={'Name'}
                           onChange={ev => this.checkFieldUser(ev)}>
                    </input>
                    <textarea cols={50} rows={5} style={{alignSelf: 'flex-start', marginBottom: '10px', fontSize: '13px', borderColor: this.state.textField, outline: 'none'}} placeholder={'Text'} autoFocus
                              onChange={ev => this.checkFieldText(ev)}>
                    </textarea>
                    <button style={{width: '100px', marginBottom: '10px'}}>Add comment</button>
                </form>
                <button onClick={toggleOpen}>
                    {btn}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody(){
        const {comments, isOpen} = this.props;
        if(!isOpen) return null;
        if (!comments.length) return "No comment yet";
        return (
            <ul>
                {comments.map((comment) => <li key = {comment.id}><Comment comments = {comment}/></li>)}
            </ul>
        )
    }
}

export default toggleOpen(CommentList)