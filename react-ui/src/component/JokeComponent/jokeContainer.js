import React from 'react'
import Joke from './joke'
import NewJoke from './newJoke'
import EditJoke from './editJoke'
import { getJokes , postJokes , deleteJokeByID , editJokeByID } from './api'

class JokeContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        jokeList: [],
        editingJokeById: null,
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

// passing the Id for the item we want to edit in the state..
editingJoke= id => { 
  this.setState ({editingJokeById: id})
}
// UPDATE JOKE
editJoke =(id, content) =>{
  editJokeByID(id, content)

  .then(res => {
      console.log(res);
      const jokeList = this.state.jokeList;
      jokeList[id-1] = {id, content}
      this.setState(() => ({
        jokeList, 
        editingJokeById: null
      }))
  })
  .catch(err => console.log(err));
}


  render() { 
 // MAP all over the stories in the storyList
 const allJokes= this.state.jokeList.map( joke => {
  if ( this.state.editingJokeById === joke.id ) { 
  return (<EditJoke 
    joke={joke} 
    key={joke.id} 
    editJoke={this.editJoke} />)
} else {
  return (<Joke joke={joke}
    key={joke.id} 
    deleteJokeHandler={this.deleteJoke}
    editingJoke={this.editingJoke} />)
  }
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
