class HashTable {
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

const t = new HashTable(11);
const cenario = (n, titulo) => console.log(`\n=== Cenário ${n}: ${titulo}`);

cenario(1, 'set("Ana", 8) em balde vazio');
t.set("Ana", 8);
t.imprimir();

cenario(2, 'set("Eva", 6) colide com Ana');
t.set("Eva", 6);
t.imprimir();

cenario(3, 'set("Maria", 7) em outro balde');
t.set("Maria", 7);
t.imprimir();

cenario(4, 'set("Pedro", 4) colide com Maria');
t.set("Pedro", 4);
t.imprimir();

cenario(5, 'set("Ana", 9) atualiza, não duplica');
t.set("Ana", 9);
t.imprimir();

cenario(6, 'get("Eva"), segunda do balde');
console.log("Valor de Eva ->", t.get("Eva"));

cenario(7, 'get("Zeca") balde vazio e get("Mel") balde cheio');
console.log("Zeca ->", t.get("Zeca"));
console.log("Mel ->", t.get("Mel"));

cenario(8, 'get("ana") minúsculo');
console.log("ana ->", t.get("ana"));

cenario(9, 'delete("Ana"), primeira do balde');
console.log("Ana deletada =>", t.delete("Ana"));
t.imprimir();

cenario(10, 'delete("Zeca") e delete("Mel"), chaves ausentes');
console.log("Zeca deletado =>", t.delete("Zeca"));
console.log("Mel deletada =>", t.delete("Mel"));
t.imprimir();

cenario(11, "set para valor 0 e valor undefined");
t.set("Zeca", 0);
t.set("Lia", undefined);
console.log("get Zeca =>", t.get("Zeca"));
console.log("get Lia =>", t.get("Lia"));
console.log("get Mel =>", t.get("Mel"));
t.imprimir();

cenario(12, "rehash: 8 chaves e carga 0,73, depois a 9 chaves");
t.set("Bia", 7);
t.set("Caio", 5);
t.set("Davi", 9);
console.log(
  "antes: quantidade =",
  t.quantidade,
  "carga =",
  (t.quantidade / t.tamanho).toFixed(2),
);
t.set("Lucas", 5);
console.log(" depois");
t.imprimir();
