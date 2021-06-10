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
let sebep = args[1]
if(!sebep) return message.channel.send(`Lütfen bir sebep belirtiniz!`)
    const hesapdurumu = await db.fetch(`hesapdurum_${uye.id}`);
  if(!hesapdurumu) return message.channel.send(`Kayıtlı olan bir kullanıcı belirtmelisin!`)
db.set(`sistemban_${members.id}`, sebep)
message.channel.send(`Kullanıcı başarıyla ekonomi sisteminden banlandı!`)
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['ekonomi-sistem-banla'],
    permLevel: 0
}

exports.help = {
    name: 'ekonomi-sistem-ban',
    description: 'Kullanıcıların kullanıcı adını tarar.',
    usage: 'tag-taraması <tag>'
}