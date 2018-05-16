import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    render() {
        const {article} = this.props;
        const {isOpen} = this.state;
        const body = isOpen ? <section>{article.text}</section> : null;
        const btn = isOpen ? "Close" : "Open";
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.toggleOpen}>{btn}</button>
                {this.getBody()}
            </div>
        )
    }

    toggleOpen =() => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getBody() {
        if(!this.state.isOpen) return null;
        const {article} = this.props;
        return (
            <section>
                {article.text}
                <CommentList comments={article.comments}/>
            </section>
        )
    }
}

/*export default function Article(props) {
    const {article} = props;
    return (
        <div>
            <h3>{article.title}</h3>
            <section>{article.text}</section>
        </div>
    )
}
*/