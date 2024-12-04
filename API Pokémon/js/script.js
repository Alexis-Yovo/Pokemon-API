// URL de l'API Pokémon pour obtenir les 20 premiers Pokémon
const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20';

// Fonction pour récupérer et afficher les Pokémon
async function fetchPokemon() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const pokemonList = data.results;

        // Affichage des Pokémon dans le HTML
        const pokemonListElement = document.getElementById('pokemon-list');
        pokemonListElement.innerHTML = '';

        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            const pokemonData = await fetch(pokemon.url);
            const pokemonDetails = await pokemonData.json();

            const pokemonElement = document.createElement('div');
            pokemonElement.classList.add('pokemon-item');

            const pokemonImage = document.createElement('img');
            pokemonImage.src = pokemonDetails.sprites.front_default;
            pokemonImage.classList.add('pokemon-image');

            const pokemonName = document.createElement('p');
            pokemonName.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
            pokemonName.classList.add('pokemon-name');

            pokemonElement.appendChild(pokemonImage);
            pokemonElement.appendChild(pokemonName);

            pokemonListElement.appendChild(pokemonElement);
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des Pokémon:', error);
    }
}

// Lancer la fonction au chargement de la page
fetchPokemon();
