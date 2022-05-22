import { createStore } from 'redux';
import allReducers from '../reducers/index'
/*
const onSearchReducer = (state = { onSearch: false }, action) => {
    switch(action.type) {
        // use this for onClick function in components/search.js
        case 'SEARCHING':
            return { onSearch: state.onSearch = !state };
        default:
            return state;
    }
}
const validUserReducer = (state = { onSearch: false }, action) => {
    switch(action.type) {
        // use this for onClick function in components/search.js
        case 'SEARCHING':
            return { onSearch: state.onSearch = !state };
        default:
            return state;
    }
}
*/
const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Redux DevTools https://github.com/reduxjs/redux-devtools/tree/main/extension#installation
    );

export default store;