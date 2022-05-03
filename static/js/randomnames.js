let nametable = document.getElementsByClassName("tablenames")[0]

let colors = ["#C6F5D4", "#B1EDDB", "#B1C7ED", "#D4B1ED", "#EDB1EA", "#EDB1B8"]
let step = 0

nametable.onclick = function (event) {
    if(step == colors.length - 1){
        step = 0
    } else {
        step++
    }
    nametable.style["background-color"] = colors[step]
}