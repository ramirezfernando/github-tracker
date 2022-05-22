import onSearchReducer from "./onSearch";
import validUserReducer from "./validUser";

import { combineReducers } from 'redux'

const allReducers = combineReducers({
    onSearch: onSearchReducer,
    validUser: validUserReducer,
})

export default allReducers;