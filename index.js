

const TelegramBot = require('node-telegram-bot-api');
// const token = '477553552:AAFPFR-UOeW2ObvIIWp8QCQnOyhGTuOWBVo';
const token = '1218491996:AAER_845pPyW_I-H5kWWlaZY8QZqu2yQ69g';
const bot = new TelegramBot(token, { polling: true });
exports.bot = bot;


const APRI_CANCELLO = "\ud83d\udde3 Apri cancello"


var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED = new Gpio(17, 'out'); //use GPIO pin 4 as output



inline_keyboard = [];


// Here starts everything
bot.onText(/\/start/, (msg) => {
    var telegramUser = msg.from

    //  $.sendMessage("Utente (" + telegramUser.firstName + " " + telegramUser.lastName + ")  " + body.message)
    bot.sendMessage(msg.chat.id, "Welcome " + msg.from.first_name + ", registrazione effettuata correttamente! Adesso puoi aprire il cancello.", {
        "reply_markup": {
            "keyboard": [
                [APRI_CANCELLO]
            ]
        }
    });
});


function apri() {

    LED.writeSync(1); //turn LED on or off depending on the button state (0 or 1)
    setTimeout(() => { LED.writeSync(0); }, 100);
}


// Catch every messagge text 
bot.on('message', (msg) => {

    //    const Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
    //    const LED = new Gpio(17, 'out'); //use GPIO pin 4, and specify that it is output

    if (msg.text.toString() === APRI_CANCELLO) {

        bot.sendMessage(msg.chat.id, "Il cancello 1 è stato aperto!")

        setTimeout(apri, 500);

    }
    //--
    else {
        bot.sendMessage(msg.chat.id, "Commando non riconosciuto!")
    }

})





//*************************************************************************************************************************** */
//*************************************************************************************************************************** */
//*************************************************************************************************************************** */
//*************************************************************************************************************************** */
//*************************************************************************************************************************** */
//*************************************************************************************************************************** */

