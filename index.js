// Code your solutions in this file
const messages = [];

function writeCards(name, event){
  for (let i =0; i<name.length; i++){
    messages[i] = `Thank you, ${name[i]}, for the wonderful ${event} gift!`;
  }
  return messages;
}

function countDown(number){
  if (number === Math.abs(number)){
    while (number>=0){
      console.log(number--);
    }
  }
  }
 












/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

const message = [];

function writeCards(name, event){
    for (let c = 0; c < name.length; c++){
        message.push(`Thank you, ${name[c]}, for the wonderful ${event} gift!`)
    }
    return message;
};

function countDown(number){
    while (number >= 0){
        console.log(number--);
    }
    
};
*/
