const buttons = document.querySelectorAll("button")
const $calcBox = document.querySelector(".calcBox")
const $calcRes = document.querySelector(".calcRes")

let isOperador = false
let history = []

const resultado = () => {
    history.push({calc: $calcBox.innerHTML, res: eval($calcBox.innerHTML)})
    $calcBox.innerHTML = eval($calcBox.innerHTML)
    $calcRes.innerHTML = ''
    console.log({calc: $calcBox.innerHTML, res: eval($calcBox.innerHTML)})
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const classes = btn.className.split(" ")

        if(classes.includes('operador')) {
            if(!isOperador) {
                $calcBox.innerHTML += btn.innerHTML
                isOperador = true
            }
            else {
                $calcBox.innerHTML = $calcBox.innerHTML.slice(0, -1)
                $calcBox.innerHTML += btn.innerHTML
            }
        }
        else if(classes.includes('numero')) {
            isOperador = false 
            $calcBox.innerHTML += btn.innerHTML
        }
        else if(classes.includes('limpar')) {
            $calcBox.innerHTML = ''
        }
        else if(classes.includes('apagar')) {
            $calcBox.innerHTML = $calcBox.innerHTML.slice(0, -1)
        }

        $calcRes.innerHTML = eval($calcBox.innerHTML) == undefined ? '' : eval($calcBox.innerHTML)

        if(classes.includes('igual')) {
            resultado()
        }
    })
})

window.addEventListener("keydown", (event) => {
    const keyCode = event.keyCode 
    //Numero do teclado
    if(keyCode >= 48 && keyCode <= 57) {[
        $calcBox.innerHTML += keyCode - 48
    ]}
    //Operador do teclado
    switch(keyCode) {
        case 189:
            $calcBox.innerHTML += $calcBox.innerHTML.slice(-1) != '-' ? '-' : ''
            break
        case 109:
            $calcBox.innerHTML += $calcBox.innerHTML.slice(-1) != '-' ? '-' : ''
            break
        case 106:
            $calcBox.innerHTML += $calcBox.innerHTML.slice(-1) != '*' ? '*' : ''
            break
        case 106:
            $calcBox.innerHTML += $calcBox.innerHTML.slice(-1) != '+' ? '+' : ''
            break
        case 111:
            $calcBox.innerHTML += $calcBox.innerHTML.slice(-1) != '/' ? '/' : ''
            break
    }

    //Numero
    if(keyCode >= 96 && keyCode <= 105) {[
        $calcBox.innerHTML += keyCode - 96
    ]}

    //Ponto
    if(keyCode == 190 || keyCode == 110) {
        if($calcBox.innerHTML.slice(-1) != '.') {
            $calcBox.innerHTML += '.'
        }
    }
    //Apagar
    if(keyCode == 8) {
        $calcBox.innerHTML = $calcBox.innerHTML.slice(0, -1)
    }
    $calcRes.innerHTML = eval($calcBox.innerHTML) == undefined ? '' : eval($calcBox.innerHTML)
    //Enter 
    if(keyCode == 13) {
        resultado()
    }
})