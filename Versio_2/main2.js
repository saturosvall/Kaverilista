// luodaan array nimilista
const nimilista = [];

function uusiNimiListaan() {
    let nimi = document.getElementById('input').value;
    nimilista.push(nimi);
    let luettelo = "";
    
    // nimilista luettelomalliin
    for(i = 0; i < nimilista.length; i++) {
        luettelo += nimilista[i] + "<br>";
    }
    document.getElementById('input').value = '';
    document.getElementById("tulostus").innerHTML = luettelo;
}

// luodaan array poistettavista nimistä
const poistettavat = []
function poistaKaveri() {
    let poistonimi = document.getElementById('input').value;
    poistettavat.push(poistonimi);

    // käydään läpi löytyykö poistettava nimi listalta
    for(let i = 0; i < nimilista.length; i++) {
        for(let j = 0; j < poistettavat.length; j++) {
          if (nimilista[i] === poistettavat[j]) {
            nimilista.splice(i, 1);
          }}}
    let luettelo = "";
    for(i = 0; i < nimilista.length; i++) {
        luettelo = luettelo + nimilista[i] + "<br>";
    }
    
    document.getElementById('input').value = '';
    document.getElementById("tulostus").innerHTML = luettelo;
}
    
// funktio joka järjestää listan aakkosjärjestykseen
function organize() {
    nimilista.sort();
    let luettelo = "";
    for(i = 0; i < nimilista.length; i++) {
        luettelo += nimilista[i] + "<br>";
    }
    
    document.getElementById('input').value = '';
    document.getElementById("tulostus").innerHTML = luettelo;
}


