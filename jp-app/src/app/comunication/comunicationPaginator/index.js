import axios from "../index"

export async function character (page){
let response  = await  axios.get('character?page='+page)
return response.data.results;

}

export async function location (page){
    let response  = await  axios.get('location?page='+page)
    console.log (response)
    return response;
    }

    
export async function episode (page){
    let response  = await  axios.get('episode?page='+page)
    return response;
    
    }