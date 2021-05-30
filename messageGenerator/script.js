// Phrases in a compliment
// Consists

// Describing Phrase
// Quality Phrase
// Ending Phrase
const compPhrase = {
    descPhrase: ['truely,', 'believe,', 'look,', 'you know?'],
    qualPhrase: ['a hard worker', 'smart', 'loyal', 'a good person'],
    endPhrase : ['people love you', 'you succeed', 'you special'],
};

// Generates random index
const generateRandomNumber = number => Math.floor(Math.random() * number);

// Selects one phrase from each of the category
function generateMessage() {
    let message = [];
    for (let phrase in compPhrase) {
        let phraseIndex = generateRandomNumber(compPhrase[phrase].length);
        message.push(compPhrase[phrase][phraseIndex]);
    }
    return message;
}

// Formats selected phrases into  to a compliment message
function formatMessage() {
    const message = generateMessage();
    console.log(`Hey! ${message[0]} you are ${message[1]} and that makes ${message[2]}.`);
}

formatMessage();

// Sample output - Hey! you know? you are a hard worker and that makes you special.