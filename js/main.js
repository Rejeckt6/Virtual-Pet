console.log("JS LOADED");

const game = document.getElementById("game");

const pet = document.createElement("div");
pet.innerHTML = "🦎";

pet.style.position = "absolute";
pet.style.left = "64px";
pet.style.bottom = "0px";
pet.style.fontSize = "32px";

game.appendChild(pet);