let yourName = prompt("Quale è il tuo Nome?");

console.log(`nome: ${yourName}`);

let yourSurName = prompt("Quale è il tuo Cognome?");

console.log(`cognome: ${yourSurName}`);

let yourColor = prompt("Quale è il tuo colore preferito?");

console.log(`colore: ${yourColor}`);

document.getElementById("info").innerHTML = `${yourName} ${yourSurName} ${yourColor} ${23}`;