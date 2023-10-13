import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const getAllStitches = async () => await api.get(`/stitches`).then(response => response.data)
export const insertStitch = async payload => await api.post(`/stitch`, payload).then(response => response.data)
export const updateStitchById = async (id, payload) => await api.put(`/stitch/${id}`, payload).then(response => response.data)
export const deleteStitchById = async id => await api.delete(`/stitch/${id}`).then(response => response.data)
export const getStitchById = async id => await api.get(`/stitch/${id}`).then(response => response.data)

const apis = {
    insertStitch,
    getAllStitches,
    updateStitchById,
    deleteStitchById,
    getStitchById,
}

export default apis