const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('ms');

exports.run = async (bot, message, args) => { 

    var para = db.fetch(`bakiye_${message.author.id}`)
    let kullanıcı = message.author;
    let sure = await db.fetch(`calissüre_${message.member.id}`)

    let cd = 600000;
    
    if (sure !== null && cd - (Date.now() - sure) > 0) {
        let timeObj = ms(cd - (Date.now() - sure));
    
       let timeEmbed = new Discord.RichEmbed()
        .setColor("#eec400")
        .setDescription(`Bir daha çalışmak için biraz beklemen gerekli **${timeObj.second} saniye** sonra tekrar dene!`);
        message.channel.send(timeEmbed)
      } else {

        var cevap = ["Yazılımcılık","Balıkçılık","İtfaiyeci","Fırıncı"]

        var sonuç = Math.floor((Math.random() * cevap.length));
        var para = Math.floor(Math.random() * 3900) + 1
        message.channel.send(`${cevap} yaparak siparişini tamamladığın şirket sana ${para} 💸 ödedi!`)
        
        db.add(`bakiye_${message.guild.id}_${kullanıcı.id}`, para)
        db.set(`sure_${message.guild.id}_${kullanıcı.id}`, Date.now())
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