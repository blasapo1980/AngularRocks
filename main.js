"use strict";

var boton = document.querySelector(".btn-menu");
function toggle() {
  var menuMobile = document.querySelector(".js-menu-mobile");
  menuMobile.classList.toggle('hidden');
}
boton.addEventListener('click', toggle);


var principalMenu = document.querySelector(".js-list-links");
var itemsPrincipalMenu = [
  "bar",
  "foo",
  "queen",
  "the-beatles",
  "the-rolling-stones"
];

for (var i = 0; i < itemsPrincipalMenu.length; i++) {
  principalMenu.innerHTML += '<li><a href="pages/'+ itemsPrincipalMenu[i]+'.html">'+itemsPrincipalMenu[i]+'</a></li>'
}
