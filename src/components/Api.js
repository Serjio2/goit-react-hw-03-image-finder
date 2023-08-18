import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api';
const key = '38070377-8dbe611b16263765ee807d393';
const perPage = 12;

export const fetchImages = async () => {
    const response = await axios.get(`?q=cat&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=${perPage}`);
    return response.data;
}