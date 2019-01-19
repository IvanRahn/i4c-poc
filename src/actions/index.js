import KeystoneApi from '../apis/keystone_api';

export const getContent = (route) => async dispatch => {
        dispatch({
            type: "GET_CONTENT",
            isFetching: true,
            error: null
        })
        try {
        const response = await KeystoneApi.get(`/${route}`)
        return  dispatch({
                type: "GET_CONTENT_SUCCESS",
                isFetching: false,
                payload: response.data
            })
        } catch(error) {
            return dispatch({
                type: "GET_CONTENT_ERROR",
                isFetching: false,
                error
            })
        }
        }
    
