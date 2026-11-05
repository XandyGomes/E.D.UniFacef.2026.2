import BinarySearchTree from "./lib/BinarySearchTree.mjs";

const arvore = new BinarySearchTree()

arvore.insert(48)
arvore.insert(71)
arvore.insert(15)
arvore.insert(29)
arvore.insert(57)
arvore.insert(1)
arvore.insert(80)
arvore.insert(13)
arvore.insert(19)
arvore.insert(37)
arvore.insert(23)
arvore.insert(22)
arvore.insert(25)
arvore.insert(51)
arvore.insert(64)

let percurso = []

//percurso em-ordem
arvore.inOrderTraversal(val => percurso.push(val))
console.log('Percurso em ordem: ', percurso)

//percurso pré-ordem
percurso = []
arvore.preOrderTraversal(val => percurso.push(val))
console.log('Percurso pré-ordem: ', percurso)

//percurso pós-ordem
percurso = []
arvore.postOrderTraversal(val => percurso.push(val))
console.log('Percurso pós-ordem: ', percurso)

//TESTE DE REMOÇÃO
percurso = []
arvore.inOrderTraversal(val => percurso.push(val))
console.log('ANTES DA REMOÇÃO: ', percurso)

//REMOÇÃO DE UM NODO DE GRAU 0
arvore.remove(64)
percurso = []
arvore.inOrderTraversal(val => percurso.push(val))
console.log('DEPOIS DA REMOÇÃO DO 64: ', percurso)

//REMOÇÃO DE UM NODO DE GRAU 1
arvore.remove(1)
percurso = []
arvore.inOrderTraversal(val => percurso.push(val))
console.log('DEPOIS DA REMOÇÃO DO 1: ', percurso)

//REMOÇÃO DE UM NODO DE GRAU 2
arvore.remove(15)
percurso = []
arvore.inOrderTraversal(val => percurso.push(val))
console.log('DEPOIS DA REMOÇÃO DO 15: ', percurso)

// TESTES DE BUSCA

let existe13 = arvore.search(13)
let existe22 = arvore.search(22)
let existe40 = arvore.search(40)
let existe57 = arvore.search(57)
console.log({existe13, existe22, existe40, existe57})

