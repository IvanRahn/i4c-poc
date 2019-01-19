const defaultState = {content: null, isFetching: true, error:null};

export default (state = defaultState, action) => {
    switch (action.type) {
        // case "GET_CONTENT":
        // return {
        //     ...state,
        //     content: null,
        //     isFetching: action.isFetching,
        //     error: null,
        // }
        case "GET_CONTENT_SUCCESS":
        return {
            ...state,
            content: action.payload,
            isFetching: action.isFetching,
            error: null,
        }
        case "GET_CONTENT_ERROR":
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