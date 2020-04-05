import React from 'react'
import Story from './story'
import {NewStory} from './newStory'
import { getStories , postStories } from './api'
export default class StoryContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        storyList: []
    }
    this.addNewStory = this.addNewStory.bind(this)
}

componentDidMount() {
  //GET ALL STORIES ..
  getStories()
    .then(res => {
      console.log(res)
      this.setState({
        storyList: res.data
      })
  })
  .catch(err => console.log(err))
}

 // POST A NEW STORY 
 addNewStory=(title,content)=> {
   postStories(title,content)
   .then(res => {
    console.log(res)
    const storyList = [ ...this.state.storyList, res.data ]
    this.setState({storyList})
    })
    .catch(err => {
    console.log(err)
    })
 }










  render() { 
        // MAP all over the stories in the storyList
        const allStories= this.state.storyList.map( story => {
          return (<Story story={story} key={story.id} />)
         })

    return (
      <> 
      <h1>Story </h1>
      <div>
      {allStories}
      </div>
      <div>
      <NewStory newStorySubmit={this.addNewStory} />
      </div>
      </>
    )
  }
}