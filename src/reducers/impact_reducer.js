const defaultState = {impact: null, impactIsFetching: false, impactError:null};

export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_CONTENT_impactsection":
        return {
            // ...state,
            // impact: null,
            impactIsFetching: action.isFetching,
            // impactError: null,
        }
        case "GET_CONTENT_SUCCESS_impactsection":
        return {
            // ...state,
            impact: action.payload,
            impactIsFetching: action.isFetching,
            // impactError: null,
        }
        case "GET_CONTENT_ERROR_impactsection":
        // console.log("hit")
            return {
                // ...state,
                // impact: null,
                impactIsFetching: action.isFetching, 
                impactError: action.error
            };
        default:
            return state;
    }
}