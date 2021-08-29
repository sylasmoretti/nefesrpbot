const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 8000);
  var msgArray = [
"BLACK ROLEPLAY ⚡",
"DEVELOPER:' Gürkan#3422 🔧",
"LOG SİSTEMİ 💣",
"BLACK SUNUCU BOT ❤️",
"VIP ÖZELLİKLER 💎",
"GÜZEL SCRİPTLER ❤️",   
 ];

 setInterval(() => {
  var rastgeleOyun = Math.floor(Math.random() * msgArray.length);
  client.user.setActivity(`${msgArray[rastgeleOyun]}`)
}, 5000);
    console.log(`BLACK ROLEPLAY: Şu an ` + client.channels.cache.size + ` adet kanala, ` + client.guilds.cache.size + ` adet sunucuya ve ` + client.guilds.cache.reduce
((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
}