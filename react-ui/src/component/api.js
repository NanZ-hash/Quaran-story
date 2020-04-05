import axios from 'axios'
import apiUrl from '../apiConfig'

const getData = story => { 
    return axios.get(`${apiUrl}/api/v1/stories`)
}

export { getData }