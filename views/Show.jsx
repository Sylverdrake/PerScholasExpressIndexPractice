import React from 'react'

function Show(props) {
    const pokemon = props.pokemon
    const capitalized = (string) => {
        return string.charAt(0).toUpperCase()+string.slice(1)
    }
return (
    <div>
        <h1>Gotta Catch 'em All!</h1>
        <nav><a href='http://localhost:3000/pokemon'>Index</a></nav>
        {/* Needs http:// or else it won't recognize the protocol */}
            <h2>{capitalized(pokemon.name)}</h2>
        <div><img src={pokemon.img+".jpg"} alt=''/></div>
    </div>
)
}

export default Show