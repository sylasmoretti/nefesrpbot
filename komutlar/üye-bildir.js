const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  const embed = new Discord.MessageEmbed()
  .setAuthor("GVT", client.user.avatarURL())
  .setDescription(`
  Lütfen ne yapmak istediğinizi belirtiniz.
  gvt bildir öneri <öneriniz> -> Öneri bildirmenizi sağlar:
  gvt bildir bug <bugunuz> -> Bug bildirmenizi sağlar
  `)
if(args[0] === "öneri") {  
    const öneri = args.slice(1).join(' ');
    if(!öneri) return message.channel.send("Bir öneri belirtmelisin. ")
       
  const embed = new Discord.MessageEmbed()
//.setTitle("Bana bir öneride bulundular!")
  .addField("<a:854644350256021514:874593400542871582>  Belirtilen Öneri:", öneri)
  .addField("<a:854644350256021514:874593400542871582>  Öneri Gönderen", `Adı: **${message.author.tag}** - Etiket: <@!${message.author.id}> - İd: **${message.author.id}**`)  
  .setFooter(client.user.username, client.user.avatarURL())
  .setThumbnail(message.author.avatarURL({format: ""}))
  message.channel.send(`Öneriniz başarıyla iletilmiştir <a:874226495613186049:875841616718479361> `)
  client.channels.cache.get("").send(embed)  
}
if(args[0] === "bug") {
  const bug = args.slice(0).join(' ');
  if(!bug) return message.channel.send("Bir öneri belirtmelisin. ")
     
const embed = new Discord.MessageEmbed()
//.setTitle("Bana bir öneride bulundular!")
.addField("<a:854644350256021514:874593400542871582>  Belirtilen Bug:", bug)
.addField("<a:854644350256021514:874593400542871582>  Öneri Gönderen", `Adı: **${message.author.tag}** - Etiket: <@!${message.author.id}> - İd: **${message.author.id}**`)  
.setFooter(client.user.username, client.user.avatarURL())
.setThumbnail(message.author.avatarURL({format: ""}))
message.channel.send(`Bugunuz başarıyla iletilmiştir <a:874226495613186049:875841616718479361> `)
client.channels.cache.get("").send(embed) 
}
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["bildir"],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
name: "bildir",
usage: ""
}