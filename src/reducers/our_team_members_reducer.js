const defaultState = {member: null, memberIsFetching: false, memberError:null};

export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_CONTENT_our-team/members":
        return {
            ...state,
            member: null,
            memberIsFetching: action.isFetching,
            memberError: null,
            
        }
        case "GET_CONTENT_SUCCESS_our-team/members":
        return {
            ...state,
            member: action.payload,
            memberIsFetching: action.isFetching,
            
        }
        case "GET_CONTENT_ERROR_our-team/members":
   
            return {
                ...state,
                member: null,
                memberIsFetching: action.isFetching, 
                memberError: action.error
            };
        default:
            return state;
    }
}