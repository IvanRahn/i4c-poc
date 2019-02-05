const defaultState = {featurecause: null, featurecauseIsFetching: false, featurecauseError:null};

export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_CONTENT_how-it-works/featured-cause":
        return {
            ...state,
            featurecause: null,
            featurecauseIsFetching: action.isFetching,
            featurecauseError: null,
            
        }
        case "GET_CONTENT_SUCCESS_how-it-works/featured-cause":
        return {
            ...state,
            featurecause: action.payload,
            featurecauseIsFetching: action.isFetching,
            
        }
        case "GET_CONTENT_ERROR_how-it-works/featured-cause":
   
            return {
                ...state,
                featurecause: null,
                featurecauseIsFetching: action.isFetching, 
                featurecauseError: action.error
            };
        default:
            return state;
    }
}