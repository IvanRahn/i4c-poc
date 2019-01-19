import axios from "axios";

const KeystoneApi = axios.create({
    baseURL: "http://localhost:3010"
});

export default KeystoneApi;

