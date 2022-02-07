// const MilkSong = () => {
//     let lyrics = "";
//     for(let i = 99; i > 0; i--){
//         let number = i.toString();
//         if (i === 1) {
//             lyrics = lyrics + "1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall. No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.";
//         } else {
//             lyrics = lyrics + `${number} bottles of milk on the wall, ${number} bottles of milk. Take one down and pass it around, ${number - 1} bottles of milk on the wall.`;
//         }
//     }
//     return lyrics;
// }

// console.log(MilkSong());

let lyrics = "";
for (let i = 99; i > 0; i--) {
    let number = i.toString();
    if (i === 1) {
        lyrics = lyrics + "1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall. No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.";
    } else {
        lyrics = lyrics + `${number} bottles of milk on the wall, ${number} bottles of milk. Take one down and pass it around, ${number - 1} bottles of milk on the wall.`;
    }
    console.log(lyrics);
}