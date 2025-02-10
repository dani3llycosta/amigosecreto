let nomesParticipantes = [];

function adicionarAmigo() {
    let nomeAmigos = document.getElementById('amigo').value;

    if (nomeAmigos == '') {
        alert("Por favor, insira um nome.");
    } else {
        nomesParticipantes.push(nomeAmigos);
        console.log(nomesParticipantes);
        limparCampo();
        atualizarListaAmigos();
    }
}

function limparCampo() {
    let nomes = document.getElementById('amigo');
    nomes.value = '';
}

function atualizarListaAmigos() {
    let listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = "";

    for (let i = 0; i < nomesParticipantes.length; i++) {
        let li = document.createElement('li');
        li.textContent = nomesParticipantes[i];
        listaDeAmigos.appendChild(li);
    }
}

function sortearAmigo() {

    if (nomesParticipantes.length == 0) {
        alert('Inválido, sua lista está vazia.');
        return;
    }

    let sorteadorDeAmigos = nomesParticipantes.length;
    let amigoSorteado = Math.floor(Math.random() * sorteadorDeAmigos);

    let li = document.createElement('li');
    let resultado = document.getElementById('resultado');
    resultado.textContent = 'O amigo sorteado é: ' + nomesParticipantes[amigoSorteado];
    resultado.appendChild(li);
}
