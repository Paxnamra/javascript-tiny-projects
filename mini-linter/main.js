let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');
console.log(storyWords);

let betterWords = storyWords.filter(word => {
    return word !== unnecessaryWords[0] &&
        word !== unnecessaryWords[1] &&
        word !== unnecessaryWords[2];
});

function countOverused(input) {
    let cReally = 0; let cVery = 0; let cBasically = 0;

    for (let i = 0; i < input.length; i++) {

        switch(input[i]) {
            case 'really':
                cReally++;
                break;
            case 'very':
                cVery++;
                break;
            case 'basically':
                cBasically++;
                break;
            default:
                break;
        }
    }
    return `Overused words appearance: "${overusedWords[0]}" times: ${cReally}, 
                           "${overusedWords[1]}" times: ${cVery},
                           "${overusedWords[2]}" times: ${cBasically}`;
};

function sentenceCount(input) {
    let sentenceSymbol = 0

    for (let i = 0; i < input.length; i++) {
        if (input[i].indexOf('.') !== -1 || input[i].indexOf('!') !== -1) {
            sentenceSymbol++;
        }
    }
    return sentenceSymbol;
};

console.log();
console.log('Words count: ' + storyWords.length);
console.log('Sentence count: ' + sentenceCount(storyWords));
console.log(countOverused(storyWords));
console.log();

let stringFormattedText = betterWords.join(' ');
console.log(stringFormattedText);
