const emails = ["mario.rossi@email.com",
    "giulia.bianchi@email.com",
    "luca.verdi@email.com",
    "anna.neri@email.com",
    "paolo.gialli@email.com",
    "sara.blu@email.com",
    "francesco.rosa@email.com",
    "elena.marrone@email.com",
    "giovanni.argento@email.com",
    "martina.oro@email.com"];
const emailUtente = prompt('inserire la tua email')

let invitato = 'non sei stato invitato';

for (i = 0; i < emails.length; i++) {
    if (emails[i] == emailUtente) {
        invitato = 'sei stato invitato'
    }
}
console.log(invitato)


const computerNumber = Math.floor(Math.random() * 7)
const personalNumber = Math.floor(Math.random() * 7)
console.log('ai:', computerNumber)
console.log('tu:', personalNumber)
if (computerNumber > personalNumber) {
    console.log('hai perso, ritenta')
}else{
    console.log('hai vinto, complimenti')
}