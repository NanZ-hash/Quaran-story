import axios from 'axios'
import apiUrl from '../../apiConfig'

const getStories = story => { 
    return axios.get(`${apiUrl}/api/v1/stories`)
}

const postStories = (title,content) =>{ 
    return axios.post(`${apiUrl}/api/v1/stories`, { story: {title,content} })
}

const deleteStoryByID =  id => { 
    return axios.delete(`${apiUrl}/api/v1/stories/${id}`)
}


export { getStories , postStories , deleteStoryByID }