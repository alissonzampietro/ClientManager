var PersistClient = function(){
}

// PersistClient.prototype.update = () => {
// }

PersistClient.prototype.save = function (obj) {
  var clients = this.get();
  if(clients == null){
    clients = new Array();
  }
  clients.push(obj);
  var clientes = JSON.stringify(clients);
  localStorage.removeItem('clients');
  localStorage.setItem('clients', clientes);
};

PersistClient.prototype.delete = function (id) {
  var clients = this.get();
  for(client in clients) {
    if(clients[client].id == id) {
      clients.splice(client, 1);
      break;
    }
  }
  var clientes = JSON.stringify(clients);
  localStorage.removeItem('clients');
  localStorage.setItem('clients', clientes);
};

PersistClient.prototype.update = function (obj) {
  var clients = this.get();
  for(client in clients) {
    if(clients[client].id == obj.id) {
      clients[client].id = obj.id;
      clients[client].nome = obj.nome;
      clients[client].email = obj.email;
      clients[client].cpf = obj.cpf;
      clients[client].telefone = obj.telefone;
      clients[client].nascimento = obj.nascimento;
      clients[client].criadoEm = obj.criadoEm;
      clients[client].atualizadoEm = obj.atualizadoEm;
      break;
    }
  }
  var clientes = JSON.stringify(clients);
  localStorage.removeItem('clients');
  localStorage.setItem('clients', clientes);
};

PersistClient.prototype.get = function () {
  return JSON.parse(localStorage.getItem('clients'));
};

PersistClient.prototype.getByID = function (id) {
  var tempClients;
  var allClients = PersistClient.prototype.get();
  for(client in allClients) {
    if(id == allClients[client].id){
      return allClients[client];
    }
  }
};

PersistClient.prototype.getByName = function (name) {
  var tempClients = [];
  var allClients = PersistClient.prototype.get();
  tempClients = Object.keys(allClients).map(
    function (key) {
      var nome = allClients[key].nome;
      if(nome.toLowerCase().indexOf(name.toLowerCase()) > -1){
        return allClients[key];
      }
    }
  );
  return tempClients;
};
