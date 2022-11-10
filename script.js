let Chilometri = prompt("Inserire I Chilometri Da Percorrere");
let Eta = prompt("Inserire L' Età Del Passeggero");

console.log(
    `
    -------------Informazioni-----------------
    Chilometri: ${Chilometri}
    Età: ${Eta}
    `
)

NumeroChilometri = parseInt(Chilometri);
let NumeroChilometriIntero = Math.ceil(NumeroChilometri)
PrezzoPienoBigliettoDecimale = (NumeroChilometriIntero * 0.21)
let PrezzoPienoBiglietto = Math.ceil(PrezzoPienoBigliettoDecimale)

console.log(
    `
    -------------Prezzo Pieno Biglietto-------------
    Prezzo: ${PrezzoPienoBiglietto}
    `
)


NumeroEta = parseInt(Eta)

if (NumeroEta < 18) {
    PrezzoBiglietto = ((PrezzoPienoBiglietto * 80) / 100)

} else if (NumeroEta > 65) {
    PrezzoBiglietto = ((PrezzoPienoBiglietto * 60) / 100)

} else {
    PrezzoBiglietto = PrezzoBiglietto
}

console.log(
    `
    -------------Prezzo Da Pagare-------------
    Prezzo: ${PrezzoBiglietto}
    `
)

document.getElementById("Prezzo").innerHTML = PrezzoBiglietto;