import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

const create = newItem => {
    const request = axios.post(baseUrl, newItem);
    return request.then(response => response.data);
}

const update = (itemId, newItem) => {
    const request = axios.put(`${baseUrl}/${itemId}`, newItem);
    return request.then(response => response.data);
}

const remove = itemId => {
    const request = axios.delete(`${baseUrl}/${itemId}`);
    return request.then(response => response.data);
}

export default { getAll, create, update, remove }