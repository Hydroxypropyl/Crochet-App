import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

// Add an interceptor to include the authentication token in the headers
api.interceptors.request.use((config) => {
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

export const getAllStitches = async () => await api.get(`/stitches`).then(response => response.data)
export const getStitchById = async id => await api.get(`/stitch/${id}`).then(response => response.data)
export const login = async data => await api.post('/login/signin', { data }).then(response => response.data)
export const register = async data => await api.post('/login/signup', { data }).then(response => response.data)

export const getAllProjects = async () => await api.get(`/projects/`).then(response => response.data)

const apis = {
    getAllStitches,
    getStitchById,
    login,
    getAllProjects,
    register,
}

export default apis
