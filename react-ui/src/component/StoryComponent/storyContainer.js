import React from 'react'
import Story from './story'
import {NewStory} from './newStory'
import { getStories , postStories , deleteStoryByID} from './api'
export default class StoryContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        storyList: []
    }
    //Binding the functions to the state to change it in the front-end

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

// DELETE STORY

deleteStory=(id)=> {
  deleteStoryByID(id)
  .then(res => {
      const storyList = this.state.storyList.filter(
          story => story.id !== id
      )
      this.setState({storyList})
  })
  .catch(err => console.log(err))
}


// UPDATE STORY








  render() { 
        // MAP all over the stories in the storyList
        const allStories= this.state.storyList.map( story => {
          return (<Story story={story}
             key={story.id}
             deleteStoryHandler={this.deleteStory} />)
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