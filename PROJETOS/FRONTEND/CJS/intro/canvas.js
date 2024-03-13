const $canvas = document.querySelector("canvas")
const ctx = $canvas.getContext("2d")

$canvas.width = window.innerWidth
$canvas.height = window.innerHeight

let x = 100
let y = 100
let width = 100
let height = 100

ctx.fillRect(x-100, y-100, width, height)
ctx.fillRect(x, y, width, height)
ctx.fillRect(x+100, y+100, width, height)
ctx.fillRect(x+200, y+200, width, height)
ctx.fillRect(x+300, y+100, width, height)
ctx.fillRect(x+400, y, width, height)
ctx.fillRect(x+500, y-100, width, height)
