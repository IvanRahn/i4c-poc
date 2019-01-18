import KeystoneApi from '../apis/keystone_api';

export const getContent = () => {
    return async (dispatch, getState) => {
        dispatch({
            type: "GET_CONTENT",
            isFetching: true,
            error: null
        })
        return KeystoneApi.get("/blog").then(response => {
            dispatch({
                type: "GET_CONTENT_SUCCESS",
                isFetching: false,
                payload: response.data[1]
            })
        }).catch(err => {
            dispatch({
                type: "GET_CONTENT_ERROR",
                isFetching: false,
                error: err
            })
        })
        }
    }
