import React from 'react'
import'./App.css'; 
import JokeContainer from './component/JokeComponent/jokeContainer'; 
import StoryContainer from './component/StoryComponent/storyContainer'; 
import Library from './component/library'
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
          <div>
          <Link className ={'div'} to="/library">library</Link>
          </div>
          </div>
      
    <div>
      <Route path="/joke" component={JokeContainer} />
      <Route path="/story" component={StoryContainer} />
      <Route path="/library" component={Library}/>
    </div>
  </Router>
      </>
    )
  }
}

export default App;
