const Discord = require('discord.js')
const db = require('quick.db');
var ayarlar = require('../ayarlar.json');
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

exports.run = async (client, message, args, perms) => {
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

  const isim = args.slice(0).join(' ');
  const bakiye = await db.fetch(`bakiye_${message.author.id}`);
  const hesapdurumu = await db.fetch(`hesapdurum_${message.author.id}`);
  const hesapismi = await db.fetch(`hesapismi_${message.author.id}`);
  
  
  if(hesapdurumu) return message.channel.send(`Bir hesabınız bulunmakta. Geçerli hesabınızın bilgilerini öğrenmek için: \n\`${client.ekoayarlar.botunuzunprefixi}bilgilerim\``);
  if(hesapismi) return message.channel.send(`Bir hesabınız bulunmakta. Geçerli hesabınızın bilgilerini öğrenmek için: \n\`${client.ekoayarlar.botunuzunprefixi}bilgilerim\``);
  if(!isim) return message.channel.send(`Bir isim girmelisiniz. Doğru Kullanım;\n\`${client.ekoayarlar.botunuzunprefixi}hesap-oluştur <hesap ismi>\``)
  if(!hesapdurumu) {
if(!hesapismi) {
      
  db.set(`hesapdurum_${message.author.id}`, "aktif");
      message.channel.send("Hesabınız aktif edildi!")
      if(client.ekoayarlar.rastgelepara == true) {
        db.set(`hesapismi_${message.author.id}`, isim)
        const yıl = new Date().getFullYear();
        const ay = new Date().getDate();
        const gün = new Date().getMonth();
        db.set(`hesaptarihiçdayreyıl-${message.author.id}`, yıl)
        db.set(`hesaptarihiçdayreay-${message.author.id}`, ay)
        db.set(`hesaptarihiçdayregün-${message.author.id}`, gün)
        db.add(`tahtakazma_${message.author.id}`, 1)
        db.add(`balta_${message.author.id}`, 1)
        const randomizer = getRandomInt(client.ekoayarlar.minpara, client.ekoayarlar.maxpara)
        db.add(`bakiye_${message.author.id}`, randomizer)
        message.channel.send(`Başlangıç parası rastgele olarak **${randomizer} ${client.ekoayarlar.parabirimi}** hesabınıza yatırıldı!`)
      } else {
        if(client.ekoayarlar.rastgelepara == false) {
          db.set(`hesapismi_${message.author.id}`, isim)
          const yıl = new Date().getFullYear();
          const ay = new Date().getDate();
          const gün = new Date().getMonth();
          db.set(`hesaptarihiçdayreyıl-${message.author.id}`, yıl)
          db.set(`hesaptarihiçdayreay-${message.author.id}`, ay)
          db.set(`hesaptarihiçdayregün-${message.author.id}`, gün)
          db.add(`tahtakazma_${message.author.id}`, 1)
          db.add(`balta_${message.author.id}`, 1)
          db.add(`bakiye_${message.author.id}`, client.ekoayarlar.başlangıçparası)
          message.channel.send(`Başlangıç parası olarak **${client.ekoayarlar.başlangıçparası} ${client.ekoayarlar.parabirimi}** hesabınıza yatırıldı!`)
        }
      }
      
    }
 
}


}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hesap'],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
    name: 'hesap-oluştur',
    description: 'Bakiyenizi gösterir.',
    usage: 'cüzdan <@kullanıcı>',
}
