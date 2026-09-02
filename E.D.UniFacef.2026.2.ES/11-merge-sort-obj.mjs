let comps = 0,
  divisoes = 0,
  juncoes = 0;

function mergeSort(vetor, fnComp) {
  //condição de saída
  if (vetor.length < 2) return vetor;

  let meio = Math.floor(vetor.length / 2);

  divisoes++;
  let vetEsq = vetor.slice(0, meio);
  let vetDir = vetor.slice(meio);

  //chamadas recursivas
  vetEsq = mergeSort(vetEsq, fnComp);
  vetDir = mergeSort(vetDir, fnComp);

  //mesclagem ordenada de vetEsq com vetDir

  let posEsq = 0,
    posDir = 0,
    vetRes = [];

  while (posEsq < vetEsq.length && posDir < vetDir.length) {
    comps++;

    if (fnComp(vetDir[posDir], vetEsq[posEsq])) {
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

  juncoes++;
  return [...vetRes, ...sobra];
}

import { objMotoristas } from "./data/motoristas-obj-desord.mjs";

let objMotoristasOrd = mergeSort(
  objMotoristas,
  (elem1, elem2) => elem1.nome_motorista > elem2.nome_motorista,
);

console.log(objMotoristasOrd);
console.log({comps, divisoes, juncoes})
