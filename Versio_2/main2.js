// Tapahtumankäsittelijät

/*
let lomake2 = document.forms['lomake2'];
let lomake3 = document.forms['lomake3'];
let luettelo = document.getElementById('lista');*/

const nimilista = [];

function uusiNimiListaan() {
    let nimi = document.getElementById('input').value;

    nimilista.push(nimi);
    
    let luettelo = "";
    for(i = 0; i < nimilista.length; i++) {
        luettelo += nimilista[i] + "<br>";
    }
    
    console.log(nimilista);
    console.log(luettelo);
    document.getElementById('input').value = '';
    document.getElementById("tulostus").innerHTML = luettelo;
}
const poistettavat = []
function poistaKaveri() {
    let poistonimi = document.getElementById('input').value;

    poistettavat.push(poistonimi);
    for(let i = 0; i < nimilista.length; i++) {
        for(let j = 0; j < poistettavat.length; j++) {
          if (nimilista[i] === poistettavat[j]) {
            nimilista.pop(poistonimi);
          }}}
    let luettelo = "";
    for(i = 0; i < nimilista.length; i++) {
        luettelo = luettelo + nimilista[i] + "<br>";
    }
    
    console.log(nimilista);
    console.log(luettelo);
    document.getElementById('input').value = '';
    document.getElementById("tulostus").innerHTML = luettelo;
}
    



