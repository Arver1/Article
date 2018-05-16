import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    render() {
        const btn = this.state.isOpen ? "Hide comments" : "Show comments";
        return (
            <div>
                <button onClick={this.toggleOpen}>
                    {btn}
                </button>
                {this.getBody()}
            </div>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getBody(){
        if(!this.state.isOpen) return null;
        const {comments} = this.props;
        if (!comments || !comments.length) return "No comment yet";
        return (
            <ul>
                {comments.map((comment) => <li key = {comment.id}><Comment comments = {comment}/></li>)}
            </ul>
        )
    }
}