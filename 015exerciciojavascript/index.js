let distanceInLY = prompt("Digite a distância em anos-luz")

let chosenOption = prompt(
  "Para qual unidade deseja converter?\n1. Parse(pc)\n2. Unidade Astronomica (AU)" +
    "\n3. Quilômetros (Km)\n\n(Digite o número da opção desejada)"
)

let chosenUnity
let ConvertedDistance

switch (chosenOption) {
  case "1":
    chosenUnity = "Parsec"
    ConvertedDistance = distanceInLY * 0.306601
    break
  case "2":
    chosenUnity = "Unidade Astronomica"
    ConvertedDistance = distanceInLY * 63241.1
    break
  case "3":
    chosenUnity = "Quilometros"
    ConvertedDistance = distanceInLY * 9.5 * Math.pow(10, 12)
    break
  default:
    chosenUnity = "Unidade não indentificada"
    ConvertedDistance = "Conversão fora do escopo"
}

alert(
  "Distancia em anos-luz: " +
    distanceInLY +
    "\n" +
    chosenUnity +
    ": " +
    ConvertedDistance
)
