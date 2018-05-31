import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {

    static defaultProps = {
        comments: []
    }

    static PropTypes = {
        comments: PropTypes.array,
        isOpen: PropTypes.bool
    }

    render() {
        const {isOpen,toggleOpen} = this.props;
        const btn = isOpen ? "Hide comments" : "Show comments";
        return (
            <div>
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