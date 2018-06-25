import {createSelector} from 'reselect'

const articlesGetter = state => state.articles
const selectGetter = state => state.selected
const dateRangeGetter = state => state.dateRange

export const filtratedArticlesSelector = createSelector(articlesGetter, selectGetter, dateRangeGetter, (articles, selected, dateRange) => {
    function filterSelect(articles, selected){
        if(!selected.length) return articles
        const articlesId = []
        for(let it of selected)
            articlesId.push(it.value)
        return articles.filter(({id}) => ~articlesId.indexOf(id))
    }

    function filterDateRange(articles, dateRange) {
        if(!dateRange.from && !dateRange.to) return articles
        return articles.filter(article => {
            const articleDate = new Date(article.date);
            if(dateRange.to) return articleDate >= dateRange.from && articleDate <= dateRange.to
            return articleDate >= dateRange.from
        })
    }

    return filterDateRange(filterSelect(articles,selected), dateRange)
})