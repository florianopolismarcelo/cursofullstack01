let warpCount = 0
let chosenOption = ""
let spaceship = prompt("Digite o nome da nave")

chosenOption = prompt("Deseja entrar em dobra espacial?\n1. Sim\n2. Não")

while (chosenOption == "1") {
  warpCount += 1
  chosenOption = prompt("Deseja realizar a próxima dobra?\n1. Sim\n2. Não")
}
alert("Nave: " + spaceship + "\nQuantidade de dobra: " + warpCount)

/*
Outros exercicios abaixo:

let velocity = 50
let acceleration = 5

while(velocity >= 100) {
  console.log("Acelerando: Estamos a " + velocity + "Km/s")
  velocity += acceleration // velocity = velocity + acceleration
}
----------------------------------------------------
let constellation = Andromeda
let pos = 0 
let contellationLength = constellation.length

while(pos < contellationLength) {
  if(constellation[pos] == "a" || constellation[pos] == "A"){
    console.log(pos)
  }
  pos += 1
}
-------------------------------------------------------
ATENÇÃO!!! No exercício abaixo iremos utilizar o do while favor pesquisar mais sobre, porque o do while tem que ter um certo cuidado
no caso abaixo ele pediu para imprimir até velocity <= 100 porém vai imprimir até 110Km/s verificar e estudar o porque! 

let velocity = 110
let acceleration = 5

do {
  console.log("Acelerando: estamos a " + velocity + "Km/s")
  velocity += acceleration
} while(velocity <= 100)
*/
