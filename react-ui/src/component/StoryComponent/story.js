import React from 'react'

//passing thr parameters for the story function to operate 
const Story = ({story,deleteStoryHandler= e => e})  =>
<div  key={story.id}>
    <h4>{story.title}</h4>
    <p>{story.content}</p>
    <button onClick={() => deleteStoryHandler(story.id)}> Delete</button>
    </div>
export default Story;
