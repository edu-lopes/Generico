const listarFeriadosDoAno = async (ano) => {
    try {
        const response = await fetch(`https://brasilapi.com.br/api/feriados/v1/${ano}`);

        if (!response.ok) {
            throw new Error(`Erro ao buscar feriados de ${ano}`);
        }

        const feriados = await response.json();

        const listaFormatada = feriados.map(feriado => {
            return {
                nome: feriado.name,
                data: feriado.date,
                tipo: feriado.type
            };
        });

        return listaFormatada;

    } catch (error) {
        console.error("Erro na requisição:", error.message);
        return [];
    }
}

listarFeriadosDoAno(2026).then(lista => {
    console.log("--- Lista de Feriados ---");
    lista.forEach(f => console.log(`${f.data}: ${f.nome} - ${f.tipo}`));
});