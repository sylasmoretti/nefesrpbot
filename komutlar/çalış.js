const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms');

exports.run = async (bot, message, args) => { 

    let para = db.fetch(`bakiye_${message.author.id}`)
    let kullanıcı = message.author;
    let sure = await db.fetch(`calissüre_${message.member.id}`)
  
    function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    }    
    let cd = 600000;
    
    if (sure !== null && cd - (Date.now() - sure) > 0) {
        let timeObj = ms(cd - (Date.now() - sure));
    
       let timeEmbed = new Discord.RichEmbed()
        .setDescription(`Bir daha çalışmak için biraz beklemen gerekli **${timeObj.second} saniye** sonra tekrar dene!`);
        message.channel.send(timeEmbed)
      } else {

        const Cevap = ["Yazılımcılık"]
        var cevap = Cevap[Math.floor(Math.random() * Cevap.length)]
        var kazandın = rastgeleMiktar(400,3900)
        message.channel.send(`${Cevap} yaparak siparişini tamamladığın şirket sana ${kazandın} 💸 ödedi!`)
        
        db.add(`bakiye_${message.guild.id}_${kullanıcı.id}`, kazandın)
        db.set(`çalışma_${message.guild.id}_${kullanıcı.id}`, Date.now())
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
  usage: 'çalışma'
  }