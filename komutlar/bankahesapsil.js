const Discord = require('discord.js')
const db = require('quick.db');
var ayarlar = require('../ayarlar.json');



exports.run = async (client, message, args) => {
			  

if(message.author.id !== "671425773902626854") return message.channel.send("Sahip komutu bu");
  const silinecekkllnc = message.mentions.members.first();
  if(!silinecekkllnc) return message.channel.send(`Bir kullanıcı belirtmelisin!`)
  const bakiye = await db.fetch(`bankabakiye_${silinecekkllnc.id}`);
  const hesapdurumu = await db.fetch(`banka_${silinecekkllnc.id}`);
  const kredi = await db.fetch(`kredi_${silinecekkllnc.id}`);
  const altın = await db.fetch(`altın_${silinecekkllnc.id}`);
  
  if(!hesapdurumu) return message.channel.send(`Kayıtlı olan bir kullanıcı belirtmelisin!`)
  db.delete(`bankabakiye_${silinecekkllnc.id}`)
  db.delete(`banka_${silinecekkllnc.id}`)
  db.delete(`kredi_${silinecekkllnc.id}`)
  db.delete(`altın_${silinecekkllnc.id}`)
  message.channel.send(`:+1:`)

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['sil'],
    permLevel: 0
}

exports.help = {
    name: 'bankahesap-sil',
    description: 'Kullanıcıların kullanıcı adını tarar.',
    usage: 'tag-taraması <tag>'
}