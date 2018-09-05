import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import * as articles from './fixture.json';
import './scss/style.scss'

render(<Root />, document.getElementById('container'));

