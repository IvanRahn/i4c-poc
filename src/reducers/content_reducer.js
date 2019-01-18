const defaultState = {content:null,isFetching: true,error:null};

export default (state = defaultState, action) => {
    switch (action.type) {
        // case "GET_CONTENT":
        //     return {
        //         ...state,
        //         isFetching: action,
        //     };
        case "GET_CONTENT_ERROR":
            return {
                ...state, 
                isFetching: action.isFetching, 
                error: action.error
            };
        case "GET_CONTENT_SUCCESS":
        return {
        ...state, 
        isFetching: action.isFetching, 
        content: action.payload,
        error: action.error
        };
        default:
            return state;
    }
}