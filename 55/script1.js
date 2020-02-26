/*
let prix = parseInt(prompt("saisiez le prix "));
let qet = parseInt(prompt("saisiez le quantité "));
let pap = prix*qet;
let rem = 0;
let port = 0;
let tot = 0;
if (pap < 100){
    port = pap/100*2;
    rem = 0;
    tot = rem + port;
}
else if( pap => 100 && pap <= 200){
    port = pap/100*2;
    rem = pap/100*95;
    tot = rem + port;
}
console.log("tot" + tot)
console.log("rem" + rem)
console.log("le port est " + port)

let prix = parseInt(prompt("saisiez le prix "));
let qet = parseInt(prompt("saisiez le quantité "));
let pap = prix*qet;
let rem = 0;
let port = 0;
let tot = 0;
if (pap < 100){
    port = pap/100*2;
    rem = 0;
    tot = rem + port;
}
else if( pap => 100 && pap <= 200){
    port = pap/100*2;
    rem = pap/100*95;
    tot = rem + port;
}
else if( pap <= 500){
    port = 0;
    rem = pap/100*90;
    tot = rem + port;
}
console.log("tot " + tot)
console.log("rem " + rem)
console.log("port " + port)

let prix = parseInt(prompt("saisiez le prix "));
let qet = parseInt(prompt("saisiez le quantité "));
let pap = prix*qet;
let rem = 0;
let port = 0;
let tot = 0;
if (pap < 100){
    port = pap/100*2;
    rem = 0;
    tot = rem + port;
}
else if( pap => 100 && pap <= 200){
    port = pap/100*2;
    rem = pap/100*95;
    tot = rem + port;
}
else if( pap <= 500){
    port = 0;
    rem = pap/100*90;
    tot = rem + port;
}
console.log("total de votre commande est " + tot)
console.log("remise de votre commande est " + rem)
console.log("port de votre commande est " + port)

let prix = parseInt(prompt("saisiez le prix "));
let qet = parseInt(prompt("saisiez le quantité "));
let pap = prix*qet;
let rem = 0;
let port = 0;
let tot = 0;
if (pap < 100){
    port = pap/100*2;
    if( port < 6){port = 6;}
    rem = pap/100*100;
    tot = rem + port;
}
else if( pap => 100 && pap <= 200){
    port = pap/100*2;
    rem = pap/100*95;
    tot = rem + port;
}
else if( pap <= 500){
    port = 0;
    rem = pap/100*90;
    tot = rem + port;
}
console.log("total de votre commande est " + tot)
console.log("remise de votre commande est " + rem)
console.log("port de votre commande est " + port)

let prix = parseInt(prompt("saisiez le prix "));
let qet = parseInt(prompt("saisiez le quantité "));
let pap = prix*qet;
let rem = 0;
let port = 0;
let tot = 0;
let ram = 0;
if (pap < 100){
    port = pap/100*2;
    if( port < 6){port = 6;}
    rem = pap/100*100;
    tot = rem + port;
    ram = pap/100*0;
}
else if( pap => 100 && pap <= 200){
    port = pap/100*2;
    if( port < 6){port = 6;}
    rem = pap/100*95;
    tot = rem + port;
    ram = pap/100*5;
}
else if (pap => 300){
    port = pap/100*2;
    if( port < 6){port = 6;}
    rem = pap/100*90;
    tot = rem + port;
    ram = pap/100*10;
}
else if( pap <= 500){
    port = 0;
    rem = pap/100*90;
    tot = rem + port;
    ram = pap/100*10;
}
console.log("total de votre commande est " + tot)
console.log("remise de votre commande est " + ram)
console.log("port de votre commande est " + port)
*//*
newFunction();

function newFunction() {
    let prix = parseInt(prompt("saisiez le prix "));
    let qet = parseInt(prompt("saisiez le quantité "));
    let pap = prix * qet;
    let rem = 0;
    let port = 0;
    let tot = 0;
    let ram = 0;
    if (pap < 100) {
        port = pap / 100 * 2;
        if (port < 6) {
            port = 6;
        }
        rem = pap / 100 * 100;
        tot = rem + port;
        ram = pap / 100 * 0;
    }
    else if (pap => 100 && pap <= 200) {
        port = pap / 100 * 2;
        if (port < 6) {
            port = 6;
        }
        rem = pap / 100 * 95;
        tot = rem + port;
        ram = pap / 100 * 5;
    }
    else if (pap => 300 && pap <= 500) {
        port = pap / 100 * 2;
        if (port < 6) {
            port = 6;
        }
        rem = pap / 100 * 90;
        tot = rem + port;
        ram = pap / 100 * 10;
    }
    else if (pap <= 500) {
        port = pap / 100 * 0;
        rem = pap / 100 * 90;
        tot = rem + port;
        ram = pap / 100 * 10;
    }
    console.log("total de votre commande est " + tot);
    console.log("remise de votre commande est " + ram);
    console.log("port de votre commande est " + port);
}

*//*
//Exercice 1 : total d'une commande
let prix = parseInt(prompt("saisiez le prix "));
let qet = parseInt(prompt("saisiez le quantité "));
let pap = prix*qet;
let rem = 0;
let port = 0;
let tot = 0;
let ram = 0;
if (pap < 100){
    port = pap/100*2;
    if( port < 6){port = 6;}
    rem = pap/100*100;
    tot = rem + port;
    ram = pap/100*0;
}
else if( pap >= 100 && pap <= 200){
    port = pap/100*2;
    if( port < 6){port = 6;}
    rem = pap/100*95;
    tot = rem + port;
    ram = pap/100*5;
}
else if (pap >= 300 && pap <= 500){
    port = pap/100*2;
    if( port < 6){port = 6;}
    rem = pap/100*90;
    tot = rem + port;
    ram = pap/100*10;
}
else if( pap >= 500){
    port = 0;
    rem = pap/100*90;
    tot = rem + port;
    ram = pap/100*10;
}
document.write(" <br> <br> <br> <center> total de votre prix est   " + pap + " € " + "<br> </center>")
document.write(" <br> <center> total de votre commande est " + tot + " € " + "<br> </center>")
document.write(" <br> <center> remise de votre commande est " + ram + " € " + "<br> </center>")
document.write(" <br> <center> port de votre commande est " + port + " € " + "<br> </center>")
*/
/*
//Exercice 2 : Somme des entiers inférieurs à N
let n = 0;
let i = 1;
n = prompt("entrez votre nombre");
while
(i <= n) {
document.write("<center>"+ i +"</center>");
i++
}
*/
/*
//Exercice 4 - Calcul du nombre de jeunes, de moyens et de vieux
let age = 0;
let s = 0;
let m = 0;
let l = 0;

while(age < 100){
age = parseInt(prompt("age"));

if (age >=20 && age <=40){
    m++;}
    
else if( age < 20){ 
    s++;}

else if( age > 40){
    l++;}

}
document.write(" les personnes inférieur à 20 ans est "+ s + " personnes <br>")
document.write("les personnes entre 20 ans et 40 ans est " +  m + " personnes <br>")
document.write(" les personnes supérieur à 40 ans est " + l + " personnes <br>")
*/
//Exercice 3 - Mini et maxi
let n=0;
let min=0;
let max=0;
do(n!=0){
    if (n < min){}
}
