let letItBe ="let it be";
let whisper ="whisper words of wisdom";
let there = "there will be an answer";
let lyrics = "";

const sing = () => {
    lyrics = lyrics + letItBe;
    for(let i = 1; i <= 3; i++){
        lyrics = lyrics + ", " + letItBe;
    }
    lyrics = lyrics + ", " + whisper;
    for(let i = 1; i <= 5; i++){
        lyrics = lyrics + ", " + letItBe;
    }
    lyrics = lyrics + ", " + there + ", " + letItBe;
    return lyrics;
}

//Your code above ^^^

console.log(sing());