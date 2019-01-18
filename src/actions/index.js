import KeystoneApi from '../apis/keystone_api';

export const getContent = () => dispatch => {
    dispatch({
        type: "GET_CONTENT",
        isFetching: true,
        error: null
    })
        return KeystoneApi.get(`/featured-cause-cards`).then(response => {
            dispatch({
                type: "GET_CONTENT_SUCCESS",
                isFetching: false,
                payload: response
            })
        }).catch(err => {
            dispatch({
                type: "GET_CONTENT_ERROR",
                isFetching: false,
                error: err
            })
        })
        }
    
