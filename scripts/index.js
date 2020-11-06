const denos = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"]
const cardImages = ["hearts", "spades", "diamonds", "clubs"]
const isDbug = true
cardJSONs = []

function main(){
    addCards()
}

function addCards(){
    for (let i = 0; i < 6; i++){
        card = generateRandomCard()

        if(isCardDuplicate(card)){
            i--
            continue
        }

        createCardElement(card)
    }
}

function generateRandomCard(){
    const deno = getRandomElement(denos)
    const img = getRandomElement(cardImages)

    return {deno, img}
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
    console.log(cardJSON)

    return false
}

function createCardElement(card){
    
}


main()