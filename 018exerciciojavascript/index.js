let spaceshipName = prompt("Qual é o nome da nave?")

let invertedName = ""

for (let i = spaceshipName.length - 1; i >= 0; i--) {
  if (spaceshipName[i] == "e") {
    //Observação: Essa linha + break é para parar na letra (e) quando o nome tiver a letra (e)
    break
  }
  invertedName += spaceshipName[i]
}
alert(
  "Nome original da nave: " +
    spaceshipName +
    "\nNome após ocultação: " +
    invertedName
)
