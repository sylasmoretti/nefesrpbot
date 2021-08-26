const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 8000);
  var msgArray = [
"BLACK ROLEPLAY",
"DEVELOPER:' Gürkan#3422",
"SOYGUN LOG",
"BLACK BOT",
"VIP ÖZELLİKLER"
 ];

 setInterval(() => {
  var rastgeleOyun = Math.floor(Math.random() * msgArray.length);
  client.user.setActivity(`${msgArray[rastgeleOyun]}`)
}, 5000);
    console.log(`BLACK ROLEPLAY Botu başarıyla giriş yaptı.`);
}