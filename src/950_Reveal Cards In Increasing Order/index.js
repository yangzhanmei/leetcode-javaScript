/**
 * @param {number[]} deck
 * @return {number[]}
 */
const deckRevealedIncreasing = function (deck) {
    if (deck.length < 2) {
        return deck;
    }
    const sortedDeck = deck.sort((a, b) => a - b);
    let index = sortedDeck.length - 1;
    let result = [];
    result.push(sortedDeck[index--]);
    while (result.length < sortedDeck.length) {
        result = [sortedDeck[index--], result.pop(), ...result];
    }
    return result;
};