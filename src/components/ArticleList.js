import React,{Component} from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component{

    static PropTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

    render() {
        const {articles, openItemId:openArticleId, toggleOpenItem:toggleOpenArticle} = this.props;
        const articleElements = articles.map( article => <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id === openArticleId}
                toggleOpen = {()=> toggleOpenArticle(article.id)}
            /></li>);
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

}

export default accordion(ArticleList)
