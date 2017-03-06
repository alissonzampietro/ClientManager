var controller = new ControllerClient();

$(".close").click(function() {
  $(".modal").fadeToggle("hide");
  controller.loadClients();
});

$(".adicionar").click(function() {
  $(".content-modal h2").text("Cadastro de Clientes");
  showInsertForm();
  $(".modal").fadeToggle("hide");
});

$("#busca").keyup(function() {
  var valorDigitado = $("#busca").val();
  controller.loadClients(valorDigitado);
})

$("#inserir").click(function() {
  controller.insertClients();
});

$("#atualizar").click(function() {
  controller.updateClients();
});

$("td.excluir").click(function() {
  var pai = $(this).parent();
  var id = pai.children(":first").html();
  controller.deleteClient(id);
  controller.loadClients();
})

$("td.editar").click(function() {
  var pai = $(this).parent();
  var id = pai.children(":first").html();
  $(".content-modal h2").text("Edição de Clientes");
  showEditForm();
  controller.screenEdit(id);
  $(".modal").fadeToggle("hide");
})
