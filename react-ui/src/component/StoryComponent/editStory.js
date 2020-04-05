import React from 'react';
export default class EditStory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
            title: this.props.title,
            content: this.props.content
        }
        // this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // handleSubmit(e){
    //     e.preventDefault();
    //     const { id, title,content } = this.state;
    //     this.props.editStory(id,title,content );
    // }
    
    editStory= e =>{ 
        // this.props.editingStory(this.props.id);
        e.preventDefault();
        const editedStory = { 
            title: this.state.title,
            content: this.state.content,
        }
        this.props.editStory(this.props.id, editedStory);
    };


    render(){
        return(
            <form>
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
                    <button onClick={this.editStory}>Update Story</button>
            {/* <button>Update Story</button> */}
        </form>  
        )
    }
}