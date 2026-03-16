import { createHash } from "crypto";

function criaHash(senha) {
  return createHash("sha256").update(senha).digest("hex");
}

console.log(criaHash("uma staring qualquer"));

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    this.hash = criaHash(senha);
  }

  autentica(nome, senha) {
    if (nome === this.nome && this.hash === criaHash(senha)) {
      console.log("Usuario autenticado com sucesso");
      return true;
    } else {
      console.log("Usuario ou senha incorretos");
      return false;
    }
  }
}

const usuario = new Usuario('Leticia', 'minhaSenha');
console.log(usuario)

usuario.autentica('Leticia', 'minhaSenha')

usuario.autentica('Leticia', 'minhapenha')