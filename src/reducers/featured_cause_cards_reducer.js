const defaultState = {content: null, isFetching: false, error:null};

export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_CONTENT_featured-cause-cards":
        return {
            ...state,
            content: null,
            isFetching: action.isFetching,
            error: null,
        }
        case "GET_CONTENT_SUCCESS_featured-cause-cards":
        return {
            ...state,
            content: action.payload,
            isFetching: action.isFetching,
            error: null,
        }
        case "GET_CONTENT_ERROR_featured-cause-cards":
            return {
                ...state,
                content: null,
                isFetching: action.isFetching, 
                error: action.error
            };
        default:
            return state;
    }
}