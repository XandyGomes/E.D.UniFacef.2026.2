function buscaBinaria(vetor, fnComp){
    let ini = 0
    let fim = vetor.length - 1
    
    while(fim >= ini){
        let meio = Math.floor((ini+fim)/2)

        switch(fnComp(vetor[meio])){
            case 0:
                return meio
            
            case 1:
                ini = meio + 1
                break
            
            default:
                fim = meio - 1
        }
    }
    return -1
}

function comparar(valorMeio, valorBusca = "ALEXANDRE"){
    if(valorBusca === valorMeio.first_name) return 0
    else if(valorBusca > valorMeio.first_name) return 1
    else return -1
}

import {objNomes} from "./data/vetor-obj-nomes.mjs"

console.log("Posição de first_name === ALEXANDRE: ", buscaBinaria(objNomes, comparar))