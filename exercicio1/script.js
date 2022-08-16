let pergunta = prompt("coxinha?").toLowerCase()
let valor = 0
while (pergunta === "s") {
    valor = valor + 2.50
    pergunta = prompt("coxinha?").toLowerCase()
}
alert(valor);