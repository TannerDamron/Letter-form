$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var formNameInput = $("input#name").val();
    $("#formName").text(formNameInput);
    $("#letter").show();

    event.preventDefault();
  });
});
