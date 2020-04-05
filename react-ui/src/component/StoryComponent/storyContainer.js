import React from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Story from './story'
import { getData } from '../api'
class StoryContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        storyList: []
    }
}

componentDidMount() {
  //GET ALL STORIES ..
    getData()
    .then(res => {
      console.log(res)
      this.setState({
        storyList: res.data
      })
  })
  .catch(err => console.log(err))
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
