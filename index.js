
var leonardo = window.document.GetElementById("Leonardo")
var bruna = window.document.GetElementById("Bruna")
var samanta = window.document.GetElementById("Samanta")

var setadireita = window.document.GetElementById("SetaDireita")
var setaesquerda = window.document.GetElementById("SetaEsquerda")


function RolarParaDireita() {
   Leonardo.style = "display:none"
   Bruna.style = "display:flex"
   SetaDireita.style = "display:none"
   SetaEsquerda.style = "display:flex"
}

function RolarParaEsquerda() {
   Leonardo.style = "display:flex"
   Bruna.style = "display:none"
   SetaDireita.style = "display:flex"
   SetaEsquerda.style = "display:none"
}