// Cálculo de soma entre dois números (inteiros ou decimais)
function somar(...n) {
    let soma = 0;

    for (let i = 0; i < n.length; i++) {
        soma += n[i]
    }
    return soma;
}
console.log(`A soma resulta em: ${somar()}`);

// Cálculo de subtração entre dois números (inteiros ou decimais)
//a = 0 e b = 0 para não aparece NaN no console
function subtracao(a = 0, b = 0) {
    let sub = a - b;
    return sub;
}
console.log(`A subtração resulta em: ${subtracao()}`);

// Cálculo de soma entre dois números (inteiros ou decimais)
// Condição para não voltar como 1
function multiplicar(...n) {
    let mult = 1;

    for (let i = 0; i < n.length; i++) {
        mult *= n[i]
    }
    return mult;
}
console.log(`A multiplicação resulta em: ${multiplicar()}`);

// Cálculo de divisão entre dois números
// Condição inicial a = 0 e b = 0 retorna 0 explícito para não aparece NaN no console (0/0 = infinito)
function divisao(a = 0, b = 0) {
    if (a === 0 && b === 0) return 0;
    return a / b;
}
console.log(`A divisão resulta em: ${divisao()}`);


// Cálculo de Raiz quadrada (casas decimais em 3)
function raiz(...n) {
    for (let i = 0; i < n.length; i++) {
        console.log(`A raiz de ${n[i]} é: ${Math.sqrt(n[i]).toFixed(3)}`);
    }
}
raiz(0)

// Cálculo de elevação exponencial
// Feito com variaveis para console aparecer formatado
function expo(a, b) {
    let calculo = a ** b;
    return calculo;
}

console.log(`O cálculo resulta em: ${expo(10, 2)}`);

// Cálculo da Fórmula de Bhaskara
function bhaskara(a, b, c) {
    // Estrutura de uma equação do segundo grau: ax² - bx + c = 0

    // Delta = b²-4ac
    let delta = (b ** 2) - (4 * a * c);

    if (delta < 0) {
        delta = "A equação não possui raízes reais.";
    }

    // Raiz do delta
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);

    return {
        delta: delta,
        x1: x1,
        x2: x2
    };
}

// Valores para: a, b, c
let resultado = bhaskara(1, -5, 4);

console.log(`Delta: ${resultado.delta}`);
console.log(`x¹ resulta em: ${resultado.x1.toFixed(2)}`);
console.log(`x² resulta em: ${resultado.x2.toFixed(2)}`);


// Cálculo o número primo
function par(n) {
    if (n % 2 === 0) {
        console.log(`O número ${n} é par!`);
    }
    else {
        console.log(`O número ${n} é ímpar`);
    }
}
par(7)

// Condição para ver se é triângulo
function verificaTriangulo(a, b, c) {
    if ((a + b > c) && (b + c > a) && (a + c > b)) {
        return `É um triângulo válido`;
    } else {
        return `Não é um triângulo válido`
    }
}
console.log(verificaTriangulo(12, 10, 20))

// Cálculo de área do triângulo
function triangulo(c1, c2) {
    let area = (c1 * c2) / 2;
    return area
}
console.log(`A área do triângulo é: ${triangulo(3, 8)}`);

// Cálculo de hipotenusa usando teorema de Pitágoras
function pitagoras(c1, c2) {
    somaCatetos = Math.pow(c1, 2) + Math.pow(c2, 2);
    hipotenusa = Math.sqrt(somaCatetos).toFixed(3);
    return hipotenusa;
}
console.log(`O valor da hipotenusa é: ${pitagoras(6, 4)}`);

// Cálculo de área do quadrado
function quadrado(l) {
    return l ** 2
}
console.log(`A área do quadrado é: ${quadrado(3)}`);

// Cálculo de área do retângulo
function retangulo(b, h) {
    return b * h
}
console.log(`A área do retângulo é: ${retangulo(7, 10)}`)

// Cálculo de média
function media(...n) {
    let qtd = 0;
    let soma = 0;
    for (let i = 0; i < n.length; i++) {
        soma += n[i];
        qtd++;
    }
    let media = (soma / qtd);
    return media;
}
console.log(`A média resulta em: ${media(3)}`)

// Cálculo de maior valor entre 3 números
function maior(a, b, c) {
    let array = [a, b, c]
    let calculo = Math.max(...array);
    return calculo;
}
console.log(`O maior número é: ${maior(15, 9, 10)}`);

// Cálculo de soma vinda de um array
function somaArray(n) {
    const reducer = (atual, proximo) => atual + proximo
    const soma = n.reduce(reducer, 0)
    return soma;
}
console.log(`A soma do array é: ${somaArray([10, 10, 10, 10])}`);

// Notas de um aluno e condição de aprovação
function condicAprov(numero) {
    return numero >= 7;
}

function notas(...n) {
    return n.filter(condicAprov);
}
const aprovados = notas(5, 9, 9.90, 7.0, 7.01, 6.90)
console.log(`Notas dos alunos que passaram: ${aprovados.join(' | ')}`)

// Cálculo de Maior e Menor número de um array
function maiorMenor(n) {
    let maior = Math.max(...n)
    let menor = Math.min(...n)
    let qtd = { maior, menor }
    return qtd
}
console.log(maiorMenor([19, 23, 10, 6, 49]))

// Retorna vogais de uma função
function vogais(texto) {
    let vogais = 'aeiouAEIOU';
    let qtd = 0;
    for (let i = 0; i < texto.length; i++) {
        if (vogais.includes(texto[i])) {
            qtd++
        }
    }
    return qtd;
}
console.log(`Quantidade de vogais no texto: ${vogais('JavaScript')}`)

// Formatar moeda no formato brasileiro
function formatarBRL(valor) {
    let valorFormatado = Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
    return valorFormatado
}
console.log(formatarBRL(1200.55))

// Buscar um produto
function buscarNome(lista, termo) {
    const prod = [
        { nome: "Notebook", preco: 3000 },
        { nome: "Abajur", preco: 50 },
        { nome: "Caneta", preco: 1.45 }
    ]

    const encontrar = prod.find(lista => lista.nome == termo)
    return encontrar;
}
console.log(buscarNome(null, 'Abajur'))

// Aumento de preço dos produtos acima
function aumentoPreco(porcentagem) {
    const prod = [
        { nome: "Notebook", preco: 3000 },
        { nome: "Abajur", preco: 50 },
        { nome: "Caneta", preco: 1.45 }
    ]

    return prod.map((item) => {
        return {
            ...item,
            preco: item.preco + (item.preco * (porcentagem / 100))
        }
    })
}
console.log(aumentoPreco(30))

// Pegar iniciais de nomes
function pegarIniciais(nomeCompleto) {
    const nomes = nomeCompleto.split(' ');
    let iniciais = '';

    for (let nome of nomes) {
        if (nome.length > 0) {
            iniciais += nome[0].toUpperCase();
        }
    }

    return iniciais;
}
console.log(pegarIniciais('Eduardo Lopes Barros dos Santos'));

// Mostrar quantidades de maiores e menores de idade
function idadeMaiorMenor(idades) {
    let maiores = 0;
    let menores = 0;
    for (let i = 0; i < idades.length; i++) {
        if (idades[i] >= 18) {
            maiores++;
        }
        else {
            menores++;
        }
    }
    let qtd = { maiores, menores }
    return qtd
}
console.log(idadeMaiorMenor([12, 26, 44, 10, 13, 18, 24, 22]))

// Inversão de string
function inverterString(palavra) {
    let nova = ''
    for (let i = palavra.length - 1; i >= 0; i--) {
        nova += palavra[i]
    }
    return nova
}
console.log(inverterString('Caju'));

// Calcular fatorial
let n = 170;
function fatorial(n) {
    if (n == 0) {
        return `0`
    }
    let ft = 1;
    for (let i = 1; i <= n; i++) {
        ft *= i;
    }
    return ft;
}
console.log(`Fatorial de ${n} é igual a: ${fatorial(n)}`)

// Frequência de palavras
let frase = 'Javascript é uma linguagem de programação diferente de java'
function lerFrase(frase) {
    let palavras = frase.toLowerCase().split(' ');
    let contagem = {};
    for (let i = 0; i < palavras.length; i++) {
        let palavraAtual = palavras[i];

        if (contagem[palavraAtual]) {
            contagem[palavraAtual]++;
        } else {
            contagem[palavraAtual] = 1;
        }
    }
    return contagem;
}
console.log(lerFrase(frase));

function fibonacci(n) {
    let sequencia = [0, 1];

    if (n <= 1) return [0];
    if (n === 2) return sequencia;

    for (let i = 2; i < n; i++) {
        let proximo = sequencia[i - 1] + sequencia[i - 2];
        sequencia.push(proximo);
    }

    return sequencia;
}
console.log(fibonacci());

// Tabuada dinâmica
function tabuada(n) {
    let calculo = [];
    for (let i = 1; i <= 10; i++) {
        let numeros = {
            [`${n} x ${i}`]: n * i
        };
        calculo.push(numeros)
    };
    return calculo;
}
console.log(tabuada(7));

// Método de Gauss
function gauss(n) {
    let resultado;
    resultado = (n * (n + 1)) / 2;
    return resultado;
}

console.log(`A soma dos números usando Gauss: ${gauss(10)}`);

// Filtrar números de uma lista
function filtroNumero() {
    listaAtual = [12, 5, 8, 130, 44];
    listaNova = [];
    for (let i = 0; i < listaAtual.length; i++) {
        if (listaAtual[i] > 10) {
            listaNova.push(listaAtual[i])
        }
    }
    return listaNova;
}
console.log(filtroNumero());

// Média de Notas de Alunos
function mediaNota() {
    let nota = 0;
    let notas = [
        { materia: "Matemática", nota: 10 },
        { materia: "Filosofia", nota: 8.5 },
        { materia: "Biologia", nota: 7 },
        { materia: "História", nota: 9 },
        { materia: "Educação Física", nota: 10 },
        { materia: "Português", nota: 8 },
    ];
    for (let i = 0; i < notas.length; i++) {
        nota += notas[i].nota
    }
    let media = nota / notas.length;
    return media;
}
console.log(`A média das notas resulta em: ${mediaNota()}`);

// Encontrar um nome em um array
function findNome(nome) {
    let lista = ["Eduardo", "Lucas", "Davi", "Murilo", "Matheus", "Luis", "Gustavo"];
    let i = 0;
    while (true) {
        if (lista[i] === nome) {
            return `O nome ${nome} existe na lista`
        }
        if (i >= lista.length) {
            return `O nome ${nome} não existe na lista`
        }
        i++;
    }
}
console.log(findNome('Eduardo'));

// Printa um triângulo de X linhas
function printTriangulo(n) {
    for (let i = 1; i <= n; i++) {
        console.log("*".repeat(i));
    }
}
printTriangulo(10);

// Função de verificar número primo
function primo(n) {
    if (n < 2) {
        return console.log(`O número ${n} não é primo!`);
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return console.log(`O número ${n} não é primo!`);
        }
    }
    return console.log(`O número ${n} é primo!`)
}
primo(7);

// Caixa Eletrônico
function caixaEletronico(valor) {
    const dinheiroBr = [100, 50, 20, 10, 5, 2, 1];
    const resultado = {};
    let valorSobra = valor;

    for (let i = 0; i < dinheiroBr.length; i++) {
        const nota = dinheiroBr[i];
        const quantidade = Math.floor(valorSobra / nota);

        resultado[`Notas de ${nota}`] = quantidade;
        valorSobra = (valorSobra - quantidade * nota).toFixed(2);
    }

    return resultado;
}
console.log(caixaEletronico(233));

// Filtrar produtos da categoria desejada
function filtrarEletronicos(lista) {
    return lista
        .filter(produto => produto.categoria === 'Eletrônicos')
        .sort((a, b) => a.preco - b.preco);
}

const carrinho = [
    { nome: "Camiseta", preco: 50, categoria: "Vestuário" },
    { nome: "Mouse", preco: 120, categoria: "Eletrônicos" },
    { nome: "Monitor", preco: 900, categoria: "Eletrônicos" },
    { nome: "Meia", preco: 15, categoria: "Vestuário" },
    { nome: "Teclado", preco: 200, categoria: "Eletrônicos" }
];

console.log(filtrarEletronicos(carrinho));

// Gestor de Biblioteca
function livrosLidos(lista) {
    return lista
        .filter(livro => (livro.lido === false) && (livro.autor === "J.R.R. Tolkien"))
        .map(livro => livro.titulo);
}
const livros = [
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", lido: true },
    { titulo: "O Hobbit", autor: "J.R.R. Tolkien", lido: false },
    { titulo: "Harry Potter", autor: "J.K. Rowling", lido: true },
    { titulo: "1984", autor: "George Orwell", lido: true },
    { titulo: "O Silmarillion", autor: "J.R.R. Tolkien", lido: false }
];
console.log(livrosLidos(livros));