
import KeystoneApi from '../apis/keystone_api';

export const getContent = () => {
    console.log("hit")
    return async(dispatch, getState) => {
        let response = await KeystoneApi.get("/blogs")
        dispatch({
            type: "GET_CONTENT",
            payload: response.data
        })
    }
}


