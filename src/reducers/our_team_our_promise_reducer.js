const defaultState = {promise: null, promiseIsFetching: false, promiseError:null};

export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_CONTENT_our-team/our-promise":
        return {
            ...state,
            promise: null,
            promiseIsFetching: action.isFetching,
            promiseError: null,
            
        }
        case "GET_CONTENT_SUCCESS_our-team/our-promise":
        return {
            ...state,
            promise: action.payload,
            promiseIsFetching: action.isFetching,
            
        }
        case "GET_CONTENT_ERROR_our-team/our-promise":
   
            return {
                ...state,
                promise: null,
                promiseIsFetching: action.isFetching, 
                promiseError: action.error
            };
        default:
            return state;
    }
}