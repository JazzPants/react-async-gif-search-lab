import React, {Component} from 'react'


//class component
//handles submit form, no longer a "presentational component"
class GifSearch extends Component {
    state = {
        query: ""
    }

    
    //onChange (when we change input), trigger state change (setState) of query
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetchGIFS(this.state.query) //fetchGifs on form submit based on query
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.query} 
                    onChange={event => this.setState({query: event.target.value})} />
                </form>
            </div>
        )
    }

}

export default GifSearch