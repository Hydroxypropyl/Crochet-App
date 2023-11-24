import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const getAllStitches = async () => await api.get(`/stitches`).then(response => response.data)
export const getStitchById = async id => await api.get(`/stitches/${id}`).then(response => response.data)

export const getAllProjects = async () => await api.get(`/projects/`).then(response => response.data)

const apis = {
    getAllStitches,
    getStitchById,
    getAllProjects,
}

export default apis
