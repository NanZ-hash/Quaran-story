import React from 'react'
import'./App.css'; 
import JokeContainer from './component/jokeContainer'; 
import StoryContainer from './component/storyContainer'; 
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component {
  render() { 

    return (
      <> 
      <Router>
        {/* <div>
          <Link to="/">Home</Link>
          </div>
         */}
        <div>
          <Link className ={'div'} to="/joke">Tell you a joke</Link>
          <h1> OR </h1>
          <Link className ={'div'} to="/story">Read you a story</Link>
          </div>
      
    <div>
      <Route path="/joke" component={JokeContainer} />
      <Route path="/story" component={StoryContainer} />
    </div>
  </Router>
      </>
    )
  }
}

export default App;
