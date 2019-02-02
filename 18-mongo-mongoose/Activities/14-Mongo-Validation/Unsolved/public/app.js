// Capture form submission
$("#submit").on("click", function(event) {
  event.preventDefault();

  // Format user input as object
  var user = {
    username: $("#username").val(),
    password: $("#password").val()
  };

  // Send to back-end
  $.post("/signup", user);
});