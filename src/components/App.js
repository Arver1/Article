import React, { Component } from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DatePicker from './DatePicker'

export default class App extends Component {
    static propTypes = {

    };

    state = {
        selection: null,
        selectedDay: undefined
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <DatePicker/>
                <UserForm/>
                <Select options = {options} value={this.state.selection} onChange={this.changeSelection} multi/>
                <ArticleList articles = {this.props.articles} />
            </div>
        )
    }

    changeSelection = selection => this.setState({ selection })
}
