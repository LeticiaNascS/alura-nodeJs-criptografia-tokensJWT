import { createHash } from "crypto";

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    this.hash = this.criaHash(senha);
  }

  criaHash(senha) {
    return createHash("sha256").update(senha).digest("hex");
  }

  autentica(nome, senha) {
    if (nome === this.nome && this.hash === this.criaHash(senha)) {
      console.log("Usuario autenticado com sucesso");
      return true;
    } //else {
      //console.log("Usuario ou senha incorretos");
      //return false;
   // }
  }
}

const usuario = new Usuario("Leticia", "1337");

for (let senhaTeste = 0; senhaTeste<10000; senhaTeste ++){
    if(usuario.autentica('Leticia', senhaTeste.toString())){
        console.log('A senha do usuariao e ', senhaTeste)
    }
}