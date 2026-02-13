// Cálculo de soma dois números (inteiros ou decimais) -> Via reduce
function soma(...n: number[]): number {
  return n.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}
console.log(`A soma resulta em: ${soma(7, 5, 12)}`);

// Ticket Soma de Vida
interface TicketSimplificado {
  titulo: string;
  tempoDeVidaEmDias: number;
}

const ticketsLancados: TicketSimplificado[] = [
  { titulo: "Exemplo 1", tempoDeVidaEmDias: 3 },
  { titulo: "Exemplo 2", tempoDeVidaEmDias: 1 },
  { titulo: "Exemplo 3", tempoDeVidaEmDias: 6 },
];

function calcularTempoTotal(tickets: TicketSimplificado[]): number {
  return tickets.reduce(
    (acumulador, ticketAtual) => acumulador + ticketAtual.tempoDeVidaEmDias,
    0,
  );
}
console.log(calcularTempoTotal(ticketsLancados));

// Filtro de Status
interface estruturaTicket {
    titulo: string,
    id: number,
    arquivado: boolean,
    lixeira: boolean
}

const allTickets: estruturaTicket[] = [
    { titulo: "Erro Fatal", id: 1, arquivado: false, lixeira: true },
    { titulo: "Pesquisa de Satisfação", id: 2, arquivado: true, lixeira: false },
    { titulo: "Placa Queimada", id: 3, arquivado: false, lixeira: false },
    { titulo: "Telefone Pifou", id: 4, arquivado: false, lixeira: false },
    { titulo: "Gaveta ficou travada", id: 5, arquivado: true, lixeira: false },
    { titulo: "Microondas não gira", id: 6, arquivado: false, lixeira: true }
]

function filtrarTicketsAtivos(tickets: estruturaTicket[]): estruturaTicket[] {
    return tickets.filter(ticket => 
        !ticket.arquivado && !ticket.lixeira
    );
}
console.log(filtrarTicketsAtivos(allTickets));

// Retorno de link
function exibirLink(url?: string): string {
    return url ?? "Link não disponível";
}
console.log(exibirLink(""));

// Gerente de Status - Prioridades
enum Prioridade {
  BAIXA = "Baixa",
  MEDIA = "Média",
  ALTA = "Alta"
};

// Ticket Completo
interface TicketCompleto {
    ticketKey: number,
    titulo: string,
    descricao: string,
    arquivado: boolean,
    lixeira: boolean,
    tempoDeVidaEmDias: number,
    kanbanStatus: {
      descricao: "Em andamento" | "Concluido"
    }
    organizacao: {
      nome: string
    },
    prioridade: Prioridade,
    agente: {
      usuarioKey: number,
      nome: string,
      email: string
    }
    dataCriacao: string,
    solicitante: {
      usuarioKey: number,
      nome: string,
      email: string
      organizacaoPrincipal: {
        nome: string
      }
    }
    seguidores: {
      usuarioKey: number,
      nome: string,
      email: string
    }
};

const ticket: TicketCompleto = {
    ticketKey: 3907,
    titulo: "Cadastro de pendências no veículo e desagregação de motorista",
    descricao: "Gostaria de verificar se, no cadastro da placa do cavalo do motorista, é possível lançar pendências, tais como avarias, manutenções ou qualquer outro tipo de irregularidade.",
    arquivado: false,
    lixeira: false,
    tempoDeVidaEmDias: 12,

    kanbanStatus: {
        descricao: "Em andamento"
    },

    organizacao: {
        nome: "Curitiba PR - Qualidade"
    },
    prioridade: Prioridade.MEDIA,
    agente: {
        usuarioKey: 101,
        nome: "Eduardo Lopes Barros dos Santos",
        email: "eduardo.santos@apklog.com.br"
    },

    dataCriacao: "30-01-2026",

    solicitante: {
        usuarioKey: 22,
        nome: "Karita Infante",
        email: "karita.infante@apk.com.br",
        organizacaoPrincipal: {
            nome: "Curitiba PR - Qualidade"
        }
    },

    seguidores: {
        usuarioKey: 101,
        nome: "Eduardo Lopes Barros dos Santos",
        email: "eduardo.santos@apklog.com.br"
    }
};
console.log(ticket);

function gerarResumo(ticket: TicketCompleto): string {
  const tempo = 
    ticket.tempoDeVidaEmDias > 10 
    ? "[ATENÇÃO: PRAZO CRÍTICO]" 
    : `Prazo: ${10 - ticket.tempoDeVidaEmDias} dias restantes`;
  return `Ticket #${ticket.ticketKey} - Solicitante: ${ticket.solicitante.nome} | Status: ${ticket.kanbanStatus.descricao} \n ${tempo}`
};
console.log(gerarResumo(ticket));

// Gerente de Status
function atualizarPrioridade(ticket: TicketCompleto, novaPrioridade: Prioridade): string {
  ticket.prioridade = novaPrioridade;

  const situacao = 
  (novaPrioridade === Prioridade.ALTA && ticket.tempoDeVidaEmDias > 5)
  ? "Prioridade atualizada, mas requer ação imediata!"
  : "Prioridade atualizada";

  return situacao
};
console.log(atualizarPrioridade(ticket, Prioridade.ALTA));

// Usando Generics
function retornarGenerico<apelido>(valor: apelido): apelido {
  return valor;
}
console.log(retornarGenerico<number>(10));
console.log(retornarGenerico<string>("String!"));