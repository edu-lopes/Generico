// Arrow function => Tratamento e requisição de dados (lógica e callbacks)
const buscarFotoNasa = async (data) => {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${data}`);
    const info = await response.json();
    
    return {
        titulo: info.title,
        link: info.url
    };
};
buscarFotoNasa('2006-06-29').then(res => console.log(res));

// Método --> Função dentro de objeto
const explorador = {
    nome: "Eduardo",
    dataDescoberta: "2006-06-29",

    apresentarDescoberta: async function() {
        console.log(`Olá, eu sou o ${this.nome} e vou buscar a foto de ${this.dataDescoberta}...`);
        
        try {
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${this.dataDescoberta}`);
            const data = await response.json();
            console.log(`Sucesso! Título da descoberta: ${data.title}`);
        } catch (e) {
            console.log("Erro na missão!");
        }
    }
};
explorador.apresentarDescoberta();