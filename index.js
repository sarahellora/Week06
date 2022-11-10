const values = [2,3,4,5,6,7,8,9,10,11,12,13,14]
const suits = ["_H","_S","_D","_C"]

const buildDeck = (v,s) =>{
  const deck =[]
     for(let i = 0 ; i< s.length; i++){
      for(let j = 0 ; j < v.length; j++){
        deck.push(v[j]+ s[i])
  }
     }
return deck
}

const deck = buildDeck(values,suits)

const shuffleDeck = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array
}

const shuffledDeck = shuffleDeck(deck)

const playerOneDeck = shuffledDeck.slice(0,26);
const playerTwoDeck = shuffledDeck.slice(27,52);

const valueOfDeck = (deck) =>{
  const deckValues = deck.map(card => parseInt(card.split("_")[0]))
  return deckValues
}

const playerOneValue = valueOfDeck(playerOneDeck)
const playerTwoValue=  valueOfDeck(playerTwoDeck)

const whoWon = (deck1,deck2) => {
  playerOneCount = 0
  playerTwoCount = 0

  for(let i = 0 ; i < deck1.length; i++){
        if(deck1[i] > deck2[i]){
            playerOneCount ++
        }
        else{
            playerTwoCount ++
        }
    }
      return (playerOneCount > playerTwoCount) ? "Player One Wins" : "Player Two Wins"
}
    console.log(whoWon(playerOneValue,playerTwoValue))