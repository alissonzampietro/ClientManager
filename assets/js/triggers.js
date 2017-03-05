$(".close").click(function() {
  $(".modal").addClass("hide");
});

$(".adicionar").click(function() {
  $(".modal").removeClass("hide");
});

$("#inserir").click(function() {
  var controller = new ControllerClient();
  controller.insertClients();
})
