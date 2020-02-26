//Exercice 1 : total d'une commande
let prix = parseInt(prompt("Enterz le prix"))
let tot=0;
let port=0;
let rem=0;
if (prix =< 500){
    prix/100*2;
    port=prix
    rem=prix/100*90;
    tot=prix
}
console.log(tot)