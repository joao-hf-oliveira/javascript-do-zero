console.log("Projeto JavaScript do Zero iniciado");

const botaoIntro = document.getElementById("btn-intro");
const mensagemIntro = document.getElementById("mensagem-intro");

botaoIntro.addEventListener("click", function(){
    mensagemIntro.textContent = "JavaScript está funcionando. "
})