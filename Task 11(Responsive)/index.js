
let convertDegree = () => {
    let input = document.querySelector("input");
    let p = document.querySelector("p");
    let userDegree = input.value;
    if (userDegree > 100 || userDegree <= 0) {
        p.innerText = `ادخل رقم صحيح `
    }
    else if (userDegree >= 85 && userDegree <= 100) {
        p.innerText = `تقديرك امتياز `
    }
    else if (userDegree >= 75 && userDegree < 85) {
        p.innerText = `تقديرك جيدجدا `
    }
    else if (userDegree >= 65 && userDegree < 75) {
        p.innerText = `تقديرك جيد `
    }
    else if (userDegree >= 50 && userDegree < 65) {
        p.innerText = `تقديرك مقبول `
    }
    else {
        p.innerText = `حظ اوفر المرة القادمة(ساقط) `

    }
}