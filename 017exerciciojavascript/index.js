let spaceship = prompt("Digite o nome da nave")

let charToReplace = prompt("Qual o nome do caracter que você deseja substituir?")

let replacmentChar = prompt("Por qual carcter você deseja substituir?")

let newSpaceship = ""

for(let pos = 0; pos < spaceship.length; pos ++){
  if(spaceship[pos] == charToReplace) {
    newSpaceship += replacmentChar
  }else {
    newSpaceship += spaceship[pos]
  }
}
alert("O novo nome da nave é " + newSpaceship)
/* 
Exercicio abaixo troca da letra e pala letra i

let spaceship = "Helmet"
let newSpaceship = ""

for (let i = 0; i < spaceship.length; i++) {
  if (spaceship[i] == "e") {
    newSpaceship += "i"
  } else {
    newSpaceship += spaceship[i]
  }
}
console.log(newSpaceship)
*/
