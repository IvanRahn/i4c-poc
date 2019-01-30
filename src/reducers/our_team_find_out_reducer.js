const defaultState = {findout: null, findoutIsFetching: false, findoutError:null};

export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_CONTENT_our-team/find-out-more":
        return {
            ...state,
            findout: null,
            findoutIsFetching: action.isFetching,
            findoutError: null,
            
        }
        case "GET_CONTENT_SUCCESS_our-team/find-out-more":
        return {
            ...state,
            findout: action.payload,
            findoutIsFetching: action.isFetching,
            
        }
        case "GET_CONTENT_ERROR_our-team/find-out-more":
   
            return {
                ...state,
                findout: null,
                findoutIsFetching: action.isFetching, 
                findoutError: action.error
            };
        default:
            return state;
    }
}