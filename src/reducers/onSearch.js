const onSearchReducer = (state = false, action) => {
    switch(action.type) {
        // use this for onClick function in components/search.js
        case 'SEARCHING':
            return !state ;
        default:
            return state;
    }
}

export default onSearchReducer;