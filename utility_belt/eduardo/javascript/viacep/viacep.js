const encontrarCEP = async (data) => {
    const response = await fetch(`http://viacep.com.br/ws/${data}/json/`);
    const info = await response.json();

    return {
        cep: info.cep,
        logradouro: info.logradouro,
        bairro: info.bairro,
        cidade: info.localidade,
        estado: info.estado,
        regiao: info.regiao
    };
};
encontrarCEP(83305300).then(res => console.log(res));