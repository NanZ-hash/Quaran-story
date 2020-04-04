import React from 'react'

const Story = ({story} )  =>
<div className="single-list" key={story.id}>
    <h4>{story.title}</h4>
    <p>{story.content}</p>
    </div>
export default Story;
