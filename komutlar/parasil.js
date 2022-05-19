const Discord = require("discord.js");
const db = require('quick.db')
const ayarlar = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
let user = message.mentions.users.first()
let money = args[1]    
  if(message.author.id !== "628321048768806932") if(message.author.id !== "852664807383760975") if(message.author.id !== "331876597147631619") if(message.author.id !== "850491362805022720") return message.react("❌")
  if(!user) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`Cüzdanından para silinecek kişiyi etiketlemelisin!`))
  if(!args[1]) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`Cüzdandan silinecek para miktarını girmelisin!`)) 
  
if(isNaN(args[1])) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`Cüzdandan silinecek para miktarını girmelisin!`)) 
 
if(args[1] < 0) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`Girdiğin miktar geçerli bir sayı değil !?`)
                                                   );    
 
message.channel.send(new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`✅ ${user} kullanıcısının cüzdanından ${money} 💸 silindi!`))
db.add(`bakiye_${user.id}`,- money)  
}
  

exports.conf = {
  enabled: true,
  aliases: ["parasil"],
};
exports.help = {
  name: 'para-sil',
};