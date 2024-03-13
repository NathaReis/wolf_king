const $audio = document.querySelector("audio")
const $play = document.querySelector("#play")
const $btn = document.querySelector(".button")
$btn.onclick = () => control()
const control = () =>
{
    $play.classList.toggle("play")
    $play.classList.toggle("pause")
    alert($btn.innerHTML)
    if($btn.innerHTML == 'Desligado')
    {
        $btn.innerHTML = 'Ligado'
        $audio.play()
    }
    else 
    {
        $btn.innerHTML = 'Desligado'
        $audio.pause()
    }
}