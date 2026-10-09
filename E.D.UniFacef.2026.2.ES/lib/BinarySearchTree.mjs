//classe que representa a unidade de informação da árvore binária de busca
class Node {
  constructor(val) {
    this.data = val; // armazena a informação relevante
    this.left = null; // ponteiro para subárvore esquerda
    this.right = null; // ponteiro para subárvore direita
  }
}

export default class BinarySearchTree {
  #root;

  constructor() {
    this.#root = null;
  }

  //método para efetuar inserção na ABB
  insert(val) {
    const inserted = new Node(val);

    //1º caso: árvore vazia
    //o primeiro nodo fica sendo a raiz da árvore
    if (this.#root === null) {
      this.#root = inserted;
    }
    //2º caso: inserção recursiva, percorrendo a àrvore recursivamente
    else {
      this.#insertNode(inserted, this.#root);
    }
  }
  //método PRIVADO que insere um novo nodo na árvore
  #insertNode(inserted, root) {
    //1º caso: o valor a ser inserido é MENOR que o valor da raiz => inerção ocorre á ESQUERDA da raiz
    if (inserted.data < root.data) {
      //se a posição á esquerda da raiz está desocupada, faz a inserção
      if (root.left === null) {
        root.left = inserted;
      }
      //senão, reinicia o processo de inserção, recursivamente com a subávore esquerda como raiz
      else {
        this.#insertNode(inserted, root.left);
      }
    }
    //2º caso: o valor a ser inserido é MAIOR que o valor da raiz => inerção ocorre á DIREITA da raiz
    else if (inserted.data > root.data) {
      //se a posição à direita da raiz está desocupada, faz a inserção
      if (root.right === null) {
        root.right = inserted;
      }
      //senão, reinicia o processo de inserção, recursivamente com a subávore direita como raiz
      else {
        this.#insertNode(inserted, root.right);
      }
    }
    //3º caso: o valor a ser inserido é IGUAL ao valor da raiz
    else {
      this.#insertNode(inserted, root.left);
    }
  }

  /*
    PERCURSOS

    Método que executa o percurso em-ordem (in-order traversal) na árvore
        Ordem do percurso:
        1º ~> percorre recursivamente em-ordem a subárvore esquerda
        2º ~> visita a raiz
        3º ~> percorre recursivamente em-ordem a subárvore direita
  */

  inOrderTraversal(fnCallback, root = this.#root) {
    if (root !== null) {
      this.inOrderTraversal(fnCallback, root.left); //1º
      fnCallback(root.data); //2º
      this.inOrderTraversal(fnCallback, root.right); //3º
    }
  }

  /*
    Método que executa o percurso pré-ordem (pre-order traversal) na árvore
        Ordem do percurso:
        1º ~> visita a raiz
        2º ~> percorre recursivamente em-ordem a subárvore esquerda
        3º ~> percorre recursivamente em-ordem a subárvore direita
  */

  preOrderTraversal(fnCallback, root = this.#root) {
    if (root !== null) {
      fnCallback(root.data); //1º
      this.preOrderTraversal(fnCallback, root.left); //2º
      this.preOrderTraversal(fnCallback, root.right); //3º
    }
  }

  /*
    Método que executa o percurso pós-ordem (post-order traversal) na árvore
        Ordem do percurso:
        2º ~> percorre recursivamente em-ordem a subárvore esquerda
        3º ~> percorre recursivamente em-ordem a subárvore direita
        1º ~> visita a raiz
  */

  postOrderTraversal(fnCallback, root = this.#root) {
    if (root !== null) {
      this.postOrderTraversal(fnCallback, root.left); //1º
      this.postOrderTraversal(fnCallback, root.right); //2º
      fnCallback(root.data); //3º
    }
  }

  /* 
    Método PRIVADO que retorna o nodo de MENOR valor da árvore
  */
  #minNode(root) {
    //a partir da raiz, percorre à esquerda enquanto possível
    while (root !== null && root.left !== null) {
      root = root.left;
    }
    return root;
  }

  /* 
    Método PRIVADO que retorna o nodo de MAIOR valor da árvore
  */
  #maxNode(root) {
    //a partir da raiz, percorre à direita enquanto possível
    while (root !== null && root.right !== null) {
      root = root.right;
    }
    return root;
  }


}
