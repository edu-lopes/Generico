const numeros = [];

function adicionarNumero() {
    const input = document.getElementById("iptNumero");
    const log = document.getElementById("log");

    const valor = Number(input.value);

    if (input.value === "") return;
    if (Number.isNaN(valor)) return;

    numeros.push(valor);

    log.textContent = numeros.join(", ");

    input.value = "";
    input.focus();
}