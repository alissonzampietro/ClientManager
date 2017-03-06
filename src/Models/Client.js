var Client = function(){
  this.id;
  this.nome;
  this.email;
  this.cpf;
  this.telefone;
  this.nascimento;
  this.criadoEm;
  this.atualizadoEm;
}

Client.prototype.setClient = (nome, email, cpf, nascimento, telefone, id = null) => {
  if(nome != "" && nome != undefined && nome != null
     && telefone != "" && telefone != undefined && telefone != null
     && email != "" && email != undefined && email != null
     && cpf != "" && cpf != undefined && cpf != null
     && nascimento != "" && nascimento != undefined && nascimento != null) {
       if(id !== null) {
         this.id = id;
         this.atualizadoEm = new Date();
       }else{
         this.id = parseInt(Client.prototype.defineId());
         this.atualizadoEm = null;
       }
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.telefone = telefone;
    var data = nascimento.split("-");
    this.nascimento.dia = data[2];
    this.nascimento.mes = data[1];
    this.nascimento.ano = data[0];
    this.criadoEm = new Date();
    return Client.prototype.getData();
  }else{
    return false;
  }
}

Client.prototype.defineId = () => {
  var persistence = new PersistClient();
  var allClients = persistence.get();
  if(allClients !== null) {
    if(allClients.length == 0) {
      return 1;
    }
    var allIds = Object.keys(allClients).map(function (key) { return allClients[key].id; });
    var maxId = Math.max.apply( null, allIds );
    return parseInt(maxId) + 1;
  }else {
    return 1;
  }
}

Client.prototype.getData = () => {
    var obj = {
      id: this.id,
      nome: this.nome,
      email: this.email,
      cpf: this.cpf,
      telefone: this.telefone,
      nascimento: this.nascimento,
      criadoEm: this.criadoEm,
      atualizadoEm: this.atualizadoEm
    };
    return obj;
};
