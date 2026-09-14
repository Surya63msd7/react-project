// create a h1 element by using js

const h1 = document.createElement("h1");
h1.textContent = "Hello, coders army";
h1.id = "my-h1"
h1.style.color = "red";
h1.style.fontsize = "30px";
h1.style.backgroundColor = "yellow";

const root = document.getElementById("root");
root.appendChild(h1);

function createElement()
