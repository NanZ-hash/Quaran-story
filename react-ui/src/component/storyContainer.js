import React from 'react'
import axios from 'axios'
import apiUrl from '../apiConfig'
import Story from './story'
class StoryContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        storyList: []
    }
}
componentDidMount() {

  //GET ALL STORIES ..
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
        // MAP all over the stories API
        const allStories= this.state.storyList.map( story => {
          return (<Story story={story} key={story.id} />)
         })




         
    return (
      <> 
      <h1>Story </h1>
      <div>
      {allStories}
      </div>
      </>
    )
  }
}

export default StoryContainer;
