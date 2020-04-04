import React from 'react'
import axios from 'axios'
import apiUrl from '../apiConfig'
class StoryContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        storyList: []
    }
}
componentDidMount() {
    axios.get(`${apiUrl}/api/v1/stories`)
    .then(response => {
        console.log(response)
        this.setState({
          storyList: response.data
        })
    })
    .catch(error => console.log(error))
}
  render() { 

    return (
      <> 
      <h1> StoryContainer </h1>
      </>
    )
  }
}

export default StoryContainer;
