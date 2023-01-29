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

  if(tamanho.value==="" || tamanho.value==0 || tamanho.value<4) {
    alert("Preencha o campo de quantidade com um valor valido")
  } else if(tamanho.value!="") {

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


document.querySelector(".btn_copiar").addEventListener("click", function (ev) {
  const resultadoSenha = document.querySelector(".resultado-senha")
  const button = ev.currentTarget
  if (button.innerText === "Copiar") {
    button.innerText = "Copiado!"
    navigator.clipboard.writeText(resultadoSenha.innerText)
  } else {
    button.innerText = "Copiar"
    button.classList.remove("success")
  }
})

btn.addEventListener("click", gerarsenha)