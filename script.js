function loginShow(){
  var element = document.getElementById("box1");
  element.classList.remove("login-hidden");
  var element = document.getElementById("box2");
  element.classList.add("signup-hidden");
}
function signupShow(){
  var element = document.getElementById("box2");
  element.classList.remove("signup-hidden");
  var element = document.getElementById("box1");
  element.classList.add("login-hidden");
}
