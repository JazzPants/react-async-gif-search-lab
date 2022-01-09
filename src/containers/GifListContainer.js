import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

//class component 
//import React, {Component} from 'react'
//class GifListContainer extends Component
//OR:
class GifListContainer extends React.Component {

    state = {
        gifs: []
    }

    
    render(){
        return(
        <div>
            <GifSearch fetchGIFS={this.fetchGIFS} />
            <GifList gifs={this.state.gifs} />)
        </div>
        )
    }

    fetchGIFS = (query="hello") => { //default query is hello
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=5`)
        .then(res => res.json())
        .then(({data}) => {
            this.setState({
                gifs: data.map( gif => ({ url: gif.images.original.url}))
            })
        })
    }

    componentDidMount() {
        this.fetchGIFS();
    }


}

export default GifListContainer