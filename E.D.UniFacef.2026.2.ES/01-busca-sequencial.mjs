const frutas = [
  "laranja",
  "maçã",
  "uva",
  "pera",
  "limão",
  "mamão",
  "tangerina",
  "jabuticaba",
];

const numeros = [5, 7, 1, 3, 2, 9, 15, 23, 12];

function buscaSequencial(vetor, valorBusca) {
  //percurso do vetor com for tradicional
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === valorBusca) return i;
  }
  return -1 // valorBusca não existe em vetor
}

console.log("Posição de tangerina: ", buscaSequencial(frutas, "tangerina"))
console.log("Posição de uva: ", buscaSequencial(frutas, "uva"))
console.log("Posição de abacaxi: ", buscaSequencial(frutas, "abacaxi"))
console.log("Posição de 1: ", buscaSequencial(numeros, 1))
console.log("Posição de 50: ", buscaSequencial(numeros, 50))
