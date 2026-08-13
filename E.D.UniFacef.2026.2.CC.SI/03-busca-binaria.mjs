function buscaBinaria(vetor, valorBusca){
    let ini = 0
    let fim = vetor.length - 1

    while(fim >= ini){
        let meio = Math.floor((ini + fim)/2)

        if(valorBusca === vetor[meio]){
            return meio
        }
        else if(valorBusca > vetor[meio]){
            ini = meio + 1
        } else {
            fim = meio - 1
        }
    }
    return -1
}

let nums = [0,11,22,33,44,55,66,77,88,99]

// console.log(`Posição de 99: ${buscaBinaria(nums, 99)}`)
// console.log(`Posição de 100: ${buscaBinaria(nums, 100)}`)

import {nomes} from "./data/vetor-nomes.mjs"

console.log(`Posição de ALEXANDRE: ${buscaBinaria(nomes, "ALEXANDRE")}`)