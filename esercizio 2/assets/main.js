console.log("JS Caricato")
let age = Number(prompt("Quanti anni hai?"));

const messageAge = getCalcAge(age);
console.log(messageAge);

function getCalcAge(Userage) {
    if (isNaN(Userage)) {
        return "Errore imserisci un numero valido"
            ;
    }
    if (Userage < 18) {
        return "Minorenne";
    } else if (Userage <= 35) {
        return "Giovane adulto";
    } else if (Userage <= 60) {
        return "Adulto";
    } else {
        return "Senior";
    }
}   
