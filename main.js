// tapahtuman käsittelijät
document.getElementById('btn').addEventListener('submit', luoLista);

function luoLista(event) {
    event.preventDefault()

    let kaveriLista = [];                                   // määritetään array
    let lista = document.getElementById('lista');           // määritetään listaelementti


    for (let i = 0; i < 3; i++) {                           // loop 10 kertaa
        kaveriLista.push(prompt('Lisää nimi ' + (i+1)));    // pushataan annettu arvo listalle
        let li = document.createElement('li');              // luodaan li-elementti
        li.innerText = kaveriLista[i];                      // määritetään li    
        lista.appendChild(li);                              // appenchild metodilla lisätään listalle
        }
        
        document.getElementById("tulostus").innerHTML = kaveriLista[i];
}