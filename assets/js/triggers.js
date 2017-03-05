var controller = new ControllerClient();

$(".close").click(function() {
  $(".modal").fadeToggle("hide");
  location.reload();
});

$(".adicionar").click(function() {
  $(".modal").fadeToggle("hide");
});

$("#busca").keyup(function() {
  var valorDigitado = $("#busca").val();
  controller.loadClients(valorDigitado);
})

$("#inserir").click(function() {
  controller.insertClients();
})
