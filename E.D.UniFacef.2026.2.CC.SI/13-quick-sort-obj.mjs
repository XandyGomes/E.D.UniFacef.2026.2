let pass = 0,
  comps = 0,
  trocas = 0;

function quickSort(vetor, fnComp, ini = 0, fim = vetor.length - 1) {
  //só trabalhamos se a aregião do vetor tiver, pelo menos, 2 elementos
  if (fim <= ini) return; //condição de saída

  pass++;
  const pivot = fim; //pivot

  let div = ini - 1; //divisor ded regiões(inicialmente, antes do início do vetor)

  for (let i = ini; i < fim; i++) {
    comps++;
    if (fnComp(vetor[pivot], vetor[i])) {
      div++;
      if (div !== i) {
        [vetor[i], vetor[div]] = [vetor[div], vetor[i]];
        trocas++;
      }
    }
  }

  div++;
  //colocamos o pivô em seu lugar definitivo

  comps++;
  if (fnComp(vetor[div], vetor[pivot]) && div !== pivot) {
    [vetor[div], vetor[pivot]] = [vetor[pivot], vetor[div]];
    trocas++;
  }

  quickSort(vetor, fnComp, ini, div - 1);
  quickSort(vetor, fnComp, div + 1, fim);
}

import { objMotoristas } from "./data/motoristas-obj-desord.mjs";

quickSort(
  objMotoristas,
  (elem1, elem2) => {
  if (elem1.razao_social !== elem2.razao_social) {
    return elem1.razao_social > elem2.razao_social;
  }
  return elem1.nome_motorista > elem2.nome_motorista;
}
);

console.log(objMotoristas);

console.log({ pass, comps, trocas });
