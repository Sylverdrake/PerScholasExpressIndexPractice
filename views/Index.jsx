import React from 'react'
function Index(props) {
    const pokemon = props.allPokemon;
    const capitalized = (string) => {
        return string.charAt(0).toUpperCase()+string.slice(1)
    } 
return (
<div>
    <nav><h1>Meet the Pokemon</h1>
    <a href="/pokemon/new">Add a Pokemon</a>
    </nav>

    <div>
    {pokemon.map((pokemon, i) => {
        return (
        <div key={i}>
            <a href={`/pokemon/${i}`}>
            <h2>{capitalized(pokemon.name)}</h2>
            </a>
        </div>
        );
    })}
    </div>
</div>
)
}

export default Index