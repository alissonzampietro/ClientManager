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
      if(nome.indexOf(name) > -1){
        return allClients[key];
      }
    }
  );
  return tempClients;
};
