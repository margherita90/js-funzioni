function calTariffa(timeStart, timeEnd, basePrice, extraPrice) {

    const extraTime = timeEnd - 12;
    const baseTime = timeEnd - timeStart;
    const results = baseTime * basePrice + extraTime * extraPrice;

    return results;
}