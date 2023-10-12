import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const getAllStitches = () => api.get(`/stitches`)
export const insertStitch = payload => api.post(`/stitch`, payload)
export const updateStitchById = (id, payload) => api.put(`/stitch/${id}`, payload)
export const deleteStitchById = id => api.delete(`/stitch/${id}`)
export const getStitchById = id => api.get(`/stitch/${id}`)

const apis = {
    insertStitch,
    getAllStitches,
    updateStitchById,
    deleteStitchById,
    getStitchById,
}

export default apis