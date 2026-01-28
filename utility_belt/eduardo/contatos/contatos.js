async function gerenciarContato() {
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
        const dados = await resposta.json();
        return dados
            .filter(pessoa => pessoa.address?.suite && (pessoa.address.suite.includes('Apt.') || pessoa.address.suite.includes('Suite')))
            .map(pessoa => ({
                id: pessoa.id,
                nome: pessoa.name.toUpperCase(),
                endereco: `Mora no endereço ${pessoa.address.suite}`,
                empresa: pessoa.company.name
            }))
    } catch (error) {
        console.error("Não foi encontrado a informação esperada! \n Erro detecado:", error.message)
        return [];
    }
}
gerenciarContato().then(info => console.log(info));

async function encontrarContato(id) {
    try {
        const resposta = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const dados = await resposta.json();
        return dados
        .find(pessoa => pessoa.id === id)
    } catch (error) {
        console.error("Não foi encontrado a informação esperada! \n Erro detecado:", error.message)
        return [];
    }
}
encontrarContato(1).then(info => console.log(info));