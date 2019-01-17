import KeystoneApi from '../apis/keystone_api';

export const getContent = () => {
    return (dispatch, getState) => {
        KeystoneApi.get("/blog").then(response => {
            dispatch({
                type: "GET_CONTENT",
                payload: response.data[1]
            })
        })
        // console.log(response.data[1])
        // dispatch({
        //     type: "GET_CONTENT",
        //     payload: response.data[1]
        // })
    }
}