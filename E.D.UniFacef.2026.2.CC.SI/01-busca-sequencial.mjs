const frutas = ['laranja', 'maça', 'uva', 'pera', 'jabuticaba', 'limão', 'mamão', 'tangerina']
const numeros = [1, 5, 7, 10, 2, 24, 15]

function buscaSequencial(vetor, valorBusca){
    //percurso do vetor com for tradicional
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] === valorBusca) return i
    }
    return -1 // valorBusca não existe no vetor
}

console.log("Buscando tangerina: ", buscaSequencial(frutas, "tangerina"))
console.log("Buscando limão: ", buscaSequencial(frutas, "limão"))
console.log("Buscando morango: ", buscaSequencial(frutas, "morango"))
console.log("Buscando o número 5: ", buscaSequencial(numeros, 5))
console.log("Buscando o número 50: ", buscaSequencial(numeros, 50))