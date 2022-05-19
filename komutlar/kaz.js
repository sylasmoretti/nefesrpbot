
const Discord = require('discord.js');//Fiber <3 LysteX
const db = require('quick.db')
  const ms = require('ms');
exports.run = async(client, message, args) => {
var bakiye = db.fetch(`para_${message.author.id}`)
var hesapd = db.fetch(`hesapdurum_${message.author.id}`)
var demirkazma = db.get(`demirkazma_${message.author.id}`)
var elmaskazma = db.get(`elmaskazma_${message.author.id}`)
var taşkazma = db.get(`taşkazma_${message.author.id}`)
let cd = 0 //30 saniye şuan kendinize göre ayarlayınız
let sure = await db.fetch(`calissüre_${message.member.id}`)
     
      if (sure !== null && cd - (Date.now() - sure) > 0) {
        let timeObj = ms(cd - (Date.now() - sure)) 
      message.channel.send(`Bir daha coin kazmak için biraz beklemen lazım **${timeObj.seconds} saniye** sonra tekrar dene!`).then(msg => msg.delete({ timeout: `${cd}`}))
    } else {
        if(!hesapd) return message.channel.send("İlk önce hesap oluşturmalısın\nHesap oluşturmak için `!hesap-oluştur <isim>`")

   if(!args[0]) return message.reply(`Bir coin türü belirtiniz. Örnek: !kaz btc/ethereum/nefes coin`)
if(args[0] === "nefes") {
        let maden = Math.round(Math.random() * 3)
        db.add(`nefes_${message.author.id}`, maden)
message.channel.send(`
Nefes Coin kazıyordun ve ${maden} adet Nefes Coin kazdın!
`)
}
if(args[0] === "btc") {
  let maden4 = Math.round(Math.random() * 2)
        db.add(`btc_${message.author.id}`, +maden4)
  message.channel.send(`
Bitcoin kazıyordun ve ${maden4} bitcoin kazdın!
`)
}
if(args[0] === "ethereum") {
  let maden3 = Math.round(Math.random() * 5)
        db.add(`ethereum_${message.author.id}`, +maden3)
message.channel.send(`
Ethereum kazıyordun ve ${maden3} ethereum kazdın!
`)
}    
      
       

  
   db.set(`calissüre_${message.member.id}`, Date.now())
                     }
}
					 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kaz', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};