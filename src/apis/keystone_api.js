import axios from "axios";

const KeystoneApi = axios.create({
    // baseURL: "https://i4c-cms.herokuapp.com"
    baseURL: "http://localhost:3010"
    
    
    
});

export default KeystoneApi;

