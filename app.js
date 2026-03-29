// ============ TASK 1: Decode Messages ============
console.log("Task 1: Decoded Messages ");

// Message 1
let message1 = " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC";
let decoded1 = message1.split('').reverse().join('');
console.log("Message 1:", decoded1);

// Message 2
let message2 = "!ecitcarp htiw retteb teg ll'uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB";
let decoded2 = message2.split('').reverse().join('');
console.log("Message 2:", decoded2);

// Message 3
let message3 = "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY";
let decoded3 = message3.split('').reverse().join('');
console.log("Message 3:", decoded3);

// Message 4
let message4 = ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ";
let decoded4 = message4.split('').reverse().join('');
console.log("Message 4:", decoded4);


// ============ TASK 2: Create and Reverse Messages ============
console.log("Task 2: Original Messages ");

let original1 = "You can do this!";
let original2 = "Practice makes perfect.";
let original3 = "Never give up on your dreams.";
let original4 = "Coding is fun and rewarding.";

console.log(original1);
console.log(original2);
console.log(original3);
console.log(original4);

console.log(" Task 2: Reversed Messages ");

let reversed1 = original1.split('').reverse().join('');
let reversed2 = original2.split('').reverse().join('');
let reversed3 = original3.split('').reverse().join('');
let reversed4 = original4.split('').reverse().join('');

console.log(reversed1);
console.log(reversed2);
console.log(reversed3);
console.log(reversed4);