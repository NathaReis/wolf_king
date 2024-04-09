const buttons = document.querySelectorAll("button")
const $calcBox = document.querySelector(".calcBox")
const $calcRes = document.querySelector(".calcRes")

let isOperador = false

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
            $calcBox.innerHTML = eval($calcBox.innerHTML)
            $calcRes.innerHTML = ''
        }
    })
})