import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../reducers/validUser"
/*
const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Redux DevTools https://github.com/reduxjs/redux-devtools/tree/main/extension#installation
    );

export default store;
*/

export default configureStore({
    reducer:{
        user: userReducer,
    }
})