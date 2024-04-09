const $iframe = document.querySelector(".iframe")
const $btns = document.querySelectorAll(".btn")
const address = '/src/pages/'

$btns.forEach(btn => {
    btn.onclick = () => {
        console.log(btn.innerHTML)

    }
})