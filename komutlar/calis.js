const Discord = require('discord.js');//Fiber <3 LysteX
const db = require('quick.db')
  const ms = require('ms');
exports.run = async(client, message, args) => {

var bakiye = db.fetch(`para_${message.author.id}`)
var hesapd = db.fetch(`hesapdurum_${message.author.id}`)
let cd = 30000 //30 dk şuan kendinize göre ayarlayınız
let sure = await db.fetch(`calissüre_${message.member.id}`)
     
      if (sure !== null && cd - (Date.now() - sure) > 0) {
        let timeObj = ms(cd - (Date.now() - sure))
      message.channel.send(`Bir daha çalışmak için biraz beklemen gerekli **${timeObj.seconds} saniye** sonra tekrar dene!`)
    } else {
        if(!hesapd) return message.channel.send("İlk önce hesap oluşturmalısın\nHesap oluşturmak için `gvthesap-oluştur <isim>`")
        let gelcekpara = Math.round(Math.random() * 2000)
        db.add(`bakiye_${message.author.id}`, gelcekpara)
   
      message.channel.send('Çalışarak` '+gelcekpara +"` Para Kazandın !")
       

  
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
  name: 'çalış', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};