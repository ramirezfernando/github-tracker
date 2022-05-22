const validUserReducer = (state = false, action) => {
    switch(action.type) {
        // use this for onClick function in components/search.js
        case 'VALID':
            return !state;
        default:
            return state;
    }
}

export default validUserReducer;