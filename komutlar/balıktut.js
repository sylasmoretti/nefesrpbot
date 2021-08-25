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
   let crime = await db.fetch(`baliktutma_${message.author.id}`)

   if (crime !== null && timeout - (Date.now() - crime) > 0) {
        
        let time = ms(timeout - (Date.now() - crime));
    
        message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`⏱ Balık tutmak için ${time.seconds ? time.seconds + ' saniye beklemelisin!' : 'tekrar dene!'}`))
      } else {
     let gerekenpara = 250
     let para = db.fetch(`bakiye_${message.author.id}`)
     if(para < 250) return message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))

                                                .setDescription(`Balık tutmak için marketten olta almalısın! Gereken Para: 250 💸`))
        const result = [
          "KAZANDIN",
          "KAYBETTİN"
        ] 

        let awnser = result[Math.floor(Math.random() * result.length)];
     const cümleler = [
       "Balık oltadan kaçtı","Martının biri gelip balığını kaptı"]
     var cümle = cümleler[Math.floor(Math.random() * cümleler.length)]
     if (awnser === "KAYBETTİN") {
 var kaybettin = 200         
      message.channel.send(new Discord.MessageEmbed()

                           .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                      .setDescription(`${cümle} ve ${kaybettin} 💸 kaybettin!`));
         
      await db.set(`baliktutma_${message.author.id}`, Date.now());
       await db.add(`bakiye_${message.author.id}`, -kaybettin);   
        } else {
 const sentences2 = ["Çipura tuttun","Hamsi tuttun","Kolyoz tuttun","İstavrit tuttun","Köpek balığı tuttun"]
     var sentence2 = sentences2[Math.floor(Math.random() * sentences2.length)]
         var kazandın = rastgeleMiktar(100,900)
    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
      .setColor("GREEN")
      .setDescription(`${sentence2} ve restoran sahibi sana ${kazandın} 💸 ödedi!`)
      message.channel.send(embed)   
     await db.set(`baliktutma_${message.author.id}`, Date.now());
    await db.add(`bakiye_${message.author.id}`, kazandın);

        }}}}
exports.conf = {
  enabled: true,
  aliases: ["balık-tut"],
};

exports.help = {
  name: 'balık-tut',
};