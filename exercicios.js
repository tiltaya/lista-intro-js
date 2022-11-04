// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt("Altura:")
  const largura = prompt("Largura:")
  const area = altura * largura
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("Insira o ano atual:")
  const anoNasc = prompt("Insira o seu ano de nascimento:")
  const idade = anoAtual - anoNasc
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura)
  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Insira seu nome:")
  let idade = prompt("Insira sua idade:")
  let email = prompt("Insira seu e-mail:")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Diga sua primeira cor favorita")
  const cor2 = prompt("Diga sua segunda cor favorita")
  const cor3 = prompt("Diga sua terceira cor favorita")
  const arrayCores = [cor1, cor2, cor3]
  console.log(arrayCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const num1 = array.shift()
  const num2 = array.pop()
  array.unshift(num2)
  array.push(num1)
  return array

/* shift = tira o primeiro elemento
unshift = insere no primeiro elemento
pop = tira o último elemento
push = adiciona no último elemento */

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual2 = prompt("Insira o ano atual:")
  const anoNasc2 = prompt("Insira o seu ano de nascimento:")
  const anoCNH = prompt("Insira o ano em que sua CNH foi emitida:")

  const idade = anoAtual2 - anoNasc2
  const tempoCart = anoAtual2 - anoCNH
  const cincoAnos = idade <= 20 && tempoCart >= 5
  const dezAnos = idade <= 50 && idade > 20 && tempoCart >= 10
  const quinzeAnos = idade >= 50 && tempoCart >= 15

console.log(cincoAnos || dezAnos || quinzeAnos)


}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const mult400 = ano % 400
  return ano === mult400

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const cond1 = prompt("Você tem mais de 18 anos?")
  const cond2 = prompt("Você possui ensino médio completo?")
  const cond3 = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  const validade = cond1 === "sim" && cond2 === "sim" && cond3 === "sim"
  console.log(validade)

}