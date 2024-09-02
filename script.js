let input = document.getElementById("input-principal");
let button = document.getElementById("botao-adicionar");
let listaCompleta = document.getElementById("tarefas");

let arrayDeTarefas = [];

function mostarNaTela() {
    let novaLista = "";

    arrayDeTarefas.forEach(tarefa => {
        novaLista = novaLista + `
           <li class="item-tarefa">
                <p>${tarefa}</p>
           </li>
        `
    })
    
    listaCompleta.innerHTML = novaLista
}
function cliqueiNoBotao() {
    arrayDeTarefas.push(input.value)
    mostarNaTela()   
}

button.addEventListener("click", cliqueiNoBotao)
