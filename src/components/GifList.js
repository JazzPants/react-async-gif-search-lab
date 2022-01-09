import React from 'react'

//functional component returns JSX without render method
//props has to be explicitly given as argument of the function
const GifList = props => {
    return (
        <div>
            {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif" />)}
        </div>
    )
}

export default GifList