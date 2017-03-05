var Client = function(){
  this.nome;
  this.email;
  this.cpf;
  this.telefone;
  this.nascimento;
  this.criadoEm;
  this.atualizadoEm;
}

Client.prototype.setClient = (nome, email, cpf, nascimento, telefone) => {
  if(nome != "" && nome != undefined && nome != null
     && telefone != "" && telefone != undefined && telefone != null
     && email != "" && email != undefined && email != null
     && cpf != "" && cpf != undefined && cpf != null
     && nascimento != "" && nascimento != undefined && nascimento != null) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.telefone = telefone;
    this.nascimento = nascimento;
    this.criadoEm = new Date();
    this.atualizadoEm = null;
    console.log(this.nome, this.email, this.cpf, this.telefone, this.nascimento, this.criadoEm, this.atualizadoEm);
    return Client.prototype.getData();
  }else{
    return false;
  }
}

Client.prototype.getData = () => {
    var obj = {
      nome: this.nome,
      email: this.email,
      cpf: this.cpf,
      telefone: this.telefone,
      nascimento: this.nascimento,
      criadoEm: this.criadoEm,
      atualizadoEm: this.atualizadoEm
    };

    console.log(obj);
    return obj;
};
