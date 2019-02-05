const defaultState = {steps: null, stepsIsFetching: false, stepsError:null};

export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_CONTENT_how-it-works/donate":
        return {
            ...state,
            steps: null,
            stepsIsFetching: action.isFetching,
            stepsIrror: null,
        }
        case "GET_CONTENT_SUCCESS_how-it-works/donate":

        return {
            ...state,
            steps: action.payload,
            stepsIsFetching: action.isFetching,
            stepsError: null,
        }
        case "GET_CONTENT_ERROR_how-it-works/donate":
            return {
                ...state,
                steps: null,
                stepsIsFetching: action.isFetching, 
                stepsError: action.error
            };
        default:
            return state;
    }
}