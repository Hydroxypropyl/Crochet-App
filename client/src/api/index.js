import axios from 'axios'

// Add an interceptor to include the authentication token in the headers
axios.interceptors.request.use((config) => {
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

export const getAllStitches = async () => await axios.get('/api/stitches').then(response => response.data)
export const getStitchById = async id => await axios.get(`/api/stitches/${id}`).then(response => response.data)
export const login = async data => await axios.post('/api/login/signin', { data }).then(response => response.data)
export const register = async data => await axios.post('/api/login/signup', { data }).then(response => response.data)

export const getAllProjects = async () => await axios.get(`/api/projects/`).then(response => response.data)
export const createNewProject = async data => await axios.post('/api/projects/new', { data }).then(response => response.data)

const apis = {
    getAllStitches,
    getStitchById,
    login,
    getAllProjects,
    register,
    createNewProject,
}

export default apis
