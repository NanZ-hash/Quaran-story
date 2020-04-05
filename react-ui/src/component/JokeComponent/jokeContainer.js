import React from 'react'
import Joke from './joke'
import NewJoke from './newJoke'
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
  

 // POST A NEW JOKE 
 addNewJoke=(content)=> {
  postJokes(content)
  .then(res => {
   console.log(res)
   const jokeList = [ ...this.state.jokeList, res.data ]
   this.setState({jokeList})
   })
   .catch(err => {
   console.log(err)
   })
}

// DELETE JOKE
deleteJoke=(id)=> {
  deleteJokeByID(id)
  .then(res => {
      const jokeList = this.state.jokeList.filter(
          joke => joke.id !== id
      )
      this.setState({jokeList})
  })
  .catch(err => console.log(err))
}



  render() { 
 // MAP all over the stories in the storyList
 const allJokes= this.state.jokeList.map( joke => {
  return (<Joke joke={joke}
    key={joke.id} 
    deleteJokeHandler={this.deleteJoke}/>)
 })
    return (
      <> 
      {allJokes}
      <div>
      <NewJoke newJokeSubmit={this.addNewJoke} />
      </div>
      </>
    )
  }
}

export default JokeContainer;
