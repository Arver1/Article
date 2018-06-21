import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

    filterSelect(articles, selected){
        if(!selected.length) return articles
        const articlesId = []
        for(let it of selected)
            articlesId.push(it.value)
        return articles.filter(({id}) => ~articlesId.indexOf(id))
    }

    filterDateRange(articles, dateRange) {
        if(!dateRange.from && !dateRange.to) return articles
        return articles.filter(article => {
            const articleDate = new Date(article.date);
            if(dateRange.to) return articleDate >= dateRange.from && articleDate <= dateRange.to
            return articleDate >= dateRange.from
        })
    }
    render() {
        const {openItemId, toggleOpenItem, selected, dateRange} = this.props
        const articles = this.filterDateRange(
            this.filterSelect(this.props.articles,selected),
            dateRange)
        const articleElements = articles.map(article => <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id === openItemId}
                toggleOpen = {toggleOpenItem(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default connect(state => ({
    articles: state.articles,
    selected: state.select,
    dateRange: state.dateRange
}))(accordion(ArticleList))