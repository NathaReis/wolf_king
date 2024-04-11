const $textarea = document.querySelector("#textarea")
const $buttons = document.querySelectorAll("button")

const TextConfig = {
    size: 16,
    bold: false,
    italic: false,
    underline: false,
    align: 'left',
    uppercase: false,
    color: '#000',
    value: ''
}

function f1(e) {
    let value = e.value
    value = +value < 0 ? 0 : value
    value = +value > 100 ? 100 : value
    e.value = value
    $textarea.style.fontSize = value + "px"
    TextConfig.size = value
}

function f2(e) {
    e.classList.toggle('active')

    if($textarea.style.fontWeight == 'bold') {
        $textarea.style.fontWeight = 'normal'
        TextConfig.bold = false
    }
    else {
        $textarea.style.fontWeight = 'bold'
        TextConfig.bold = true
    }
}

function f3(e) {
    e.classList.toggle('active')

    if($textarea.style.fontStyle == 'italic') {
        $textarea.style.fontStyle = 'normal'
        TextConfig.italic = false
    }
    else {
        $textarea.style.fontStyle = 'italic'
        TextConfig.italic = true
    }
}

function f4(e) {
    e.classList.toggle('active')

    if($textarea.style.textDecoration == 'underline') {
        $textarea.style.textDecoration = 'none'
        TextConfig.underline = false
    }
    else {
        $textarea.style.textDecoration = 'underline'
        TextConfig.underline = true
    }
}

function f5(e) {
    $textarea.style.textAlign = 'left'
    TextConfig.align = 'left'
}

function f6(e) {    
    $textarea.style.textAlign = 'center'
    TextConfig.align = 'center'
}

function f7(e) {    
    $textarea.style.textAlign = 'right'
    TextConfig.align = 'right'
}

function f8(e) {
    e.classList.toggle('active')

    if($textarea.style.textTransform == 'uppercase') {
        $textarea.style.textTransform = 'lowercase'
        TextConfig.uppercase = false
    }
    else {
        $textarea.style.textTransform = 'uppercase'
        TextConfig.uppercase = true
    }}

function f9(e) {
    e.classList.add('active')
    
    setTimeout(() => e.classList.remove('active'), 1000)

    $textarea.style.fontWeight = "normal"
    $textarea.style.fontAlign = "left"
    $textarea.style.fontStyle = "normal"
    $textarea.style.textTransform = "capitalize"
    $textarea.value = ""
}

function f10(e) {
    let value = e.value
    $textarea.style.color = value
    TextConfig.color = value
}

function f11(e) {
    TextConfig.value = $textarea.value
    const result = JSON.stringify(TextConfig)
    const r = JSON.parse(result)
    console.log(result, r)
}