function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
  }


let mainblock = document.getElementsByClassName("kekblock")[0]
mainblock.style.left = "0px"

const screenWidth = window.screen.width
const screenHeight = window.screen.height
let body = document.body
let x = 0
let y = 0
let gm = 1
speedx = 0.6
speedy = 0.6

const xm = (direct) => {
	mainblock.style.marginLeft = `${x + speedx * direct}px`
	x += speedx * direct 
}
const ym = (direct) => {
	mainblock.style.marginTop = `${y + speedy * direct}px`
	y += speedy * direct 
}

const moving = () => {
	if(gm == 1) {
		if(x <= screenWidth - 800){
			xm(1)
		} else {
			gm = 2
		}
	}
	if(gm == 2) {
		if(y <= screenHeight - 500){
			ym(1)
		} else {
			gm = 3
		}
	}
	if(gm == 3) {
		if(x >= 0){
			xm(-1)
		} else {
			gm = 4
		}
	}
	if(gm == 4) {
		if(y >= 0){
			ym(-1)
		} else {
			gm = 1
		}
	}
}


setInterval(moving, 1)


const create_mathem = () => {
	let colors = ["brown", "white", "black", "yellow", "green", "red"]
	let new_block = document.createElement("div")
	new_block.style.width = "100px"
	new_block.style.height = "100px"
	new_block.style.position = "absolute"
	new_block.style.display = "inline-block"
	new_block.style.borderRadius = "100%"
	new_block.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
	new_block.style.left = `${getRandomInt(0, screenWidth - 100)}px`
	new_block.style.top = `${getRandomInt(0, screenHeight - 100)}px`
	new_block.setAttribute("class", "circle")
	document.body.appendChild(new_block)
}




document.getElementById("buttonmayhem").addEventListener("click", () => {
	
setInterval(() => {
	let colors = ["brown", "white", "black", "yellow", "green", "red"]
	let new_block = document.createElement("div")
	new_block.style.width = "100px"
	new_block.style.height = "100px"
	new_block.style.position = "absolute"
	new_block.style.display = "inline-block"
	new_block.style.borderRadius = "100%"
	new_block.style.border = "2px solid black"
	new_block.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
	new_block.style.left = `${getRandomInt(0, screenWidth - 100)}px`
	new_block.style.top = `${getRandomInt(0, screenHeight - 100)}px`
	new_block.setAttribute("class", "circle")
	document.body.appendChild(new_block)
}, 1)

setInterval(() => {
	elems = document.getElementsByClassName("circle")
	Array.from(elems).forEach(element => {
		let positionInfo = element.getBoundingClientRect();
		element.style.width = `${positionInfo["width"] + 1}px`
		element.style.height = `${positionInfo["height"] + 1}px`
	})
}, 1)
})


