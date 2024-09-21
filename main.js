let nomeUsuario = prompt("Qual o seu nome?")
let elemento = document.querySelector("#nome-usuário")

while (nomeUsuario =="" ){
    nomeUsuario = prompt("Qual é seu nome?")

    }
if (nomeUsuario == null){
    elemento.textContent = "Seja bem vindo."
}

else{
    elemento.textContent = nomeUsuario;
}