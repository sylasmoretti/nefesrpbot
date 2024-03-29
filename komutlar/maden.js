
const Discord = require('discord.js');//Fiber <3 LysteX
const db = require('quick.db')
  const ms = require('ms');
exports.run = async(client, message, args) => {
var bakiye = db.fetch(`para_${message.author.id}`)
var hesapd = db.fetch(`hesapdurum_${message.author.id}`)
var demirkazma = db.get(`demirkazma_${message.author.id}`)
var elmaskazma = db.get(`elmaskazma_${message.author.id}`)
var taşkazma = db.get(`taşkazma_${message.author.id}`)
let cd = 1000 //30 saniye şuan kendinize göre ayarlayınız
let sure = await db.fetch(`calissüre_${message.member.id}`)
     
      if (sure !== null && cd - (Date.now() - sure) > 0) {
        let timeObj = ms(cd - (Date.now() - sure)) 
      message.channel.send(`Bir daha maden kazmak için biraz beklemen gerekli **${timeObj.seconds} saniye** sonra tekrar dene!`).then(msg => msg.delete({ timeout: `${cd}`}))
    } else {
        if(!hesapd) return message.channel.send("İlk önce hesap oluşturmalısın\nHesap oluşturmak için `!hesap-oluştur <isim>`")

   if(!args[0]) return message.reply(`Bir maden belirtiniz. Örnek: !maden zümrüt/elmas/altın/demir/taş/krom/platinyum/bakır`)
if(args[0] === "zümrüt") {
    if(!elmaskazma) return message.reply(`Hiç elmas kazmanız bulunmamaktadır! !market`)
        let maden = Math.round(Math.random() * 2)
        db.add(`zümrüt_${message.author.id}`, maden)
message.channel.send(`
Madendeyken Zümrüt kazıyodun ve ${maden} adet zümrüt kazandın
`)
}
if(args[0] === "elmas") {
  if(!demirkazma) return message.reply(`Hiç demir kazmanız bulunmamaktadır! a?market`)
  let maden4 = Math.round(Math.random() * 3)
        db.add(`elmas_${message.author.id}`, +maden4)
  message.channel.send(`
Madendeyken Elmas kazıyodun ve ${maden4} adet elmas kazandın
`)
}
if(args[0] === "altın") {
    if(!demirkazma) return message.reply(`Hiç demir kazmanız bulunmamaktadır! a?market`)
  let maden3 = Math.round(Math.random() * 4)
        db.add(`altın_${message.author.id}`, +maden3)
message.channel.send(`
Madendeyken Altın kazıyodun ve ${maden3} adet altın kazandın
`)
}
if(args[0] === "demir") {
      if(!taşkazma) return message.reply(`Hiç taş kazmanız bulunmamaktadır! a?market`)
        let maden2 = Math.round(Math.random() * 5)
        db.add(`demir_${message.author.id}`, +maden2)
  message.channel.send(`
Madendeyken Demir kazıyodun ve ${maden2} adet demir kazandın
`)
  }
  if(args[0] === "krom") {
  let maden5 = Math.round(Math.random() * 8)
        db.add(`krom_${message.author.id}`, +maden5)
     message.channel.send(`
Madendeyken Krom kazıyodun ve ${maden5} adet krom kazandın
`)
    }
  if(args[0] === "bakır") {
  let maden5 = Math.round(Math.random() * 9)
        db.add(`bakır_${message.author.id}`, +maden5)
     message.channel.send(`
Madendeyken Bakır kazıyodun ve ${maden5} adet bakır kazandın
`)
}
      if(args[0] === "platinyum") {
  let maden5 = Math.round(Math.random() * 1)
        db.add(`platinyum_${message.author.id}`, +maden5)
     message.channel.send(`
Madendeyken platinyum kazıyodun ve ${maden5} adet platinyum kazandın
`)
}  
if(args[0] === "taş") {
  let maden5 = Math.round(Math.random() * 20)
        db.add(`taş_${message.author.id}`, +maden5)
     message.channel.send(`
Madendeyken Taş kazıyodun ve ${maden5} adet taş kazandın
`)
}     
      
       

  
   db.set(`calissüre_${message.member.id}`, Date.now())
                     }
}
					 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['maden-kaz', 'madenkaz'],
  permLevel: 0
};

exports.help = {
  name: 'maden', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};