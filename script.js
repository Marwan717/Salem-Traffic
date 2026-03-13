```javascript
const canvas = document.getElementById("intersectionCanvas")
const ctx = canvas.getContext("2d")

canvas.width = 600
canvas.height = 400

let car1 = {x:0,y:200,v:2}
let car2 = {x:300,y:0,v:2}

function drawRoad(){

ctx.strokeStyle="#444"

ctx.beginPath()
ctx.moveTo(0,200)
ctx.lineTo(600,200)
ctx.stroke()

ctx.beginPath()
ctx.moveTo(300,0)
ctx.lineTo(300,400)
ctx.stroke()

}

function drawCars(){

ctx.fillStyle="cyan"
ctx.fillRect(car1.x,190,20,20)

ctx.fillStyle="orange"
ctx.fillRect(290,car2.y,20,20)

}

function update(){

car1.x+=car1.v
car2.y+=car2.v

let dx=(300-car1.x)
let dy=(200-car2.y)

let distance=Math.sqrt(dx*dx+dy*dy)

let relativeSpeed=car1.v+car2.v

let ttc=distance/relativeSpeed

if(ttc<2){

document.getElementById("warning").innerText="⚠ Near Miss Detected (Low TTC)"

}

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

drawRoad()
drawCars()
update()

requestAnimationFrame(animate)

}

animate()

function scrollToDemo(){

document.getElementById("demo").scrollIntoView({behavior:"smooth"})

}
```
