const Discord = require('discord.js');
const db = require('quick.db')

exports.run = (client, message, args) => { 
  let şifre = db.fetch(`sifre_${message.author.id}`)
  if(!şifre) {
    var embed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('**Hata! :warning:**')
.setThumbnail('https://cdn.glitch.com/4c8a4f22-00c9-4c52-8cf1-6c85e13e0fa6%2Fwarning.png?v=1630085460014')
.setDescription('Anlaşılan bir şifre almamışsınız :) \n **!şifre** yazarak şifrenizi alabilirsiniz.')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.addField('Black L.Ş.T.D.İ')
.setTimestamp()  
message.channel.send(embed)  
 return
  }
 message.channel.send(message.member.user.username + ' Kart Şifrenizi özelden yolladım') 
  
    var embed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('Banka Merkezi')
.setThumbnail('https://cdn.glitch.com/4c8a4f22-00c9-4c52-8cf1-6c85e13e0fa6%2Fwarning.png?v=1630085460014')
.setDescription('Selam '+ message.member.user.username + ', \n İşte kart Şifreniz:**' + şifre + '**')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.addField("Black L.Ş.T.D.İ")
.setTimestamp()  
  
  
message.author.send(embed)

};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'şifre-al', 
  description: 'şifre-al', 
  usage: 'şifre-al'
};
