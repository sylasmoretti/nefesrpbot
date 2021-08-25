const Discord = require("discord.js");
const db = require("quick.db");
var ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  let member = message.author;
  let member2 = message.mentions.members.first()
  let kllanç = message.mentions.users.first() || message.author;
  const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const hesapdurumu = await db.fetch(`hesapdurum_${kllanç.id}`);
  const hesapismi = await db.fetch(`hesapismi_${kllanç.id}`);
if(!member2) return message.reply("Bir Kullanıcı Etiketlermisin.")
  if (!hesapdurumu) {
    if (args[0])
      return message.reply(
        `Bakmak istediğin kullanıcının bir hesabı bulunmamakta.`
      );
    message.reply(
      `İlk olarak hesap oluşturmalısın. ${ayarlar.prefix}hesap-oluştur <Hesap İsmi>`
    );
  } else {
    if (hesapdurumu) {
        const embedczdn = new Discord.MessageEmbed()
          .setColor(client.ekoayarlar.renk)
          .setDescription(
            `Bankadaki Hesap İsmi: ${hesapismi ? hesapismi : 'Bilinmiyor.'}\n Bakiye: **${bakiye}** Hesap Oluşturma Tarihi: Bilinmiyor`);
        message.channel.send(embedczdn);
      } else {
        if (hesapdurumu) {
          if (hesapismi) {
          }
        }
      }
    
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  katagori: "Ekonomi"
};
exports.help = {
  name: "adminhesap-bilgi",
  description: "hesap-bilgi",
  usage: "adminhesap-bilgi"
};