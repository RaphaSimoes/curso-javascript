//*interegindo com o html, Ao usar um prompt, a saida sempre será uma string, independente se o usuário coloca texto ou números e para  alterar a saida de string para number é necessário : variavel = number (variavel)

alert("Seja Bem vindo")
let num1 = prompt("Digite um número de 1 á 10")
let num2 = prompt("Digite mais um número de 1 á 10")

num1 = Number (num1)
num2 = Number (num2)

let resultado = (num1 + num2)
alert(`O resultado dos números somados é ${resultado}`)
