var link = document.querySelector(".map");
var login = document.querySelector(".navigation-login");
var buttonshow = document.querySelector(".get");
var closemodal = document.querySelectorAll(".close-modal");
var loginmodal = document.querySelector (".login-form");
console.log(buttonshow);
console.log (link);;
console.log(login);
console.log(loginmodal);
link.addEventListener("click", function(evt){
	evt.preventDefault();
});
login.addEventListener("click",function(evt){
evt.preventDefault();
loginmodal.classList.add("visually-show");
});
buttonshow.addEventListener("click", function(evt){
 evt.preventDefault();
 link.classList.add("visually-show");
});

login.addEventListener("click", function(evt){
 evt.preventDefault();
 login.classList.add("visually-show");	
});

closemodal.addEventListener("click", function(evt) {
 evt.preventDefault();
 login.classList.remove("visually-show");
});