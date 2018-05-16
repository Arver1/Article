import React, {Component} from 'react'

export default class Comment extends Component {

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
        const {article} = this.props;
        const CommentElements = article.comments.map((comment) =>
            <li key = {comment.id}>
                <h4>{comment.user}</h4>
                <p>{comment.text}</p>
            </li>);
        return (
            <ul>
            {CommentElements}
            </ul>
            )
    }
}