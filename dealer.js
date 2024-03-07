

const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const ranks = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

// Function to create a standard deck of cards
function createDeck() {
    const deck = [];
    for (let suit of suits) {
        for (let rank of ranks) {
            deck.push({ suit, rank });
        }
    }
    return deck;
}

// Function to shuffle the deck of cards
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

// Function to deal a card from the deck
function dealCard(deck) {
    return deck.pop();
}

// Function to deal cards to player and dealer
function dealInitialCards() {
    const playerHand = [dealCard(deck), dealCard(deck)];
    const dealerHand = [dealCard(deck), dealCard(deck)];

    // Deal cards to dealer
    dealerHand.forEach((card, index) => {
        const dealerCardElement = document.createElement('img');
        dealerCardElement.src = `kortstokk/${card.rank}_of_${card.suit.toLowerCase()}.png`;
        dealerCardElement.classList.add('card', 'dealer');
        document.querySelector('.dealer').appendChild(dealerCardElement);
    });

    // Deal cards to player
    playerHand.forEach((card, index) => {
        const playerCardElement = document.createElement('img');
        playerCardElement.src = `kortstokk/${card.rank}_of_${card.suit.toLowerCase()}.png`;
        playerCardElement.classList.add('card');
        document.querySelector('.player').appendChild(playerCardElement);
    });

    console.log('Player hand:', playerHand);
    console.log('Dealer hand:', dealerHand);
}

// Shuffle and create deck
let deck = shuffleDeck(createDeck());

// Call dealInitialCards function to deal cards when needed, such as when the game starts
dealInitialCards();

// for (let suit of suits) {
//     for (let value of values) {
//         deck.push({ suit, value });
//     }
// }

// function cardValue(card, currentTotal) {
//     switch (card.value) {
//         case 'A':
//             // If adding 11 would cause a bust, count Ace as 1
//             return currentTotal + 11 > 21 ? 1 : 11;
//         case 'K':
//         case 'Q':
//         case 'J':
//             return 10;
//         default:
//             return parseInt(card.value);
//     }
// }

// function shuffle(deck) {
//     for (let i = deck.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [deck[i], deck[j]] = [deck[j], deck[i]];
//     }
//     return deck;
// }

// function dealCard(deck) {
//     return deck.pop();
// }

// let playerHand = [];
// let dealerHand = [];

// function dealInitialCards() {
//     playerHand.push(dealCard(deck));
//     dealerHand.push(dealCard(deck));
//     playerHand.push(dealCard(deck));
// }

// function calculateHandValue(hand) {
//     let sum = 0;
//     let numAces = 0;
//     for (let card of hand) {
//         const value = cardValue(card);
//         sum += value;
//         if (value === 11) {
//             numAces++;
//         }
//     }
//     while (sum > 21 && numAces > 0) {
//         sum -= 10;
//         numAces--;
//     }
//     return sum;
// }

// function hit() {
//     playerHand.push(dealCard(deck)); // Deal a card to the player
//     const playerTotal = calculateHandValue(playerHand); // Calculate player's total hand value
//     // Update UI to display player's total
//     document.getElementById("total").innerText = playerTotal;
//     if (playerTotal > 21) {
//         // Player busts, handle the bust
//         document.getElementById("result").innerText = "Player Busts!"; // Display bust message
//         // Additional actions you want to perform when the player busts
//         // For example: end the round, disable further actions, etc.
//     }
// }

// function stand() {
//     // Player stands, now it's dealer's turn
//     while (calculateHandValue(dealerHand) < 17) {
//         dealerHand.push(dealCard(deck)); // Dealer draws cards until hand value reaches 17 or more
//     }
//     // Determine winner and update UI accordingly
//     determineWinner();
// }

// function determineWinner() {
//     const playerTotal = calculateHandValue(playerHand);
//     const dealerTotal = calculateHandValue(dealerHand);
// }

// function tilfeldigkort() { 

// const tall = Math.floor(Math.random()* 13) + 1 


// const kortElm = document.querySelector(".card")


// kortElm.src = "kortstokk/" + tall + "_of_clubs.png"

// const suits = ["spades", "hearts", "clubs", "diamonds"]

// const suit_index = Math.floor(Math.random()*4 )

// const suit = suits[suit_index]

// kortElm.src = "kortstokk/" + tall + "_of_" + suit + ".png"

// }

//  setInterval(tilfeldigkort, 1000)




function toggleMenu() {
    const rulesList = document.querySelector('.ruleslist');
    const menuIcon = document.querySelector('.menu-icon');
    if (rulesList.style.display === 'none') {
        rulesList.style.display = 'block';
    } else {
        rulesList.style.display = 'none';
    }
}