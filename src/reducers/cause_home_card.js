const defaultState = {cardContent: null, cardIsFetching: false, cardError:null};

export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_CONTENT_causes/homepage-card":
        return {
            ...state,
            cardContent: null,
            cardIsFetching: action.isFetching,
            cardError: null,
        }
        case "GET_CONTENT_SUCCESS_causes/homepage-card":
        return {
            ...state,
            cardContent: action.payload,
            cardIsFetching: action.isFetching,
            cardError: null,
        }
        case "GET_CONTENT_ERROR_causes/homepage-card":
            return {
                ...state,
                cardContent: null,
                cardIsFetching: action.isFetching, 
                cardError: action.cardError
            };
        default:
            return state;
    }
}