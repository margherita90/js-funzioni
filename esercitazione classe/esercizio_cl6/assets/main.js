

let filmLenght = Number(prompt("Inserisci la durata del film in minuti"));

function getDuration(filmLenght) {

    if (typeof (filmLenght) !== 'integer') {
        filmLenght = Number(filmLenght);
    }
    if (filmLenght < 0) {
        return 'errore, il minutaggio non è corretto'
    }


    const ore = parseInt(filmLenght / 60);
    const minuti = filmLenght % 60;
    return [ore, minuti]


    'il film dura ${ore} ore e $ {minuti}';

}