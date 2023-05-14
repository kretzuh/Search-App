let operatori_comparatie = ['<', '>', '=', '!=']

let select = document.getElementById('selecteaza_operator')
let option = document.getElementById('option')
let body = document.getElementsByTagName('body')
let p = document.createElement('p')

//varianta cu forEach

operatori_comparatie.forEach(operator => {
    let option = document.createElement('option')
    option.innerText = operator
    option.value = operator
    select.add(option)
})

//varianta cu for loop

/*for (let i=0; i<operatori_egalitate.length; i++) {
    let option = document.createElement('option')
    option.innerText = operatori_egalitate[i]
    select.appendChild(option)
}*/

elemente = {
    operator_comparatie: '',
    array: [],
    referinta: 0
}

let current_number = document.getElementById('number')
let save_current_number = document.getElementById('button')
let referinta = document.getElementById('referinta')

save_current_number.onclick = () => {
    if (elemente.array.length < 10) {
        elemente.array.push(+current_number.value)
    } else {
        current_number.disabled = true
    }
}

/*select.addEventListener('onchange', function() {
    elemente.operator_comparatie = option.value
})*/

select.onchange = () => {
    elemente.operator_comparatie = event.target.value
}

referinta.onchange = () => {
    elemente.referinta = +referinta.value
}

let cauta = document.getElementById('cauta')
let reset = document.getElementById('reset')

cauta.onclick = () => {
    let rezultat = []
    switch (elemente.operator_comparatie) {
        case '<':
            for (let i = 0; i < elemente.array.length; i++) {
                if (elemente.referinta < elemente.array[i]) {
                    rezultat.push(elemente.array[i])
                }
            }
            break
        case ">":
            for (let i = 0; i < elemente.array.length; i++) {
                if (elemente.referinta > elemente.array[i]) {
                    rezultat.push(elemente.array[i])
                }
            }
            break
        case "=":
            for (let i = 0; i < elemente.array.length; i++) {
                if (elemente.referinta === elemente.array[i]) {
                    rezultat.push(elemente.array[i])
                }
            }
            break
        case "!=":
            for (let i = 0; i < elemente.array.length; i++) {
                if (elemente.referinta != elemente.array[i]) {
                    rezultat.push(elemente.array[i])
                }
            }
            break
    }
    if (rezultat.length != 0) {
        p.innerText = 'Numerele care corespund cautarii dvs. sunt ' + rezultat
    } else {
        p.innerText = 'Nu exista numere care sa corespunda cautarii dvs.'
    }
    body[0].appendChild(p)
}

reset.onclick = () => {
    current_number.value = null
    referinta.value = null
    current_number.disabled = false
    body[0].removeChild(p)
}






