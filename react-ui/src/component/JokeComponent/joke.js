import React from 'react' 
 const Joke = ({joke}) =>
 <div key={joke.id}> 
     <p>{joke.content}</p>
     </div>
export default Joke

