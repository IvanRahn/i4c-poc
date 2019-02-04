const defaultState = {storycause: null, storycauseIsFetching: false, storycauseError:null};

export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_CONTENT_storycause":
        return {
            ...state,
            storycause: null,
            storycauseIsFetching: action.isFetching,
            storycauseError: null,
            
        }
        case "GET_CONTENT_SUCCESS_storycause":
        return {
            ...state,
            storycause: action.payload,
            storycauseIsFetching: action.isFetching,
            
        }
        case "GET_CONTENT_ERROR_storycause":
   
            return {
                ...state,
                storycause: null,
                storycauseIsFetching: action.isFetching, 
                storycauseError: action.error
            };
        default:
            return state;
    }
}