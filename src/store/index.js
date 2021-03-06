import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import logger from '../middlewares/logger';
import generateId from '../middlewares/generateId'
import api from '../middlewares/api';

const enhanser = applyMiddleware(logger, api, generateId);

const store = createStore(reducer, {}, enhanser);

export default store;
