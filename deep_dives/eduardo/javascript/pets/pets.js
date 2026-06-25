const gerenciadorPets = (cachorro) => {
    return {
        usuario: "Eduardo",
        racaFavorita: cachorro,
        
        buscarPet: async function() {
            const raca = this.racaFavorita.toLowerCase();
    
            console.log(`Buscando um ${raca} para o usuário ${this.usuario}...`);
            try {
                const response = await fetch(`https://dog.ceo/api/breed/${raca}/images/random`);
                const data = await response.json();
                console.log("Foto encontrada:", data.message);
            } catch (error) {
                console.log("Erro ao buscar:", error.message)
            }
        }
    };
};
const busca = gerenciadorPets('Lhasa');
busca.buscarPet();