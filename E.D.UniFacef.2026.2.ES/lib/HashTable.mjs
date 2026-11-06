export default class HashTable {
  constructor(tamanho = 11) {
    this.tamanho = tamanho;
    this.tabela = Array.from({ length: tamanho }, () => []);
    this.quantidade = 0;
  }

  _hash(chave) {
    let h = 0;
    for (let i = 0; i < chave.length; i++) {
      h = (h * 31 + chave.charCodeAt(i)) % this.tamanho;
    }
    return h;
  }

  set(chave, valor) {
    const balde = this.tabela[this._hash(chave)];
    for (const par of balde) {
      if (par[0] === chave) {
        par[1] = valor;
        return;
      }
    }
    balde.push([chave, valor]);
    this.quantidade++;
    if (this.quantidade / this.tamanho > 0.75) {
      this._rehash();
    }
  }

  get(chave) {
    const balde = this.tabela[this._hash(chave)];
    for (const [k, v] of balde) {
      if (k === chave) {
        return v;
      }
    }
    return undefined;
  }

  delete(chave) {
    const balde = this.tabela[this._hash(chave)];
    const i = balde.findIndex(([k]) => k === chave);
    if (i === -1) {
      return false;
    }
    balde.splice(i, 1);
    this.quantidade--;
    return true;
  }

  _rehash() {
    const antiga = this.tabela;
    this.tamanho = this.tamanho * 2 + 1;
    this.tabela = Array.from({ length: this.tamanho }, () => []);
    this.quantidade = 0;
    for (const balde of antiga) {
      for (const [k, v] of balde) {
        this.set(k, v);
      }
    }
  }

  imprimir() {
    this.tabela.forEach((balde, i) => {
      const itens = balde.map(([k, v]) => `${k}:${v}`).join(" -> ");
      console.log(` ${i}: ${itens || "(vazio)"}`);
    });
    console.log(`Quantidade=${this.quantidade} Tamanho=${this.tamanho}`);
  }
}