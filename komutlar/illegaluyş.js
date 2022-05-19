
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
      message.channel.send(`Bir daha uyuşturucu toplamak için biraz beklemen lazım **${timeObj.seconds} saniye** sonra tekrar dene!`).then(msg => msg.delete({ timeout: `${cd}`}))
    } else {
        if(!hesapd) return message.channel.send("İlk önce hesap oluşturmalısın\nHesap oluşturmak için `!hesap-oluştur <isim>`")

   if(!args[0]) return message.reply(`Bir uyuşturucu belirtiniz. Örnek: !uyuşturucu esrar/kokain/meth/eroin`)
if(args[0] === "esrar") {
        let maden = Math.round(Math.random() * 2)
        db.add(`esrar_${message.author.id}`, maden)
message.channel.send(`
Esrar topluyordun ve ${maden} adet esrar topladın
`)
}
if(args[0] === "kokain") {
  let maden4 = Math.round(Math.random() * 2)
        db.add(`kokain_${message.author.id}`, +maden4)
  message.channel.send(`
Kokain topluyordun ve ${maden4} adet kokain topladın
`)
}
if(args[0] === "eroin") {
  let maden3 = Math.round(Math.random() * 2)
        db.add(`eroin_${message.author.id}`, +maden3)
message.channel.send(`
Eroin topluyordun ve ${maden3} adet eroin topladın
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
  if(args[0] === "meth") {
  let meth = Math.round(Math.random() * 5)
        db.add(`meth_${message.author.id}`, +meth)
     message.channel.send(`
Meth topluyordun ve ${meth} adet meth topladın
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
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'uyuşturucu', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};