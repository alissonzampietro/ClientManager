$(".close").click(function() {
  $(".modal").fadeToggle("hide");
});

$(".adicionar").click(function() {
  $(".modal").fadeToggle("hide");
});

$("#inserir").click(function() {
  var controller = new ControllerClient();
  controller.insertClients();
})
