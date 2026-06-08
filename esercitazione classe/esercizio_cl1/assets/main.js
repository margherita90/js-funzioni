const tassoCambio = 1.08;
let somma = 55;

function calcValore(tassoCambio, somma) {
    const risultato = somma * tassoCambio;
    return risultato.toFixed(2);
}

const sommaDolari = calcValore(tassoCambio, somma);

console.log(sommaDolari);