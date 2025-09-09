// Exercicio Aula 8 

// Raphaela Cupertino Simões tem 22 anos, pesa 70kg
// tem 1.76 de altura e seu IMC é de ... e ele nasceu em ...

const nome = "Raphela"
const sobrenome = "Cupertino Simões"
const idade = 22
const peso = 70
const alturaEmM = 1.75
const imc= peso / (alturaEmM * alturaEmM)
let anoAtual = 2035
const anoDeNascimento = anoAtual - idade

console.log(nome, sobrenome,"tem", idade,"anos, pesa", peso,"kg, sua altura é de", alturaEmM, "e seu imc é", imc, " e ela nasceu em", anoDeNascimento)

console.log()

//Templete strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg sua altura é de ${alturaEmM} e seu imc é ${imc}, e ela nasceu em ${anoDeNascimento}`)

