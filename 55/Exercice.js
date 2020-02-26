
let nom= prompt("nom")
let pre= prompt("prenom")
if ( window.confirm("Etes-vous un homme ") == true){
     window.alert("Bonjour Monsieur " + nom + " " + pre + " Bienvenue sur notre site web")
}
else { window.alert("Bonjour Madame " + nom + " " + pre + " Bienvenue sur notre site web");}