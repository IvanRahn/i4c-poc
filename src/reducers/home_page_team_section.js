const defaultState = {teamSection: null, teamSectionIsFetching: false, teamSectionError:null};

export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_CONTENT_teamSection":
        return {
            ...state,
            teamSection: null,
            teamSectionIsFetching: action.isFetching,
            teamSectionIrror: null,
        }
        case "GET_CONTENT_SUCCESS_teamSection":

        return {
            ...state,
            teamSection: action.payload,
            teamSectionIsFetching: action.isFetching,
            teamSectionError: null,
        }
        case "GET_CONTENT_ERROR_teamSection":
            return {
                ...state,
                teamSection: null,
                teamSectionIsFetching: action.isFetching, 
                teamSectionError: action.error
            };
        default:
            return state;
    }
}