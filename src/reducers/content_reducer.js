const defaultState = {content:null, isFetching: true,error:null};

export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_CONTENT":
            return {
                ...state,
                // isFetching: true,
            };
        case "GET_CONTENT_ERROR":
            return {
                isFetching: action.isFetching, 
                error: action.error
            };
        case "GET_CONTENT_SUCCESS":

        return action.payload;
        default:
            return state;
    }
}