const $corpo = document.querySelector('body')
const $box_letra = document.querySelector(".letra")
const $btn = document.querySelector("#btn")
const $titulo = document.querySelector("#txt_nome")
const $letra = document.querySelector("#txt_letra")
const $audio = document.querySelector("audio")
const $slide = document.querySelector(".slide")
let audio_valid = false
let slide_letra = []
let pos = -1

$btn.onclick = () => btn()

const btn =  () => {
    console.log('o')
    if($btn.innerHTML == 'Play')
    {
        if($letra.value.replace(/\s+/g, '') != '' || $titulo.value.replace(/\s+/g, '')) {
            if(audio_valid) {
                $box_letra.classList.toggle('hide')
                $slide.classList.toggle('hide')
                $btn.classList.toggle('active')
                pos = -1
                const t = $titulo.value
            
                let res = []
            
                res = $letra.value.split('\n\n')
                res = res.map(p => p.split('\n'))
                const aux = res
                res = []
                aux.forEach(r => {
                    r.forEach(element => {
                        res.push(element)
                    })
                })
            
                slide_letra = res 
                $slide.innerHTML = t.toUpperCase()
                $btn.innerHTML = 'Voltar'
                $audio.play()                
            }
            else {
                alert('Áudio inválido!')
            }
        }
        else {
            alert('Campo(s) vazios!')
        }
    }
    else 
    {
        $box_letra.classList.toggle('hide')
        $slide.classList.toggle('hide')
        $btn.classList.toggle('active')
        $btn.innerHTML = 'Play'
        $audio.pause()
        $audio.currentTime = 0
    }
}

const renderizar = () => {
    $slide.innerHTML = slide_letra[pos]
}

$corpo.addEventListener('keydown', e => {
    if(e.keyCode == 37) {
        if(pos > 0) {
            pos--
            renderizar()
        }
    }
    else if(e.keyCode == 39) {
        if(pos < slide_letra.length - 1) {
            pos++
            renderizar()
        }
    }
    else if(e.keyCode == 27) {
        if($btn.innerHTML == 'Voltar') {
            btn()
        }
    }
    else if(e.keyCode == 13) {
        if($btn.innerHTML == 'Play') {
            btn()
        }
    }
})

const $file = document.querySelector("#file")

$file.addEventListener("change", () => {
    const file = $file.files[0]
    console.log(file)
    if(file) {
        const fileExtension = file.name.split('.')[1]

        const allowedExtensions = ['mp3']

        if(allowedExtensions.includes(fileExtension.toLowerCase())) {
            audio_valid = true
            const reader = new FileReader();
            reader.onload = function(event) {
                $audio.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
        else {
            audio_valid = false
            alert('Extensão deve ser mp3!')
        }
    }
    else {
        audio_valid = false
        alert('Nenhum arquivo selecionado')
    }
})