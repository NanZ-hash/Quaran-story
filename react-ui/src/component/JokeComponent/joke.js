import React from 'react' 
 const Joke = ({joke , deleteJokeHandler =e=>e , editingJoke =e=>e}) =>
 <div key={joke.id}> 
     <p>{joke.content}</p>
     <button onClick={ ()=> editingJoke(joke.id)}>Edit</button>
     <button onClick={()=> deleteJokeHandler(joke.id)}>Delete</button>
     </div>
export default Joke

