const inNumero = document.getElementById("inNumero")
const btnAdicionar = document.getElementById("btnAdicionar")
const btnVerificar = document.getElementById("btnVerificar")
const outNumero = document.getElementById("outNumero")
const outResposta = document.getElementById("outResposta")

const numeros = []

const adicionarNumero = () => {
 const numero = Number(inNumero.value)
 if(numero === 0 || isNaN(numero)){
  alert("Digite um valor válido")
  inNumero.focus()
  return
 }

 if(!numeros.includes(numero)){
  numeros.push(numero)
 }else{
  alert("Digite um número diferente")
 }

 outNumero.innerHTML = `Números (${numeros.join(", ")})`
 inNumero.value = ''
 inNumero.focus()
}
 btnAdicionar.addEventListener("click", adicionarNumero)


const verificarOrdem = () => {
  if(numeros.length === 0){
   alert("Quantia de números insuficiente!")
   inNumero.focus()
   return
  }

 const validaOrdem = numeros.every((numero, index) => {
  if(index === numeros.length - 1){
   return true
  }
  return numero < numeros[index + 1]
 })

 console.log(`Retorno do array: ${validaOrdem}`)

 if(validaOrdem){
  outResposta.textContent = "Os números estão em ordem crescente"
 }else{
  outResposta.textContent = "Os números não estão em ordem crescente"
 }
}
 btnVerificar.addEventListener("click", verificarOrdem)
