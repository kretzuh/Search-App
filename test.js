elemente_calcul = {
    operator: '=',
    tablou: [14, 12, 10, 12, 32, 43, 12, 43, 54, 77],
    referinta: 12
}

function calculeaza_expresie() {
    let operator = elemente_calcul.operator
    let tablou = elemente_calcul.tablou
    let referinta = +elemente_calcul.referinta
    for (let i=0; i<tablou.length-1; i++) {
        if (operator === '=') {
            if (referinta == tablou[i]) {
                console.log(tablou[i])
            }
        }
    }
}


calculeaza_expresie()