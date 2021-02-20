const BASE_URL = "https://api.quran.sutanlab.id" 

const GET_ALL_SURAH = BASE_URL+"/surah"
const GET_SURAH = (id) => `${BASE_URL}/surah/${id}` 


export {
    GET_ALL_SURAH,
    GET_SURAH,
}