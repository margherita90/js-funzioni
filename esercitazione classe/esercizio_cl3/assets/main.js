let birthYears = 1991;
let gender = 'F';

const currentYear = new Date().getFullYear();
const currentAge = currentYear - birthYears;
const noMoreWork = calcRemainYearwork(birthYears, gender);


console.log(noMoreWork, 'anni per andare in pensione')

function calcRemainYearwork(birthYears, gender) {
    let retiredYear;
    if (gender === 'F') {
        retiredYear = 62;
    } else {
        retiredYear = 67;
    }

    const currentYear = new Date().getFullYear();
    /*const currentYear = 2026;*/
    const currentAge = currentYear - birthYears;
    const noMoreWork = retiredYear - currentAge;
    return noMoreWork;

}
