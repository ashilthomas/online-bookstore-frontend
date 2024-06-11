import axios from "axios";

const instance = axios.create({
    baseURL : "https://online-bookstore-backend-4bsl.onrender.com/"
})

export default instance;