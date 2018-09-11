import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import logger from '../middlewares/logger';
import generateId from '../middlewares/generateId'

const enhanser = applyMiddleware(logger, generateId);

const store = createStore(reducer, {}, enhanser);

export default store;
