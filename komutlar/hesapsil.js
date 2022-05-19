const Discord = require('discord.js')
const db = require('quick.db');
var ayarlar = require('../ayarlar.json');



exports.run = async (client, message, args) => {
			  

if(message.author.id !== "852664807383760975") if(message.author.id !== "628321048768806932") return message.channel.send("Sahip komutu bu");
  const silinecekkllnc = message.mentions.members.first();
  if(!silinecekkllnc) return message.channel.send(`Bir kullanıcı belirtmelisin!`)
  const bakiye = await db.fetch(`bakiye_${silinecekkllnc.id}`);
  const hesapdurumu = await db.fetch(`hesapdurum_${silinecekkllnc.id}`);
  const hesapismi = await db.fetch(`hesapismi_${silinecekkllnc.id}`);
  const deger = await db.fetch(`bankabakiye_${silinecekkllnc.id}`)
  
  if(!hesapdurumu) return message.channel.send(`Kayıtlı olan bir kullanıcı belirtmelisin!`)
  db.delete(`bakiye_${silinecekkllnc.id}`)
  db.delete(`hesapdurum_${silinecekkllnc.id}`)
  db.delete(`hesapismi_${silinecekkllnc.id}`)
  db.delete(`bankabakiye_${silinecekkllnc.id}`)
  message.channel.send(`başarıyla hesap silindi!`)

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['hesapsil'],
    permLevel: 0
}

exports.help = {
    name: 'hesap-sil',
    description: 'Kullanıcıların kullanıcı adını tarar.',
    usage: 'tag-taraması <tag>'
}