import React from 'react'

//functional component returns JSX without render method, has only one return for just rendering
//props has to be explicitly given as argument of the function
//no access to state, it doesn't need state, just a property from GifListContainer
//doesn't need access to lifecycle methods
//HOWEVER hooks will have access to class methods
const GifList = props => {
    return (
        <div>
            {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif" />)}
        </div>
    )
}

export default GifList