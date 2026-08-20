function mergeSort(vetor){
    if( vetor.length < 2) return vetor

    let meio = Math.floor(vetor.length / 2)

    let vetEsq = vetor.slice(0,meio)
    let vetDir = vetor.slice(meio)

    //chamadas recursivas ao mergeSort
    vetEsq = mergeSort(vetEsq)
    vetDir = mergeSort(vetDir)

    //mesclagem ordenada de vetEsq com vetDir
    let posEsq = 0, posDir = 0, vetRes = []

    while(posEsq < vetEsq.length && posDir < vetDir.length){
      if(vetEsq[posEsq]< vetDir[posDir]){
        vetRes.push(vetEsq[posEsq])
        posEsq++
      }  else{
        vetRes.push(vetDir[posDir])
        posDir++
      }
    }

}

let nums = [77,44,22,33,99,55,88,0,66,11]
