const defaultState = {content: null, isFetching: false, error:null};

export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_CONTENT_howitworkshomepagecard":
        return {
            ...state,
            content: null,
            isFetching: action.isFetching,
            error: null,
        }
        case "GET_CONTENT_SUCCESS_howitworkshomepagecard":
        return {
            ...state,
            content: action.payload,
            isFetching: action.isFetching,
            error: null,
        }
        case "GET_CONTENT_ERROR_howitworkshomepagecard":
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