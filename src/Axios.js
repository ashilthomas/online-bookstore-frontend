import axios from "axios";

const instance = axios.create({
    baseURL : "http://localhost:3003/"
})

export default instance;


// "https://online-bookstore-backend-4bsl.onrender.com/"