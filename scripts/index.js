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

async function fillCards(shouldReturnToRotation){
    cardJSONs.length = 0
    for (cardElement of cardElements){
        rotateCard(cardElement, shouldReturnToRotation)
        await sleep(200)
        fillCard(cardElement)
    }
}

function sleep(delay){
    return new Promise((resolve) => setTimeout(resolve, delay))
}

function rotateCard(cardElement){
    const cardInner = cardElement.getElementsByClassName("card_inner")[0]
    cardInner.style.transform = "rotateY(0deg)"
    setTimeout((cardInner) => cardInner.style.transform = "rotateY(180deg)", 400, cardInner)
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
    const cardJSON = JSON.stringify(card)

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
}

main()