
const Discord = require("discord.js");
const db = require("quick.db");
var ayarlar = require('../ayarlar.json');
const request = require('node-superfetch');

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
	
  let member = message.author;
  let member2 = message.mentions.members.first()
  let kllanç = message.mentions.users.first() || message.author;
  const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const hesapdurumu = await db.fetch(`hesapdurum_${kllanç.id}`);
  const hesapismi = await db.fetch(`hesapismi_${kllanç.id}`);
  const hesaptarihyıl = await db.fetch(`hesaptarihiçdayreyıl-${kllanç.id}`);
  const hesaptarihay = await db.fetch(`hesaptarihiçdayreay-${kllanç.id}`);
  const hesaptarihgün = await db.fetch(`hesaptarihiçdayregün-${kllanç.id}`)
if(!member2) return message.reply("Bir Kullanıcı Etiketlermisin.")
  if (!hesapdurumu) {
    if (args[0])
      return message.reply(
        `Bakmak istediğin kullanıcının bir hesabı bulunmamakta.`
      );
    message.reply(
      `İlk olarak hesap oluşturmalısın. ${client.ekoayarlar.botunuzunprefixi}hesap-oluştur <Hesap İsmi>`
    );
  } else {
    if (hesapdurumu) {
        const embedczdn = new Discord.MessageEmbed()
          .setColor(client.ekoayarlar.renk)
          .setDescription(
            `Hesap İsmi: ${hesapismi ? hesapismi : 'Bilinmiyor.'}\n Bakiye: **${bakiye}**\n Hesap Oluşturma Tarihi: *${hesaptarihay}/ ${hesaptarihgün}/${hesaptarihyıl}* gününde hesabın oluşturuldu!`
          );
        message.channel.send(embedczdn);
      }
}

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["cüzdan"],
  permLevel: 0,
  katagori: "Ekonomi"
};
exports.help = {
  name: "bakiye",
  description: "Bakiyenizi gösterir.",
  usage: "cüzdan <@kullanıcı>"
};
