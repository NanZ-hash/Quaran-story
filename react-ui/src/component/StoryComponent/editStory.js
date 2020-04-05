import React from 'react';
export default class EditStory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.story.id,
            title: this.props.story.title,
            content: this.props.story.content
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


    handleSubmit(e){
        e.preventDefault();
        const { id, title, content } = this.state;
        this.props.editStory(id, title, content);
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
            <input  name="title"
                    type="text"
                    placeholder="Title..."
                    value={this.state.title}
                    onChange={this.handleChange} />
                    </div>
                    <div>
            <textarea  name="content"
                    type="text"
                    placeholder="Content"
                    value={this.state.content}
                    onChange={this.handleChange} />
                    </div>
            <button>Update Story</button>
        </form>  
        )
    }
}