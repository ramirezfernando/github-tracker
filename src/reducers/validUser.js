const validUserReducer = (state = '', action) => {
    switch(action.type) {
        case 'VALID':
            return {
                ...state,
                username: action.payload
            };
        default:
            return state;
    }
}

export default validUserReducer;