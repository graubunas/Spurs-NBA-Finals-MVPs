const tabs = document.getElementsByClassName("tab")
const spurs = document.getElementsByClassName("spurs")
const buttons = document.getElementsByTagName("button")
const text = document.getElementById("text")
const myTimeout = setTimeout(text, 2000)

for(var x of tabs){
    x.style.display = "none"
}

function changePlayer(evt, name){
    for(var x of tabs){
    x.style.display = "none"
    }
    
    for(var x of spurs){
    x.style.display = "none"
    } 

    document.getElementById(name).style.display = "block"
    
    for(var x of buttons){
        x.classList.remove("selected")
    }
    evt.currentTarget.classList.add("selected")

}
