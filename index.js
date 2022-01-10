const resultado = document.querySelector(".resultado-senha");
const btn = document.querySelector(".btn_senha")
const checknumber = document.getElementById("numero");
const checksimbolo = document.getElementById("simbolo")
const checkletraAlta = document.getElementById("letrasAlta")
const checkletraBaixa = document.getElementById("letrasBaixa")
const letrasAlta = "ABCDEFGHIJLMNOPQRSTUVXZKWY"
const letrasBaixa = "abcdefghijklmnopqrstuvxzkwy"
const numeros = "123456789"
const simbolos = "!@#$%&*/*-+"
const tamanho = document.getElementById("qtdsenha")

function letraAlta() {
  return letrasAlta[Math.floor(Math.random() * letrasAlta.length)]
}

function letraBaixa() {
  return letrasBaixa[Math.floor(Math.random() * letrasBaixa.length)]
}

function numero() {
  return numeros[Math.floor(Math.random() * numeros.length)]
}

function simbolo() {
  return simbolos[Math.floor(Math.random() * simbolos.length)]
}

function gerarsenha() {
  const len = tamanho.value
  let senha = "";
  if (checkletraAlta.checked) {
    senha += letraAlta()
  }
  if (checkletraBaixa.checked) {
    senha += letraBaixa()
  }
  if (checknumber.checked) {
    senha += numero()
  }
  if (checksimbolo.checked) {
    senha += simbolo()
  }
  for (let i = senha.length; i < len; i++) {
    const x = gerarX();
    senha += x

  }
  resultado.innerHTML = senha;
}

function gerarX() {
  const bancoSenha = []
  if (checknumber.checked) {
    bancoSenha.push(numero())
  }
  if (checksimbolo.checked) {
    bancoSenha.push(simbolo())
  }
  if (checkletraAlta.checked) {
    bancoSenha.push(letraAlta())
  }
  if (checkletraBaixa.checked) {
    bancoSenha.push(letraBaixa())
  }
  if (bancoSenha === 0){
  return""
};

  return bancoSenha[Math.floor(Math.random()* bancoSenha.length)]

}


btn.addEventListener("click", gerarsenha)