import BinarySearchTree from "./lib/BinarySearchTree.mjs";

const arvore = new BinarySearchTree()

arvore.insert(48)
arvore.insert(71)
arvore.insert(15)
arvore.insert(29)
arvore.insert(57)
arvore.insert(1)
arvore.insert(80)
arvore.insert(14)
arvore.insert(19)
arvore.insert(37)
arvore.insert(23)
arvore.insert(21)
arvore.insert(25)
arvore.insert(51)
arvore.insert(64)

let percursoIN = []
let percursoPRE = []
let percursoPOS = []

//Percurso em-ordem
arvore.inOrderTraversal(val => percursoIN.push(val))
console.log('Percurso em-ordem:', percursoIN)

//Percurso pré-ordem
arvore.preOrderTraversal(val => percursoPRE.push(val))
console.log('Percurso pré-ordem:', percursoPRE)

//Percurso pós-ordem
arvore.postOrderTraversal(val => percursoPOS.push(val))
console.log('Percurso pós-ordem:', percursoPOS)

//TESTES DE REMOÇÃO
let percursoREM = []
arvore.inOrderTraversal(val => percursoREM.push(val))
console.log('ANTES DAS REMOÇÕES:', percursoREM)

//REMOÇÃO DE UM NODO DE GRAU 0
arvore.remove(64)
percursoREM = []
arvore.inOrderTraversal(val => percursoREM.push(val))
console.log('Após a remoção do 64:', percursoREM)

//REMOÇÃO DE UM NODO DE GRAU 1
arvore.remove(1)
percursoREM = []
arvore.inOrderTraversal(val => percursoREM.push(val))
console.log('Após a remoção do 1:', percursoREM)

//REMOÇÃO DE UM NODO DE GRAU 2
arvore.remove(15)
percursoREM = []
arvore.inOrderTraversal(val => percursoREM.push(val))
console.log('Após a remoção do 15:', percursoREM)

//REMOÇÃO DA RAIZ
arvore.remove(48)
percursoREM = []
arvore.inOrderTraversal(val => percursoREM.push(val))
console.log('Após a remoção do 48:', percursoREM)

percursoREM = []
arvore.preOrderTraversal(val => percursoREM.push(val))
console.log(`O novo valor na raiz é ${percursoREM[0]}`)

//TESTES DE BUSCA
let existe13 = arvore.search(13)
let existe23 = arvore.search(23)
let existe40 = arvore.search(40)
let existe57 = arvore.search(57)
console.log({existe13, existe23, existe40, existe57})