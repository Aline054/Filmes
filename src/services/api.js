import axios from "axios";

//URL da API::
//https://api.themoviedb.org/3/movie/550?api_key=a603456071894a54f91202d7d7b17a8e

//base da URL :https://api.themoviedb.org/3/

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api;