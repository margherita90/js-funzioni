function calcAvg(...voti) {
    let sum = 0;
    for (let i = 0; i < voti.length; i++) {
        const voto = Number(voti[i]);
        sum = sum + voto;
    }

    const avg = sum / voti.length

}