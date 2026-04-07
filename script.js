function abrirMenu() {
    let menu = document.getElementById("menuEdicao");
    menu.style.display = (menu.style.display === "none") ? "block" : "none";
}

function mudarNome() {
    let novoNome = document.getElementById("inputNome").value;
    if (novoNome !== "") {
        document.getElementById("nome").innerText = novoNome;
        alert("Nome alterado!");
    }
}

function mudarCor() {
    let novaCor = document.getElementById("inputCor").value;
    document.getElementById("foto").style.backgroundColor = novaCor;
    alert("Cor alterada!");
}

function mudarDescricao() {
    let novaDesc = document.getElementById("inputDescricao").value;
    if (novaDesc !== "") {
        document.getElementById("descricao").innerText = novaDesc;
        alert("Descrição alterada!");
    }
}