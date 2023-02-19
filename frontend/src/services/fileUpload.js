import axios from 'axios'
const baseUrl = 'http://localhost:8080'

const post = data => {
    const request = axios.post(`${baseUrl}/upload`, data)

    return request.then(response => response.data)
}

const get = () => {
    const request = axios.get(`${baseUrl}/employees`)

    return request.then(response => response.data)
}

let exp = {
    get,
    post
}

export default exp