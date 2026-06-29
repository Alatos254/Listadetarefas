let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btnAdd');
let main = document.getElementById('areaLista');

function addTarefa() {
    let valorInput = input.value;
    if ((valorInput !=="") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador;

        let novoItem = `<div id="${contador}" class="item">
            <div onclick="marcaTarefa(${contador})" class="itemIcone">
                 <i id="icone_${contador}"class="mdi mdi-circle-outline"></i>
            </div>
            <div onclick="marcaTarefa(${contador})" class="itemNome">
                ${valorInput}
            </div>
            <div class="itemBotao">
                <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
            </div>

        </div>`;

        main.insertAdjacentHTML('beforeend', novoItem);
        input.value = "";
        input.focus();
    }
}

function deletar (id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcaTarefa (id) {
    let item = document.getElementById(id);
    let icone = document.getElementById('icone_' + id);
    
    item.classList.toggle('itemFeito');
    
    if (item.classList.contains('itemFeito')) {
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);

    } else {
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})