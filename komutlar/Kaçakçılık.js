
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
      message.channel.send(`Bir daha kaçakçılık yapmak için biraz beklemen lazım **${timeObj.seconds} saniye** sonra tekrar dene!`).then(msg => msg.delete({ timeout: `${cd}`}))
    } else {
        if(!hesapd) return message.channel.send("İlk önce hesap oluşturmalısın\nHesap oluşturmak için `!hesap-oluştur <isim>`")

   if(!args[0]) return message.reply(`Bir kaçakçılık belirtiniz. Örnek: !kaçakçılık şarap/viski/votka/rakı/bira`)
if(args[0] === "şarap") {
        let maden = Math.round(Math.random() * 3)
        db.add(`şarap_${message.author.id}`, maden)
message.channel.send(`
Şarap kaçakçılığı yapıyordun ve ${maden} adet şarap kaçırdın!
`)
}
if(args[0] === "viski") {
  let maden4 = Math.round(Math.random() * 3)
        db.add(`viski_${message.author.id}`, +maden4)
  message.channel.send(`
Viski kaçakçılığı yapıyordun ve ${maden4} adet viski kaçırdın!
`)
}
if(args[0] === "votka") {
  let maden3 = Math.round(Math.random() * 3)
        db.add(`votka_${message.author.id}`, +maden3)
message.channel.send(`
Votka kaçakçılığı yapıyordun ve ${maden3} adet votka kaçırdın!
`)
}
if(args[0] === "rakı") {
        let maden2 = Math.round(Math.random() * 3)
        db.add(`rakı_${message.author.id}`, +maden2)
  message.channel.send(`
Rakı kaçakçılığı yapıyordun ve ${maden2} adet rakı kaçırdın!
`)
  }
 
if(args[0] === "bira") {
  let maden5 = Math.round(Math.random() * 5)
        db.add(`bira_${message.author.id}`, +maden5)
     message.channel.send(`
Bira kaçakçılığı yapıyordun ve ${maden5} adet bira kaçırdın!
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
  name: 'kaçakçılık', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};