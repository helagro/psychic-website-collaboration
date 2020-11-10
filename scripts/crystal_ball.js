
const messages = ["True", "False", "Yes", "No", "Maybe", "Go for it"]
const msgDisplay = document.getElementById("msg_display")


function main(){
    const randomNumInRange = Math.floor(Math.random()*messages.length)
    msgDisplay.innerHTML = messages[randomNumInRange]
}


main()