var g = G$("John", "Doe");
console.log(g);

g
  .greet()
  .setLang("es")
  .greet(true)
  .log().HTML;

$("#login").click(function() {
  var loginGrtr = G$("Johnathan", "Doe");
  $("#logindiv").hide();

  loginGrtr
    .setLang($("#lang").val())
    .HTMLGreeting("#greeting", true)
    .log();
});
