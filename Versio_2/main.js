// Tapahtumankäsittelijät

let lomake = document.forms['lomake'];
let lomake2 = document.forms['lomake2'];
let lomake3 = document.forms['lomake3'];
let luettelo = document.getElementById('lista');

lomake.addEventListener('submit', uusiNimiListaan)
lomake2.addEventListener('submit', poistaKaveri)
lomake3.addEventListener('submit', organisoi)

//luettelo.addEventListener('click', poistaKaveri)



function uusiNimiListaan(event) {
    event.preventDefault()

    // haetaan kaverin nimi syöttökentästä 
    let nimi = document.querySelector('#main input[type="text"]').value;
    
    let li = document.createElement('li');                  // luodaan li-elementti
    let uusiNimi = document.createTextNode(nimi)            // luodaan uusi nimi
    li.appendChild(uusiNimi);                               // appenchild metodilla lisätään listalle
    document.querySelector('#lista').appendChild(li);       // lisätään uusi nimi oikeaan paikkaan
    
    // kerätään nimet luetteloon
    console.log(luettelo);

    // tyhjennetään syöttökenttä
    document.querySelector('#main input[type="text"]').value = "";
    }

function poistaKaveri(event) {
    event.preventDefault()
    // haetaan poistettava nimi syöttökentästä 
    let nimi2 = document.querySelector('#main input[type="text"]').value;
    document.getElementById("tulostus").innerHTML = "painoit poista";
    li.removeChild(nimi2); 
    //document.querySelector('#lista').removeChild(li);
    //li.removeChild(poistaNimi);
    }
    


function organisoi(event) {
    event.preventDefault()
    document.getElementById("tulostus").innerHTML = "painoit organisoi";
    document.getElementById("tulostus").innerHTML = kaverilista;

}
