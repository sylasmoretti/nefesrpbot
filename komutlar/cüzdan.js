const Discord = require("discord.js");
const db = require("quick.db");
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
		  
	
  let member = message.author;
  let member2 = message.mentions.members.first()
  let kllanç = message.mentions.users.first() || message.author;
  const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const hesapdurumu = await db.fetch(`hesapdurum_${kllanç.id}`);
  const hesapismi = await db.fetch(`hesapismi_${kllanç.id}`);
  const hesaptarihyıl = await db.fetch(`hesaptarihyıl_${kllanç.id}`);
  const hesaptarihay = await db.fetch(`hesaptarihay_${kllanç.id}`);
  const hesaptarihgün = await db.fetch(`hesaptarihgün_${kllanç.id}`)
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
            `Bankadaki Hesap İsmi: ${kllanç.id}\n Bakiye: **${bakiye}**\n Hesap Oluşturma Tarihi: *${hesaptarihay}/ ${hesaptarihgün}/${hesaptarihyıl}* gününde hesabın oluşturuldu!`
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
  name: "abakiye",
  description: "Bakiyenizi gösterir.",
  usage: "acüzdan <@kullanıcı>"
};