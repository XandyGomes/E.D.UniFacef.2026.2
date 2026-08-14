let pass, comps, trocas;

function selectionSort(vetor) {
  ((pass = 0), (comps = 0), (trocas = 0));
  for (let posSel = 0; posSel < vetor.length - 1; posSel++) {
    pass++;
    let posMenor = posSel + 1;

    for (let i = posMenor + 1; i < vetor.length; i++) {
      if (vetor[posMenor] > vetor[i]) posMenor = i;
      comps++;
    }

    comps++;
    if (vetor[posSel] > vetor[posMenor]) {
      [vetor[posSel], vetor[posMenor]] = [vetor[posMenor], vetor[posSel]];
      trocas++;
    }
  }
}

// let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11];

// selectionSort(nums)
// console.log(nums)

import {nomes} from "./data/nomes-desord.mjs"

selectionSort(nomes)
console.log(nomes)

console.log({pass, comps, trocas})