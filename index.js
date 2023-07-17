// Code your solutions in this file
function writeCards(names, message){
    const messages = [];


    for(i =0; i<names.length; i++){
        messages.push("Thank you, ${names[i]}, for the wonderful ${message} gift!")
    }
    return messages;
}
console.log(writeCards(["Anzal", "Abdi", "Adan"],"surprise"))
writeCards([i]);

function countDown(number){
    while(number>=0){
        console.log(number);
        number--;
    }
}
countDown(20);