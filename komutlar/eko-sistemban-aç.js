const Discord = require('discord.js')
const db = require('quick.db');
var ayarlar = require('../ayarlar.json');


exports.run = async (client, message, args) => {
		   let ekoban = db.get(`sistemban_${message.author.id}`)
 if(ekoban) return message.channel.send(
 new Discord.MessageEmbed()
   .setAuthor("Sistem Banı!", message.author.avatarURL())
   .setDescription(`
Ekonomi sisteminden \`${ekoban}\` sebebiyle banlanmışsınız!
Eğer itirazının varsa [Destek Sunucusu](https://discord.gg/Eq67w5gkD7)'na katılarak söyleyebilirsin.
   `)
   .setFooter("Asperius", client.user.avatarURL())
   .setTimestamp()
 )
	
if(message.author.id !== "477050335685509124") if(message.author.id !== "449536056019124234") return message.channel.send("hoop bilader sahip komutu bu");
  const uye = args[0]
if(!uye) return message.channel.send(`Lütfen bir kullanıcı id si girin.`)
let members = client.users.cache.get(uye)
db.delete(`sistemban_${members.id}`)
message.channel.send(`Kullanıcı başarıyla ekonomi sisteminden banı açıldı!`)
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['ekonomi-sistem-banaç', 'eko-sistem-ban-aç'],
    permLevel: 0
}

exports.help = {
    name: 'ekonomi-sistem-ban-aç',
    description: 'Kullanıcıların kullanıcı adını tarar.',
    usage: 'tag-taraması <tag>'
}