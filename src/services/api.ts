import axios from 'axios'

export const api = 'https://api.nasa.gov/planetary/apod?api_key=';
export const  apiky = '7tXewLJlLDhHSdL75Ew8CHThnFZ6uIRtjpDshTBx'

export const fullapi = `https://api.nasa.gov/planetary/apod?api_key=${apiky}`


export const getapi =async (url:string) => {
    const response = await axios.get(url);
    return response.data
}


