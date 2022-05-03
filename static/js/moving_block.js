let block = document.getElementsByClassName("moving_block")[0]
block.style.backgroundColor = "brown"
let block_rotate = 0
let speed = [0, 0, 0]
let motion_speed = 4
let hiden_console = 1

let body = document.body

let console_block = document.getElementsByClassName("console")[0]
let color_td = document.getElementById("color_td")
let draw_td = document.getElementById("draw_td")
let border_td = document.getElementById("border_td")
let size_slicer = document.getElementById("size_slicer")
let elaser_td = document.getElementById("elaser_td")

body.addEventListener("keydown", (event) => {
    let check_draw = document.forms["color_form"]["rainbow"]

    if(event.key == "f" && event.ctrlKey) {
        event.preventDefault()
        open_menu_func()
    }

    let draw_color = "red"

    if(event.key == "X" && event.shiftKey) {
        let size_slicer_now = document.getElementById("size_slicer")
        let new_value = Number(size_slicer_now.value) + 3
        size_slicer_now.value = new_value
        console.log(new_value)
        block.style.width = `${new_value}px`
        block.style.height = `${new_value}px`
    }
    if(event.key == "Z" && event.shiftKey) {
        let size_slicer_now = document.getElementById("size_slicer")
        let new_value = Number(size_slicer_now.value) - 3
        size_slicer_now.value = new_value
        console.log(new_value)
        block.style.width = `${new_value}px`
        block.style.height = `${new_value}px`
        
    }

    if(event.key == "!" && event.shiftKey) {
        draw_color = "red"
        block.style.backgroundColor = draw_color
        color_td.style.backgroundColor = draw_color
    }
    if(event.key == "@" && event.shiftKey) {
        draw_color = "blue"
        block.style.backgroundColor = draw_color
        color_td.style.backgroundColor = draw_color
    }
    if(event.key == "#" && event.shiftKey) {
        draw_color = "green"
        block.style.backgroundColor = draw_color
        color_td.style.backgroundColor = draw_color
    }
    if(event.key == "$" && event.shiftKey) {
        draw_color = "yellow"
        block.style.backgroundColor = draw_color
        color_td.style.backgroundColor = draw_color
    }
    if(event.key == "%" && event.shiftKey) {
        draw_color = "black"
        block.style.backgroundColor = draw_color
        color_td.style.backgroundColor = draw_color
    }
    if(event.key == "^" && event.shiftKey) {
        draw_color = "white"
        block.style.backgroundColor = draw_color
        color_td.style.backgroundColor = draw_color
    }
    if(event.key == "&" && event.shiftKey) {
        draw_color = "pink"
        block.style.backgroundColor = draw_color
        color_td.style.backgroundColor = draw_color
    }
    if(event.key == "*" && event.shiftKey) {
        draw_color = "brown"
        block.style.backgroundColor = draw_color
        color_td.style.backgroundColor = draw_color
    }
    if(event.key == "(" && event.shiftKey) {
        draw_color = "aqua"
        block.style.backgroundColor = draw_color
        color_td.style.backgroundColor = draw_color
    }
    if(event.key == "B" && event.shiftKey) {
        event.preventDefault()
        if(border_td.checked) {
            block.style.border = "none"
            border_td.checked = false
        } else {
            block.style.border = "3px solid black"
            border_td.checked = true
        }
    }
    if(event.key == "D" && event.shiftKey) {
        event.preventDefault()
        if(draw_td.checked) {
            
            draw_td.checked = false
        } else {
            
            draw_td.checked = true
        }
    }
    
    if(event.key == "C" && event.shiftKey) {
        event.preventDefault()
        if(elaser_td.checked) {
            
            elaser_td.checked = false
        } else {
            
            elaser_td.checked = true
        }
    }
    

    if(hiden_console == 1){
        switch(event.key){
            case "d":
                if(check_draw.checked){
                    block.style.backgroundColor = "red"
                }
                speed[0] = motion_speed
                break
            case "a":
                if(check_draw.checked){
                    block.style.backgroundColor = "green"
                }
                speed[0] = -motion_speed
                break
            case "s":
                if(check_draw.checked){
                    block.style.backgroundColor = "blue"
                }
                speed[1] = motion_speed
                break
            case "w":
                if(check_draw.checked){
                    block.style.backgroundColor = "yellow"
                }
                speed[1] = -motion_speed
                break
        }
    }
})

body.addEventListener("keyup", (event) => {
    if(hiden_console == 1){
        switch(event.key){
            case "d":
                speed[0] = 0
                break
            case "a":
                speed[0] = 0
                break
            case "s":
                speed[1] = 0
                break
            case "w":
                speed[1] = 0
                break
            case "q":
                speed[2] = 0
                break
            case "e":
                speed[2] = 0
                break
        }
    }
    
})
body.addEventListener("mousemove", event => {
    if(elaser_td.checked) {
        let elements = document.querySelectorAll(':hover');
        Array.from(elements).forEach(el => {
            if(el.getAttribute("class") == "drawing") {
                el.remove()
            }
        })
    }
})

const moving = () => {
    let block_pos = block.getBoundingClientRect()
    block.style.left = `${block_pos["left"] + speed[0]}px` 
    block.style.top = `${block_pos["top"] + speed[1]}px` 
}

let color_button = document.getElementById("color_button")
color_button.addEventListener("click", (event) => {
    let color_form = document.forms["color_form"]
    let color = color_form["color_field"].value
    block.style.backgroundColor = color
})

let size_button = document.getElementById("size_button")
size_button.addEventListener("click", (event) => {
    let size_form = document.forms["size_form"]
    let size = size_form["size_field"].value
    block.style.width = `${size}px`
    block.style.height = `${size}px`
})

let open_menu = document.getElementById("open_menu")

const open_menu_func = () => {
    if(hiden_console == 1) {
        open_menu.innerHTML = "Close menu"
        console_block.style.display = "inline-block"
        hiden_console = 0
    } else {
        open_menu.innerHTML = "Open menu"
        console_block.style.display = "none"
        hiden_console = 1
    }
}

open_menu.addEventListener("click", () => {
    open_menu_func()
})

let clear_button = document.getElementById("clear_button")
clear_button.addEventListener("click", (event) => {
    let drawing_trash = document.getElementsByClassName("drawing")
    Array.from(drawing_trash).forEach((el) => {
        el.remove()
    })
})

const draw = () => {
    let block_pos = block.getBoundingClientRect()
    let painting = document.createElement("div")
    painting.setAttribute("class", "drawing")
    painting.style.width = `${block_pos["width"] - 5}px`
    painting.style.height = `${block_pos["height"] - 5}px`
    painting.style.left = `${block_pos["left"]}px`
    painting.style.top = `${block_pos["top"]}px`
    painting.style.display = "inline-block"
    painting.style.position = "absolute"
    painting.style.backgroundColor = block.style.backgroundColor
    document.body.appendChild(painting)
    
}



document.getElementById("border_check").addEventListener("click", () => {
    if(document.forms["color_form"]["border"].checked){
        block.style.border = "3px solid black"
        block.style.zIndex = "2"
    } else {
        block.style.border = "none"
        block.style.zIndex = "2"
    }
})



size_slicer.addEventListener("input", (event) => {
    block.style.width = `${size_slicer.value}px`
    block.style.height = `${size_slicer.value}px`
})




setInterval(() => {
    let check_draw = document.forms["draw_form"]["draw_check"]
    if(check_draw.checked || draw_td.checked) {
        draw()
    }
}, 1)

setInterval(moving, 1)


// stolen code // paint panel click&drag // main block click&drag
var mousePosition_panel;
var offset_panel = [0,0];
var isDown_panel = false;
const paint_panel_for_drag = document.getElementById("paint_panel_id");
paint_panel_for_drag.addEventListener('mousedown', function(e) {
    isDown_panel = true;
    offset_panel = [
        paint_panel_for_drag.offsetLeft - e.clientX,
        paint_panel_for_drag.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown_panel = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown_panel) {
        mousePosition_panel = {

            x : event.clientX,
            y : event.clientY

        };
        paint_panel_for_drag.style.left = (mousePosition_panel.x + offset_panel[0]) + 'px';
        paint_panel_for_drag.style.top  = (mousePosition_panel.y + offset_panel[1]) + 'px';
    }
}, true);

var mousePosition_main;
var offset_main = [0,0];
var isDown_main = false;
const main_for_drag = document.getElementById("moving_block_id");
main_for_drag.addEventListener('mousedown', function(e) {
    isDown_main = true;
    offset_main = [
        main_for_drag.offsetLeft - e.clientX,
        main_for_drag.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown_main = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown_main) {
        mousePosition_main = {

            x : event.clientX,
            y : event.clientY

        };
        main_for_drag.style.left = (mousePosition_main.x + offset_main[0]) + 'px';
        main_for_drag.style.top  = (mousePosition_main.y + offset_main[1]) + 'px';
    }
}, true);
//