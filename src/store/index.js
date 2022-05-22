import { createStore } from 'redux';
import allReducers from '../reducers'

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Redux DevTools https://github.com/reduxjs/redux-devtools/tree/main/extension#installation
    );

export default store;