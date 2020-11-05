
const messages = ["True", "False", "Yes", "No", "You are worthless", "Great fortune awaits you"]
const msgDisplay = document.getElementById("msg_display")


function main(){
    const randomNumInRange = Math.floor(Math.random()*messages.length)
    msgDisplay.innerHTML = messages[randomNumInRange]
}


main()