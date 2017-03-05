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

ControllerClient.prototype.screenEdit = (id) => {
    var client = persistence.getByID(id);
    console.log(client);
     $("#id").val(client.id);
     $("#atualiza-nome").val(client.nome);
     $("#atualiza-email").val(client.email);
     $("#atualiza-cpf").val(client.cpf);
     var nascimento = client.nascimento;
     $("#atualiza-nascimento").val(nascimento.ano+"-"+nascimento.mes+"-"+nascimento.dia);
     $("#atualiza-telefone").val(client.telefone);
};
ControllerClient.prototype.loadClients = (name = null) => {
  if(name == null) {
    var clientes = persistence.get();
  }else{
    $("#data>.all").remove();
    var clientes = persistence.getByName(name);
  }
  for(cliente in clientes){
    if(clientes[cliente] !== undefined) {
      var element = $( ".example" ).clone().appendTo( "#data" );
      element.attr("data-position",cliente);
      element.removeClass('hide example');
      $("td[data='id']",element).html(clientes[cliente].id);
      $("td[data='nome']",element).html(clientes[cliente].nome);
      $("td[data='email']",element).html(clientes[cliente].email);
      $("td[data='cpf']",element).html(clientes[cliente].cpf);
      $("td[data='telefone']",element).html(clientes[cliente].telefone);
      $("td[data='nascimento']",element).html(clientes[cliente].nascimento.dia+"/"+clientes[cliente].nascimento.mes+"/"+clientes[cliente].nascimento.ano);
      var criadoEm = new Date(clientes[cliente].criadoEm);
      $("td[data='cadastro']",element).html(criadoEm.getDate() + "-" + (criadoEm.getMonth()+1) + "-" + criadoEm.getFullYear());
      if(clientes[cliente].atualizadoEm == null){
        var atualizado = "";
      }else{
        var atualizadoEm = new Date();
        atualizadoEm = atualizadoEm.getDate() + "-" + (atualizadoEm.getMonth()+1) + "-" + atualizadoEm.getFullYear();
      }
      $("td[data='editado']",element).html(atualizadoEm);
    }
  }

};
