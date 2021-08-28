const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('ms');

exports.run = async (bot, message, args) => { 

    var bakiye = db.fetch(`bakiye_${message.author.id}`)
    let kullanıcı = message.author;
    let calissüre = await db.fetch(`calissüre_${message.guild.id}_${kullanıcı.id}`)

    let cd = 300000;
    
    if (calissüre !== null && cd - (Date.now() - calissüre) > 0) {
        let timeObj = ms(cd - (Date.now() - calissüre));
    
        message.channel.send`Son zamanlarda zaten çalıştın.\n Tekrar denemek için ${timeObj.seconds}' saniye beklemelisin!'}`)
      } else {

        let cevap = ['Yazılımcı','İnşaatçı','Sucu','Şoför','Balıkçı','Mekanik']

        let sonuç = Math.floor((Math.random() * cevap.length));
        let bakiye = Math.floor(Math.random() * 1000) + 1
        message.channel.send(`${cevap} ve siparişini tamamladığın şirket sana ${bakiye} 💸 ödedi!`)
        
        db.add(`bakiye_${message.guild.id}_${kullanıcı.id}`, bakiye)
        db.set(`calissüre_${message.guild.id}_${kullanıcı.id}`, Date.now())
    };
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çalışma'],
  permLevel: 0
};

module.exports.help = {
  name:"çalışma",
  description: 'çalışma',
  usage: 'çalışma',
}