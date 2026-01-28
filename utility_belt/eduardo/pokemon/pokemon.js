async function buscarPokemons() {
    try {
        const resposta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
        const dados = await resposta.json();
        const lista = dados.results;
        return lista
            .filter(pokemon => pokemon.name.includes('s'))
            .map((pokemon) => {
                return {
                    nome: pokemon.name.toUpperCase()
                }
            })
    } catch (error) {
        console.error("Tivemos um probleminha ao rodar isso... Sentimos muito! \n Erro detecado:", error.message)
        return []
    }
}
buscarPokemons().then(resultado => console.log(resultado));