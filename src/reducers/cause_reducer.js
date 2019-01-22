const defaultState = {cause: null, causeIsFetching: false, causeError:null};

export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_CONTENT_causes":
        return {
            ...state,
            cause: null,
            causeIsFetching: action.isFetching,
            causeError: null,
        }
        case "GET_CONTENT_SUCCESS_causes":
        return {
            ...state,
            cause: action.payload,
            causeIsFetching: action.isFetching,
            causeError: null,
        }
        case "GET_CONTENT_ERROR_causes":
            return {
                ...state,
                cause: null,
                causeIsFetching: action.isFetching, 
                causeError: action.error
            };
        default:
            return state;
    }
}