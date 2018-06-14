import React, {Component, PureComponent} from 'react'
import CommentList from './CommentList'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import {CSSTransitionGroup} from 'react-transition-group'
import './article.css'

export default class Article extends PureComponent {

    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.isOpen !== this.props.isOpen
    // }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        const body = isOpen ? <section>{article.text}</section> : null;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={toggleOpen} style={{marginBottom: '10px'}}>{isOpen ? "Close" : "Open"}</button>
                <CSSTransitionGroup
                    transitionName = "article"
                    transitionEnterTimeout = {300}
                    transitionLeaveTimeout = {500}
                >
                {this.getBody()}
                </CSSTransitionGroup>
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


