import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'
import 'react-select/dist/react-select.css'
import {selectArticle} from '../../AC'

class SelectFilter extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = selected => {
       const {selectArticle} = this.props
        selectArticle(selected)
    }

    render() {
        const { articles, selected} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        console.log(selected)
        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect(state => ({
    selected: state.select,
    articles: state.articles
}),{selectArticle})(SelectFilter)