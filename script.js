let Chilometri = prompt("Inserire I Chilometri Da Percorrere");
let Eta = prompt("Inserire L' Età Del Passeggero");

console.log(
    `
    -------------Informazioni-----------------
    Chilometri: ${Chilometri}
    Età: ${Eta}
    `
)

Chilometri = parseInt(Chilometri);
PrezzoPienoBigliettoDecimale = (Chilometri * 0.21);
let PrezzoPienoBigliettoStringa = PrezzoPienoBigliettoDecimale.toFixed(2);
let PrezzoBiglietto = parseFloat(PrezzoPienoBigliettoStringa);

console.log(
    `
    -------------Prezzo Pieno Biglietto-------------
    Prezzo: ${PrezzoBiglietto}
    `
)


let NumeroEta = parseInt(Eta);

if (NumeroEta < 18) {
    PrezzoBiglietto = ((PrezzoBiglietto * 80) / 100)

} else if (NumeroEta > 65) {
    PrezzoBiglietto = ((PrezzoBiglietto * 60) / 100)
}

let PrezzoBigliettoArrotondato =  PrezzoBiglietto.toFixed(2);

console.log(
    `
    -------------Prezzo Da Pagare-------------
    Prezzo: ${PrezzoBigliettoArrotondato}
    `
)

document.getElementById("Prezzo").innerHTML = PrezzoBigliettoArrotondato;