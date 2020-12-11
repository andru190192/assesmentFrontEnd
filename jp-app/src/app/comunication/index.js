import axios from "axios"

const urlBase= "http://rickandmortyapi.com/api/"

export default axios.create({
    baseURL:urlBase,
    headers:{
        'Content-Type':'aplication/json'
    }
});