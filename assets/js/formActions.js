function clearFormFields() {
  $("#nome").val("")
  $("#email").val("")
  $("#cpf").val("")
  $("#nascimento").val("")
  $("#telefone").val("")
}

window.MESSAGE = function(chave) {
  var mensagens = {
    "erro-cadastro": {
      msg: "Identificamos algum campo inválido. Tente novamente.",
      classe: "erro"
    },
    "cadastrado": {
      msg: "Cliente inserido com sucesso.",
      classe: "acerto"
    }
  }
  $(".log-message").text(mensagens[chave].msg);
  $(".log-message").addClass(mensagens[chave].classe);
  $(".log-message").removeClass("hide");
  window.setTimeout(function(){
    $("#log-message").addClass("hide");
    $(".log-message").text("");
    $("#log-message").removeClass(mensagens[chave].classe);
  }, 5000);
}
