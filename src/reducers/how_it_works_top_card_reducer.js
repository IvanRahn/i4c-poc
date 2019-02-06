const defaultState = {cardContent: null, cardIsFetching: false, cardError:null};

export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_CONTENT_how-it-works-top-card":
        return {
            ...state,
            cardContent: null,
            cardIsFetching: action.isFetching,
            cardError: null,
        }
        case "GET_CONTENT_SUCCESS_how-it-works-top-card":
        return {
            ...state,
            cardContent: action.payload,
            cardIsFetching: action.isFetching,
            cardError: null,
        }
        case "GET_CONTENT_ERROR_how-it-works-top-card":
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