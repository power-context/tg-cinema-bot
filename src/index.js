const TelegramBot = require('node-telegram-bot-api')
const config = require('./config')
const helper = require('./helper')
const kb = require('./keyboard-buttons')
const keyboard = require('./keyboard')

const bot = new TelegramBot(config.TOKEN, {
    polling: true
})

helper.logStart()

bot.on('message', msg => {
    console.log("I'm working!")

    switch(msg.text){
    }
})

bot.onText(/\/start/, msg => {
    const text = `Hello, ${msg.from.first_name}!\n
    Choise a command to start:`

    bot.sendMessage(helper.getChatId(msg), text, {
        reply_markup: {
            keyboard: keyboard.home
        }
    })
})