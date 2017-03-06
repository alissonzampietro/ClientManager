var persistence = new PersistClient();

var ControllerClient = function(){
}

ControllerClient.prototype.insertClients = () => {
  var nome = $("#nome").val();
  var email = $("#email").val();
  var cpf = $("#cpf").val();
  var nascimento = $("#nascimento").val();
  var telefone = $("#telefone").val();

  var modelClient = new Client();
  var objClient = modelClient.setClient(nome, email, cpf, nascimento, telefone);
  if(objClient != false) {
    window.MESSAGE("cadastrado");
    clearFormFields();
    persistence.save(objClient);
  }else{
    window.MESSAGE("erro-cadastro");
  }
};

ControllerClient.prototype.deleteClient = (id) => {
  if(id) {
    persistence.delete(id);
    window.MESSAGE("deletado")
  }else{
    window.MESSAGE("erro-delete")
  }
};

ControllerClient.prototype.updateClients = () => {
  var id = $("#id").val();
  var nome = $("#atualiza-nome").val();
  var email = $("#atualiza-email").val();
  var cpf = $("#atualiza-cpf").val();
  var nascimento = $("#atualiza-nascimento").val();
  var telefone = $("#atualiza-telefone").val();

  var modelClient = new Client();
  var objClient = modelClient.setClient(nome, email, cpf, nascimento, telefone, id);
  if(objClient != false) {
    window.MESSAGE("editado");
    persistence.update(objClient);
  }else{
    window.MESSAGE("erro-cadastro");
  }
};

ControllerClient.prototype.screenEdit = (id) => {
    var client = persistence.getByID(id);
     $("#id").val(client.id);
     $("#atualiza-nome").val(client.nome);
     $("#atualiza-email").val(client.email);
     $("#atualiza-cpf").val(client.cpf);
     var nascimento = client.nascimento;
     $("#atualiza-nascimento").val(nascimento.ano+"-"+nascimento.mes+"-"+nascimento.dia);
     $("#atualiza-telefone").val(client.telefone);
};

ControllerClient.prototype.loadClients = (name = null) => {
  var lengthClients;
  var cont = 1;
  $("#data>tr").remove();
  if(name == null) {
    var clientes = persistence.get();
  }else{
    var clientes = persistence.getByName(name);
  }
  if(clientes != null) {
    lengthClients = clientes.length;
  }else {
    lengthClients = 0;
  }
  window.QUANTIDADE_CLIENTES = lengthClients;
  for(cliente in clientes){
    if(clientes[cliente] !== undefined) {
      var atualizadoEm = "";
      var element = $( ".example" ).clone(true, true).appendTo( "#data" );
      element.attr("data-position",cont);
      element.removeClass('hide example');
      $("td[data='id']",element).html(clientes[cliente].id);
      $("td[data='nome']",element).html(clientes[cliente].nome);
      $("td[data='email']",element).html(clientes[cliente].email);
      $("td[data='cpf']",element).html(clientes[cliente].cpf);
      $("td[data='telefone']",element).html(clientes[cliente].telefone);
      $("td[data='nascimento']",element).html(clientes[cliente].nascimento.dia+"/"+clientes[cliente].nascimento.mes+"/"+clientes[cliente].nascimento.ano);
      var criadoEm = new Date(clientes[cliente].criadoEm);
      $("td[data='cadastro']",element).html(("0" + criadoEm.getDate()).slice(-2) + "/" + ("0" + (criadoEm.getMonth()+1)).slice(-2) + "/" + criadoEm.getFullYear() + " " + ("0" + criadoEm.getHours()).slice(-2) + ":" + ("0" + criadoEm.getMinutes()).slice(-2));
      if(clientes[cliente].atualizadoEm != null){
        var atualizadoEm = new Date(clientes[cliente].atualizadoEm);
        atualizadoEm = ("0" + atualizadoEm.getDate()).slice(-2) + "/" + ("0" + (atualizadoEm.getMonth()+1)).slice(-2) + "/" + atualizadoEm.getFullYear() + " " + ("0" + atualizadoEm.getHours()).slice(-2) + ":" + ("0" + atualizadoEm.getMinutes()).slice(-2);
      }
      $("td[data='editado']",element).html(atualizadoEm);
      cont++;
    }
  }

};
