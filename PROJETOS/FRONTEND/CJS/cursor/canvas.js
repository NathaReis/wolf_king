const $canvas = document.querySelector("canvas")
const ctx = $canvas.getContext("2d")

$canvas.width = window.innerWidth
$canvas.height = window.innerHeight

// // Square
// let x = 100
// let y = 100
// let width = 100
// let height = 100
// ctx.fillStyle = "#827"
// ctx.fillRect(x, y, width, height)
// ctx.fillStyle = "#123"
// ctx.fillRect(x+300, y, width, height)

// // Line
// ctx.beginPath() // Another drawing
// ctx.moveTo(200, 200)//Starting point
// ctx.lineTo(250, 150)//End point
// ctx.lineTo(200, 100)//Continuation
// ctx.moveTo(500, 200)//Starting point
// ctx.lineTo(550, 150)//End point
// ctx.lineTo(500, 100)//Continuation
// ctx.strokeStyle = "#019"
// ctx.stroke()

// // Arc / Circle
// // Loop
// for(let i = 0; i < 10; i++) {
//     let x = Math.random()* window.innerWidth
//     let y = Math.random()*window.innerHeight
//     ctx.beginPath() // Another drawing
//     ctx.arc(x, y, 30, 0, Math.PI * 2, false)
//     ctx.strokeStyle = "black"
//     ctx.stroke() 
// }

const mouse = {
    x: undefined,
    y: undefined
}
const colorArray = [
    '#012E40',
    '#025159',
    '#038C8C',
    '#03A696',
    '#F28705',
]
window.addEventListener("mousemove", (e) => {
        mouse.x = e.x 
        mouse.y = e.y
})// Local do cursor

window.addEventListener("resize", () => {
    $canvas.width = window.innerWidth
    $canvas.height = window.innerHeight
    init()
})// Adapta a tela quando o tamanho é alterado

function Circle(x, y, dx, dy, radius) {
    this._x = x;
    this._y = y;
    this._dx = dx;
    this._dy = dy;
    this._radius = radius;
    this._minRadius = radius;
    this._maxRadius = radius * 10;
    this._color = colorArray[Math.floor(Math.random() * colorArray.length)];;

    this.draw = () => {
        ctx.beginPath(); // Another drawing
        // ctx.fillRect(this._x, this._y, this._radius, this._radius)
        ctx.arc(this._x, this._y, this._radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this._color;
        ctx.fill();
    }// Desenha o bolha

    this.update = () => {
        if(this._x + this._radius > innerWidth || this._x - this._radius < 0) {
            this._dx *= -1;
        }
    
        if(this._y + this._radius > innerHeight || this._y - this._radius < 0) {
            this._dy *= -1;
        }
    
        this._x += this._dx;
        this._y += this._dy;

        // interactivity
        if(mouse.x - this._x < 50 && mouse.x - this._x > -50
            && mouse.y - this._y < 50 && mouse.y - this._y > -50
            && this._radius < this._maxRadius) {
            this._radius += 1;
        }
        else if(this._radius > this._minRadius){
            this._radius -= 1;
        }

        this.draw();
    }// Muda a posição e chama a função de desenho
}

let circleArray = []
function init() {
    circleArray = []
    for(let i = 0; i < 1000; i++) {
        let radius = Math.random() * 3 + 1
        let x = Math.random() * (innerWidth - radius * 2) + radius 
        let y = Math.random() * (innerHeight - radius * 2) + radius
        let dx = (Math.random() - .5)
        let dy = (Math.random() - .5)
        circleArray.push(new Circle(x, y, dx, dy, radius))
    }// Cria bolhas de forma automátizada
}
init()

function animate() {
    requestAnimationFrame(animate);// Loop
    ctx.clearRect(0, 0, innerWidth, innerHeight)// Clean the screen before drawing on it

    for(let circle of circleArray) {
        circle.update()
    }// Chama o update de cada bolha
}// Cria a animação
animate()

// https://www.youtube.com/watch?v=vxljFhP2krI&list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL&index=4