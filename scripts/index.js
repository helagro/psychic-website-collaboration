//ANCHOR views
const cardHolderElement = document.getElementById("card_holder")
const cardElements = cardHolderElement.children
const drawCardsBtn = document.getElementById("draw_cards_btn")

const denos = ["A", "2", "3", "4", "5", "6", "7", "8", "9","10", "J", "Q", "K"]
const cardImages = ["hearts", "spades", "diamonds", "clubs"]
const isDbug = true
cardJSONs = []

//ANCHOR inputs
function main(){
    fillCards()
}
function drawCardsOnClick(){
    fillCards()
}

function fillCards(){
    for (cardElement of cardElements){
        fillCard(cardElement)
    }
}

function fillCard(cardElement){
    cardObj = generateRandomCard()
    if (isCardDuplicate(cardObj)){
        fillCard(cardElement)
        return
    }
    fillCardElement(cardElement, cardObj)
}

function generateRandomCard(){
    const deno = getRandomElement(denos)
    const img = getRandomElement(cardImages)

    return [deno, img]
}

function getRandomElement(array){
    const randomNumInRange = Math.floor(Math.random()*array.length)
    return array[randomNumInRange]
}

function isCardDuplicate(card){
    cardJSON = JSON.stringify(card)

    if(cardJSONs.includes(cardJSON))
        return true

    cardJSONs.push(cardJSON)

    return false
}

function fillCardElement(cardElement, cardObj){
    const denoELements = cardElement.getElementsByClassName("deno_display")
    for(denoELement of denoELements){
        denoELement.innerHTML = cardObj[0]
    }

    const iconHolder = cardElement.getElementsByClassName("card_icon")[0]
    iconHolder.src = "img/" + cardObj[1] + ".png"
    console.log(iconHolder.src)
}

main()