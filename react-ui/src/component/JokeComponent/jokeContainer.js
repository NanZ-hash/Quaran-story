import React from 'react'
import Joke from './joke'
import { getJokes , postJokes , deleteJokeByID , editJokeByID } from './api'

class JokeContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        jokeList: [],
    }
}

componentDidMount() {
  //GET ALL Jokes ..
  getJokes()
    .then(res => {
      console.log(res)
      this.setState({
        jokeList: res.data
      })
  })
  .catch(err => console.log(err))
}
  
  render() { 
 // MAP all over the stories in the storyList
 const allJokes= this.state.jokeList.map( joke => {
  return (<Joke joke={joke}
    key={joke.id} />)
 })
    return (
      <> 
      {allJokes}
      </>
    )
  }
}

export default JokeContainer;
