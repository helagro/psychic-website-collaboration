const denos = ["A", "2", "3", "4", "5", "6", "7", "8", "9","10", "J", "Q", "K"]
const cardImages = ["hearts", "spades", "diamonds", "clubs"]
const isDbug = true

function main(){
    addCards()
}

function addCards(){
    cardJSONs = []

    for (let i = 0; i < 6; i++){
        card = generateRandomCard()
        cardJSON = JSON.stringify(card)

        if(cardJSONs.includes(cardJSON)){ //Prevents same card from appearing twice
            i--
            continue
        }

        cardJSONs.push(cardJSON)
        console.log(cardJSON)
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


main()