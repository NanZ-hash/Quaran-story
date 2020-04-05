import React from 'react';

export default class EditJoke extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.joke.id,
            content: this.props.joke.content
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


    handleSubmit(e){
        e.preventDefault();
        const { id, content } = this.state;
        this.props.editJoke(id,content);
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
            <textarea  name="content"
                    type="text"
                    placeholder="Content"
                    value={this.state.content}
                    onChange={this.handleChange} />
                    </div>
            <button>Update Joke</button>
        </form>  
        )
    }
}