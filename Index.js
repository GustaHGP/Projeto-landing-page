var Leonardo = window.document.getElementById("leonardo");
var Samantha = window.document.getElementById("Samantha");
var Bruna = window.document.getElementById("Bruna");
var setaDireita = window.document.getElementById("seta_direita");
var setaEsquerda = window.document.getElementById("seta_esquerda");

function RolarParaDireita() {
   Leonardo.style="display:none";
   Bruna.style="display:flex"; 
   setaDireita.style="display:none";
   setaEsquerda.style="display:flex; margin-top:55%;";
}

function RolarParaEsquerda() {
    Leonardo.style="display:flex";
    Bruna.style="display:none"; 
    setaDireita.style="display:flex; margin-top:55%;";
    setaEsquerda.style="display:none";    
}