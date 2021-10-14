const messages = {
    "person": ["You should", "You shouldn't", "You don't need to", "You need to", "I know you want to", "Nobody wants to", "You can", "You can't", "You swear to", "You have to"],
    "verb": ["work", "dance", "insist", "try", "study", "improve", "lie", "cry", "fear", "sing"],
    "place": ["like this", "on it", "at the bar", "in the house", "in the school", "on the bus", "at the supermarket", "at your friend's house", "in the pool", "this time of the year"]
};

function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}

function getRandomMessage() {
    alert(messages.person[getRandomNumber()] + ' ' + messages.verb[getRandomNumber()] + ' ' + messages.place[getRandomNumber()]);
}
