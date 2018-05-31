import React, {Component} from 'react'
import CommentList from './CommentList'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'

export default class Article extends Component {

    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        const body = isOpen ? <section>{article.text}</section> : null;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>{isOpen ? "Close" : "Open"}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {article, isOpen} = this.props;
        if(!isOpen) return null;
        return (
            <section>
                {article.text}
                <CommentList comments={article.comments}/>
            </section>
        )
    }
}


