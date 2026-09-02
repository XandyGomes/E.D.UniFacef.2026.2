  function mergeSort(vetor) {
    //condição de saída
    if (vetor.length < 2) return vetor;

    let meio = Math.floor(vetor.length / 2);

    let vetEsq = vetor.slice(0, meio);
    let vetDir = vetor.slice(meio);

    //chamadas recursivas
    vetEsq = mergeSort(vetEsq);
    vetDir = mergeSort(vetDir);

    //mesclagem ordenada de vetEsq com vetDir

    let posEsq = 0,
      posDir = 0,
      vetRes = [];

    while (posEsq < vetEsq.length && posDir < vetDir.length) {
      if (vetEsq[posEsq] < vetDir[posDir]) {
        vetRes.push(vetEsq[posEsq]);
        posEsq++;
      } else {
        vetRes.push(vetDir[posDir]);
        posDir++;
      }
    }

    let sobra;
    if (posEsq < posDir) {
      sobra = vetEsq.slice(posEsq);
    } else {
      sobra = vetDir.slice(posDir);
    }

    return [...vetRes, ...sobra];
  }

// let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11];

// let numsOrd = mergeSort(nums)

// console.log({numsOrd})

import {nomes} from "./data/nomes-desord.mjs"

let nomesOrd = mergeSort(nomes)

console.log(nomesOrd)