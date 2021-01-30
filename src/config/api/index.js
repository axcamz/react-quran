const BASE_URL = "http://192.168.43.55:3001" 

const GET_ALL_SURAH = BASE_URL+"/surah"
const GET_SURAH = (id) => `${BASE_URL}/surah/${id}` 


export {
    GET_ALL_SURAH,
    GET_SURAH,
}