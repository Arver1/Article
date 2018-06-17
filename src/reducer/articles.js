import {articles as defaultArticles} from '../fixtures'

export default (articlesState = defaultArticles, action) => {
    const {type} = action

    switch (type) {
        case 'DELETE ARTICLE': return articlesState
    }

    return articlesState
}