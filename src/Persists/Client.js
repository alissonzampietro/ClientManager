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
