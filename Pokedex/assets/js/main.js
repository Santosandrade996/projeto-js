const offset = 0
const limit = 10
//const pokemonList = document.getElementById("pokemon-list");
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon) {
     return ` 
          <li class="pokemon">
                <span class="number">#001</span>
                <span class="name"> ${pokemon.name} </span>
                
                <div class="details">
                    <ol class="types">
                        <li class="type">Grass</li>
                        <li class="type">Poison</li>

                    </ol>
                    <img src="/Pokedex/assets/imagens/Bulbasaur.png" alt="${pokemon.name}">
                </div>
                
          </li>`;
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then(pokemons => {

     pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('')

})