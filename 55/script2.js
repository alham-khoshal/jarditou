/*const nom = document.getElementById('nom')
const prenom = document.getElementById('prenom')
const codepostal = document.getElementById('codepostal')
const Addresse = document.getElementById('Addresse')
const errorElement = document.getElementById('error')

const formulaire_contact = document.getElementById('formulaire_contact')
formulaire_contact.addEventListener('submit', (e) =>{ 
let  masage = []
if (nom.value === '' || nom.value == null){
    masage.push('*')}
if (masage.length > 0 ){
e.preventDefault()
errorElement.innertext = masage.join(',')

}
})
*/
var form = document.getElementById("form"); 
form.addEventListener("submit", function(e){let nom =document.getElementById("nom")

if( nom.value == null || nom.value.trim() ===''){alert("dgrfgtdhshgf")}
e.prevenDefault();
});
    
