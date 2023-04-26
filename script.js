let alege_operator = document.getElementById("alege_operator")
let input_tablou = document.getElementById('input_tablou')
let input_referinta = document.getElementById('stabileste_referinta')

let operatori = ['=', '<', '!=', '>', '<=', '>=']

let executed_operator = false
let executed_tablou = false
let executed_referinta = false

function element_alege_operator() {
    if (!executed_operator) {
        for (let i = 0; i < operatori.length; i++) {
            let operator = document.createElement('a')
            operator.setAttribute("onclick", 'salveaza_operator()')
            operator.classList.add('alegere_operator')
            operator.innerHTML = operatori[i]
            alege_operator.after(operator)

        }
        executed_operator = true
    }
}

let a = document.getElementsByTagName('a')

function element_input_tablou() {
    if (!executed_tablou) {
        let create_input_tablou = document.createElement('input')
        create_input_tablou.type = 'text'
        create_input_tablou.setAttribute("id", "element_tablou1")
        create_input_tablou.setAttribute("oninput", "salveaza_tablou()")
        input_tablou.after(create_input_tablou)
    }
    executed_tablou = true
}

function element_referinta() {
    if (!executed_referinta) {
        let create_input_referinta = document.createElement('input')
        create_input_referinta.type = 'text'
        create_input_referinta.setAttribute("id", "element_referinta1")
        create_input_referinta.setAttribute("oninput", "salveaza_referinta()")
        input_referinta.after(create_input_referinta)
    }
    executed_referinta = true
}

//varianta 1 pt salveaza tablou
/*function salveaza_tablou1() {
    let count = 0
    for (let i = 0; i < document.getElementById('element_tablou1').value.length; i++) {
        if (document.getElementById('element_tablou1').value[i] == ' ') {
            count++
        }
        if (count === 10) {
            document.getElementById('element_tablou1').disabled = true
        }
        elemente_calcul.tablou = document.getElementById('element_tablou1').value
    }
}*/

function salveaza_tablou() {
    let tablou = document.getElementById('element_tablou1').value
    let tablou_splituit = tablou.split(' ')
    for (let i = 0; i < tablou_splituit.length; i++) {
        if (i === 10) {
            document.getElementById('element_tablou1').disabled = true
        }
        elemente_calcul.tablou = tablou
    }
}

/* varianta 1 pt salveaza operator
function salveaza_operator1() {
    elemente_calcul.operator = event.target.innerText
    let alegere_operator = document.createElement('span')
        alegere_operator.innerText = "Ati ales operatorul" + " " + event.target.innerText
    a[a.length-1].after(alegere_operator)
    }*/

let alegere_operator = null
let margine_operator = false

function salveaza_operator() {
    elemente_calcul.operator = event.target.innerText
    if (!margine_operator) {
        event.target.style.borderBlockColor = 'red'
    }
    margine_operator = true;
}

/*if (alegere_operator === null) {
    alegere_operator = document.createElement('span')
    alegere_operator.setAttribute('id', 'span_cu_selectie')
    alegere_operator.classList.add('selectat')
    alegere_operator.innerText = "Ati ales operatorul   " + elemente_calcul.operator
} else {
    alegere_operator.innerText = "Ati ales operatorul   " + elemente_calcul.operator
}
a[a.length - 1].after(alegere_operator)
}*/

function salveaza_referinta() {
    let referinta = document.getElementById('element_referinta1').value
    elemente_calcul.referinta = referinta
}


elemente_calcul = {
    operator: '',
    tablou: '',
    referinta: ''
}

let tablou_rezultat = []
let p = document.getElementById('rezultat')

function calculeaza_expresie() {
    let operator = elemente_calcul.operator
    let tablou = elemente_calcul.tablou.split(' ')
    let referinta = +elemente_calcul.referinta
    for (let i = 0; i < tablou.length - 1; i++) {
        if (operator === '=') {
            if (tablou[i] == referinta) {
                tablou_rezultat.push(tablou[i])
            }
        }
        if (operator === '<') {
            if (tablou[i] < referinta) {
                tablou_rezultat.push(tablou[i])
            }
        }
        if (operator === '>') {
            if (tablou[i] > referinta) {
                tablou_rezultat.push(tablou[i])
            }
        }
        if (operator === '!=') {
            if (tablou[i] != referinta) {
                tablou_rezultat.push(tablou[i])
            }
        }
        if (operator === '<=') {
            if (tablou[i] <= referinta) {
                tablou_rezultat.push(tablou[i])
            }
        }
        if (operator === '>=') {
            if (tablou[i] >= referinta) {
                tablou_rezultat.push(tablou[i])
            }
        }
    }
    if (tablou_rezultat.length === 0) {
        p.innerText = "Nu au fost gasite elemente care sa corespunda operatorului " + elemente_calcul.operator
    } else {
        p.innerText = "Au fost gasite elementele " + tablou_rezultat + " care corespund operatorului " + elemente_calcul.operator
    }
}

function reseteaza_valori() {
    executed_operator = false
    executed_tablou = false
    executed_referinta = false
    p.innerText = null
    tablou_rezultat = []
    let span = document.getElementById('span_cu_selectie')
    if (span !== null) {
        span.remove()
    }
    while (a.length > 0) {
        a[0].parentNode.removeChild(a[0]);
    }

    let tablou = document.getElementById('element_tablou1')
    if (tablou !== null) {
        tablou.remove()
    }
    let referinta = document.getElementById('element_referinta1')
    if (referinta !== null) {
        referinta.remove()
    }

}
