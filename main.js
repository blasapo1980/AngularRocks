"use strict";

var principalMenu = document.querySelector(".list-links");
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
