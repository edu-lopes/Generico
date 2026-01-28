async function buscarMunicipios(uf) {
    try {
        const resposta = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
        const dados = await resposta.json();
        return dados
            .filter(cidade => cidade.nome.startsWith('E'))
            .map(cidade => ({
                    cidade: cidade.nome,
                    regiao: cidade['regiao-imediata']?.nome,
                    microregiao: cidade.microrregiao?.nome
            }));
    } catch (error) {
        console.error("Código não executado! \n Erro detecado:", error.message)
        return [];
    }
}
buscarMunicipios('PR').then(resultado => console.log(resultado));