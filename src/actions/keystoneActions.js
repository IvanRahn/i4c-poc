
import KeystoneApi from '../apis/keystone_api';

const getContent = (route) => async dispatch => {
    dispatch({
        type: `GET_CONTENT_${route}`,
        isFetching: true,
        error: null
    })
    try {
    const response = await KeystoneApi.get(`/${route}`)
    return  dispatch({
            type: `GET_CONTENT_SUCCESS_${route}`,
            isFetching: false,
            payload: response.data
        })
    } catch(error) {
        return dispatch({
            type: `GET_CONTENT_ERROR_${route}`,
            isFetching: false,
            error
        })
    }
    }

export default getContent
