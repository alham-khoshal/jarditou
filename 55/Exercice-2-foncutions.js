
/*  const str = prompt();
    document.write(str + " " + str.length);


/*var voy="aeiouyAEIOUY";
var str=prompt("entrez ici");
var nbv=-1;
var i=0;
var ii=0;
for (i=0; i <= str.length;i++) {
    for (ii=0; ii <= voy.lenght;i++) {
        if (str.substr(i,1) == voy.substr(ii,1)) {
        nbv=+1;
        break;
        }
    }
}
window.alert(str + nbv)
*//*
var mot = mot = prompt("entrez un mot");
var voy = "AEIOUYaeiouy";
var nbv = -1;
var i = 0;
var ii = 0;

for (i = 0; i <= mot.length; i++) {
    for (ii = 0; ii <= voy.length; ii++) {
        if (mot.substr(i, 1) == voy.substr(ii, 1)) {
            nbv += 1;
            break;
        }
    }
}
window.alert("le mot " + mot + " contient " + nbv + " voyelles.");
*/
console.log("1-Multiples")
console.log("2-Somme et moyenne")
console.log("3-recherche du nombre de voyelles")

var choix=prompt("faites votre choix");

if (choix=="1"){
    let a = 0;
    let i = 1;
    a = prompt("entrez votre nombre");
    for (i = 1; i <= 10; i++) {
        console.log(i,i + "x" + a, "=", a * i);
};
}
else if (choix=="2"){
    let num = parseInt(prompt("entrez le numbre"));
    if (num % 2 == 0) {
        alert("numbre pair");
    }
    else {
        alert("nombre impair");
    }}
else if (choix=="3"){
var mot =prompt("entrez un mot")
var voy = "AEIOUYaeiouy";
var nbv = -1;
var i = 0;
var ii = 0;

for (i = 0; i <= mot.length; i++) {
    for (ii = 0; ii <= voy.length; ii++) {
        if (mot.substr(i, 1) == voy.substr(ii, 1)) {
            nbv += 1;
            break;
        }
    }
}
window.alert("le mot " + mot + " contient " + nbv + " voyelles.");}

//Exercice4-String Token
/*
function newFunction(str1 , str2 , n) {
    str1 = "alham,ahmad,mahmod,idrisse,alyase";
    str2 = ",";
    n = parseInt(prompt())
    var liste =str1.split(str2);
    var result = liste[n-1];
    console.log(result);   
};
newFunction()
*/

function GetInteger(){

    var num = parseInt(prompt("entrez le numbre"));
    return num;

}
function InitTab(){

    var nmb = parseInt(prompt("saisissez la taille du tableau"));
    var mytab = new Array(nmb);
    return  mytab;
}
function SaisieTab(){
    for (let i=0; i < InitTab.length;  i++){InitTab[i]=prompt("saisissez le element" )}//changing array element names

}
function AfficheTab(){
    console.log(mytab)
}
function RechercheTab(){
    let m = parseInt(prompt());
    console.log(InitTab[m-1]);

}
function InfoTab(mytab somme){
    console.log(Math.max([0],[i]))
    for ( i = 0; i < mytab.length; i ++){somme += mytab[i];}
    console.log(somme/mytab.length)
    return somme
}
num = GetInteger()
mytab = InitTab()
InfoTab(mytab somme)


let GetInteger = parseInt(prompt());
let InitTab = Array(parseInt(prompt("saisissez la taille du tableau")));//Array Taile
for (let i=0; i < InitTab.length;  i++){InitTab[i]=prompt("saisissez le element" )}//changing array element names
console.log(InitTab)
let m = parseInt(prompt());
m = InitTab.length([i-1]);




//Array 1 Exercice  1

let GetInteger = parseInt(prompt());
let InitTab = Array(parseInt(prompt("saisissez la taille du tableau")));//Array Taile
for (let i=0; i < InitTab.length;  i++){InitTab[i]=prompt("saisissez le element" )}//changing array element names
console.log(InitTab)
let m = parseInt(prompt());
m = InitTab.length([i-1]);








/*
function GetInteger(){

    var num = parseInt(prompt("entrez le numbre"));
    return num;

}
function InitTab(){

    var nmb = parseInt(prompt("saisissez la taille du tableau"));
    var mytab = new Array(nmb);
    return  mytab;
}
function SaisieTab(){
    
}
function AfficheTab(){
    
}
function RechercheTab(){

}
function InfoTab(mytab somme){
    var somme = 0;
    console.log(Math.max([0],[i]))
    for ( i = 0; i < mytab.length; i ++){somme += mytab[i];}
    console.log(somme/mytab.length);
    return somme;
}
num = GetInteger()
mytab = InitTab()
InfoTab(mytab somme)
/*