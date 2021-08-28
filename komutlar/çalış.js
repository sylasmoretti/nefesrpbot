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
    
       let timeEmbed = new Discord.RichEmbed()
        .setColor("#eec400")
        .setDescription(`Bir daha çalışmak için biraz beklemen gerekli **${timeObj.seconds} saniye** sonra tekrar dene!`);
        message.channel.send(timeEmbed)
      } else {

        let cevap = ["Yazılımcılık"]

        let sonuç = Math.floor((Math.random() * cevap.length));
        let bakiye = Math.floor(Math.random() * 4000) + 1
        message.channel.send(`${cevap} yaparak siparişini tamamladığın şirket sana ${bakiye} 💸 ödedi!`)
        
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