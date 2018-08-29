import React from 'react';
import { hot } from 'react-hot-loader';
import ArticleList from './ArticleList';

function App({ articles }) {
    return (
      <ArticleList articles = { articles }/>
    )
}

export default hot(module)(App);
