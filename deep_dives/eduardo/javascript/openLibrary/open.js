const consultarLivros = async (livro) => {
    try {
        const request = await fetch(`https://openlibrary.org/search.json?q=${livro}`);
        const data = await request.json();
        return data.docs
        .filter(item => item.title.toLowerCase().includes(livro.toLowerCase()))
        .map(item => ({
            titulo: item.title,
            autor: item.author_name ? item.author_name[0] : "Autor Desconhecido",
            ano: item.first_publish_year
        }))
        .slice(0, 5)
    } catch (error) {
        console.log("Não foi possível prosseguir. /n Erro encontrado: ", error.message);
        return;
    }
}
consultarLivros('JavaScript').then(info => console.log(info));


// Teste de Método
const biblioteca = {
    nome: "Central Tech",
    livrosDisponiveis: ["JavaScript Eloquente", "Código Limpo"],
    
    mostrarLivros: function() {
        this.livrosDisponiveis.forEach((livro) => {
            console.log(`${livro} está disponível na biblioteca ${this.nome}`);
        });
    }
};

biblioteca.mostrarLivros();

const buscador = {
    categoriaPadrao: "TypeScript",
    
    buscar: async function(tema) {      
        const termoBusca = tema || this.categoriaPadrao;  
        const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(termoBusca)}`);
        const data = await response.json();
        
        const resultados = data.docs
            .filter(livro => livro.title.toLowerCase().includes(termoBusca.toLowerCase()))
            .slice(0, 3)
            .map(livro => ({
                msg: `Livro de ${termoBusca}: ${livro.title}`
            }))
        
        console.log(resultados.length > 0 ? resultados: `Nenhum livro exato de ${termoBusca}`);
    }
};

buscador.buscar(); 
buscador.buscar("React");