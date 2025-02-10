let nomesParticipantes = [];

function adicionarAmigo() {
    let nomeAmigos = document.getElementById('amigo').value;

    if (nomeAmigos == '') {
        alert("Por favor, insira um nome.");
    } else {
        nomesParticipantes.push(nomeAmigos);
        console.log(nomesParticipantes);
        limparCampo();
    }
}

function limparCampo() {
    let nomes = document.getElementById('amigo');
    nomes.value = ''; 
}

