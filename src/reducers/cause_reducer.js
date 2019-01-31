const defaultState = {causes: null, causesIsFetching: false, causesError:null};

export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_CONTENT_causes":
        return {
            ...state,
            causes: null,
            causesIsFetching: action.isFetching,
            causesError: null,
        }
        case "GET_CONTENT_SUCCESS_causes":
        return {
            ...state,
            causes: action.payload,
            causesIsFetching: action.isFetching,
            causesError: null,
        }
        case "GET_CONTENT_ERROR_causes":
            return {
                ...state,
                causes: null,
                causesIsFetching: action.isFetching, 
                causesError: action.error
            };
        default:
            return state;
    }
}