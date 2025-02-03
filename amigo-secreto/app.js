let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;

    if (nomeAmigo == "") {
        alert("Por favor insira um nome.");
        return;
    }

    amigos.push(nomeAmigo);

    let novoAmigo = document.createElement("li");
    novoAmigo.textContent = nomeAmigo;

    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.appendChild(novoAmigo);

    document.getElementById("amigo").value = "";
}

function adicionarAmigo(){
    let nomeAmigo = document.getElementById("amigo").value;

    if(nomeAmigo == ""){
        alert("Por favor insira um nome");
        return;
    }

    amigos.push(nomeAmigo);
    atualizarListaAmigos();
    document.getElementById("amigo").value = "";
}

function sortearAmigo(){

    if(amigos.length == 0){
        alert("não há amigos na lista para sortear!")
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "Amigo sorteado: " + amigoSorteado;
}

function atualizarListaAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = "";
    
    for(let i = 0; i < amigos.length; i++){
        let novoAmigo = document.createElement("li");
        novoAmigo.textContent = amigos[i];
        listaAmigos.appendChild(novoAmigo);
    }
}

document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key == "Enter"){
        adicionarAmigo();
    }
});