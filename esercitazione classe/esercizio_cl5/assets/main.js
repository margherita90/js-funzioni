console.log("JS caricato")

let month = Number(prompt("Inserisci il mese"));

// let orderOfMonth =[Gennaio, Febbraio, Marzo, Aprile, Maggio, Giugno, Luglio, Agosto, Settembre, Ottobre, Novembre, Dicembre];//
const daysInMonth = getDaysByMonth(month);
console.log(daysInMonth);
function getDaysByMonth(monthIndex) {

    if (monthIndex < 1 || monthIndex > 12) {
        console.log('Valore non valido');
    }
    const year = 2028 //new Date().getYourYear();//


    switch (monthIndex) {
        case 1: return 31;
        case 2: return 28;
        // return 'inverno'//
        case 3: return 31;
        case 4: return 30;
        case 5: return 31;
        //return 'primavera' // 
        case 6: return 30;
        case 7: return 31;
        case 8: return 31;
        // return 'esteta'//
        case 9: return 30;
        case 10: return 31;
        case 11: return 30;
        //return 'autunno'//
        case 12: return 31;
        // return 'inverno'//
        default: return 'Mese non valido';
    }

}

console.log(`Il mese ${month} ha ${daysInMonth} giorni.`);
alert(`Il mese ${month} ha ${daysInMonth} giorni.`);


/*
if (month === 1) {
   console.log("il mese è Gennaio e ha 31 giorni")
} else if (month === 2) {
   console.log("il mese è Gennaio e ha 31 giorni")
}*/