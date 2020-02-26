
/*
//les-fonctions-Exercice-1
//Exercice 1 produit(x, y)
function add(x,y){

    var x = parseInt(prompt("nombre"))
    var y = parseInt(prompt("nombre"))
    var h = x*y;
    var m = x*x*x;
    document.write("le cube de "+ x +" est egale a " + m+ "<br>")
    document.write("<br>" +"le produit de "+ x + " x " + y + " est egale a " + h)
    var images = {
    image1 : {url:'papillon.jpg',},
}
for(var i in images){
    var image = new Image();
    image.src = images[i].url;
    document.getElementById('_images').appendChild(image)
}}
add()
*/
// Array Exercice 2
/*
let GetInteger = parseInt(prompt());
let InitTab = Array(parseInt(prompt("saisissez la taille du tableau")));//Array Taile
for (let i=0; i < InitTab.length;  i++){InitTab[i]=prompt("saisissez le element" )}//changing array element names
console.log(InitTab)
let m = parseInt(prompt());
console.log(InitTab[m-1]);
*//*
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
    for (let i=0; i < mytab.length;  i++){mytab[i]=prompt("saisissez le element" )}//changing array element names

}
function AfficheTab(){
    console.log(mytab)
}
function RechercheTab(){
    let m = parseInt(prompt());
    console.log(mytab[m-1]);

}
function InfoTab(mytab ,somme){
    var n =somme/mytab.length;

    console.log(Math.max([0],[i]))
    for ( i = 0; i < mytab.length; i ++){somme += parseInt(mytab[i]) ;}
    console.log(n)
    return somme
}
num = GetInteger()
mytab = InitTab()
SaisieTab()
AfficheTab()
RechercheTab()
*//*
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
    for (var i=0; i < mytab.length;  i++){mytab[i]=prompt("saisissez le element" )}//changing array element names

}
function AfficheTab(){
    console.log(mytab)
}
function RechercheTab(){
    var m = parseInt(prompt());
    console.log(InitTab[m-1]);

}
function InfoTab(){
    var som=0;
    console.log(Math.max([0],[i]))
    for ( i = 0; i < mytab.length; i ++){som += mytab[i];}
    console.log(som/mytab.length)
    return som
}
num = GetInteger()
mytab = InitTab()
function SaisieTab()
function AfficheTab()
function RechercheTab()
som = InfoTab()
*/
function programe(){
    GetInteger(num)
    InitTab(nmb, mytab)
    SaisieTab(mytab)
    AfficheTab(mytab)
    RechercheTab(m,mytab)
    InfoTab(mytab,somme)}
var somme=0;
var num =0;
var nmb = 0;
var mytab;
var m = 0;
var i=0;
function GetInteger(num){

    num = parseInt(prompt("entrez le numbre"));
    return num;

}
function InitTab(mytab){

    mytab = Array(parseInt(prompt("saisissez la taille du tableau")));//Array Taile

    }
function SaisieTab(mytab){

   //changing array element names
    for (var i=0; i < mytab.length;  i++){mytab[i]=prompt("saisissez le element" )}
    
    }

function AfficheTab(mytab){
    console.log(mytab)
}
function RechercheTab(m,mytab){
    var  m = parseInt(prompt());
    m = mytab[m-1];
    console.log(m);
}
function InfoTab(mytab,somme){
    somme=0;
    console.log(Math.max(mytab[i]))
    for ( i = 0; i < mytab.length; i ++){somme += mytab[i];}
    console.log(somme/mytab.length)
    return somme;
}
programe()
