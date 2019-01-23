import axios from "axios";

const KeystoneApi = axios.create({
    baseURL: "https://i4c-cms.herokuapp.com"
});

export default KeystoneApi;

