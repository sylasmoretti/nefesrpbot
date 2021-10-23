const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms');
exports.run = async (client, message, args) => {   
 
    const hesapdurumu = await db.fetch(`hesapdurum_${message.author.id}`);
  const hesapismi = await db.fetch(`hesapismi_${message.author.id}`);
  
  if(!hesapdurumu) {
    message.channel.send(`İlk olarak hesap oluşturmalısın. ${client.ekoayarlar.botunuzunprefixi}hesap-oluştur <Hesap İsmi>`)
  } else {
   let timeout = 15000;
   function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}   
   let crime = await db.fetch(`calis_${message.author.id}`)

   if (crime !== null && timeout - (Date.now() - crime) > 0) {
        
        let time = ms(timeout - (Date.now() - crime));
    
        message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`⏱ İşte için ${time.seconds ? time.seconds + ' saniye beklemelisin!' : 'tekrar dene!'}`))
      } else {

        const result = [
          "KAZANDIN"
        ] 

 const sentences2 = ["Yazılımcılık","Çöpçülük","Temizlikçilik","Bahçe düzenleme","İnşaatçılık"]
     var sentence2 = sentences2[Math.floor(Math.random() * sentences2.length)]
         var kazandın = rastgeleMiktar(500,3800)
    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
      .setColor("GREEN")
      .setDescription(`${sentence2} işi yaptın ve işi yaptığın yerin sahibi sana ${kazandın} 💸 ödedi!`)
      message.channel.send(embed)   
     await db.set(`calis_${message.author.id}`, Date.now());
    await db.add(`bakiye_${message.author.id}`, kazandın);

        }}}
exports.conf = {
  enabled: true,
  aliases: ["çalış"],
};

exports.help = {
  name: 'çalış',
};