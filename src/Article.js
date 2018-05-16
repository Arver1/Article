import React, {Component} from 'react';

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
                <section>{body}</section>
            </div>
        )
    }
    toggleOpen =() => {
        this.setState({
            isOpen: !this.state.isOpen
        })
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