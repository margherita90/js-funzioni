console.log("JS Caricato")
const days = Number(prompt("Inserisci il giorno della settimana. ES. 1-7"));
const weekDays = ["Lunedi", "Martedi", "Mercoledi", "Giovedi", "Venerdi", "Sabato", "Domenica"];

// Funzione input 1-7, output lunedi-domenica
function getDayByWeek(numberOfDay) {
    if (numberOfDay >= 1 && numberOfDay <= 7) { // ok procedi//
        console.log("Indice:", numberOfDay - 1);
        ; return weekDays[numberOfDay - 1];
    } else {
        return `Errore`;
    }
}
const dayOfweek = getDayByWeek(days);
console.log(dayOfweek);

/* function getDayByWeek(numberOfDay) {

    switch (numberOfDay) {
        case 1: return "Lunedi";
        case 2: return "Martedi";
        case 3: return "Marcoledi";
        case 4: return "Giovedi";
        case 5: return "Venerdi";
        case 6: return "Sabato";
        case 7: return "Domenica";
        default: return "Errore";

    }
} */
