const codework = require('discord.js')

exports.run = (client, message,args) => {
 const codework1 = new codework.MessageEmbed()
 .setAuthor("GVT", client.user.avatarURL)
  .setColor('BLACK')
  .setTitle("**GVT**") //BURAYA BOTUNUZUN ADINI YAZIN 
 .setURL(`https://discord.com/oauth2/authorize?client_id=843176655827894343&scope=bot&permissions=805314622`) //BURAYA BOTUNUZUN DAVET LİNKİNİ KOYUN
  .setDescription(`                 
 **gvt yardım**, ile yardım alabilirsiniz.
Örnek komut kullanımı: \`gvt çantam\`
Botu davet etmek için: \`gvt davet\`
`)
                  
  .addField("💸 Para komutları", `
Kolay para kazanma komutları;
\`çalış\` \`çal\` \`market\` \`satın-al\` \`sat\` \`bitcoin\` \`soygun\` \`blackmarket\`
`)

   .addField("🤖 Başlangıç", `
Bot komutları;
\`çantam\` \`param\` \`cüzdan\` \`transfer\` \`hesap-oluştur\` \`bilgiler\` \`banka\` \`sıralama\`
`)
 
  .addField("<:minecraft:830212505937903667> Minecraft komutları", `
Kasarak para kazanma komutları;
\`zindan\` \`maden\` \`orman\` \`zindan-sat\` \`odun-sat\` \`maden-sat\` 
`)
 
    .addField("🎡 Casino komutları", `
Kasino para kazanma komutları;
\`slots\` \`balık-tut\`
`)
 
   .addField("🛠️ Ayarlar", `
Ayarlama yapmanız gereken komutları;
\`soygun-log\` 
`)
 
   .addField("🤖 Bot komutları", `
Bot komutları;
\`davet\` \`istatistik\` \`ping\` \`bildir bug/öneri\`
`)
 
   .addField("🕘 Süreli komutlar", `
Süreli para komutları;
\`kredi\` \`günlük-para\`
`) 
 
  .setFooter(`Asperius © | Tüm hakları saklıdır.`)
  
 
 message.channel.send(codework1)
  
}
exports.conf = {
  enable: true, 
  guildOnly: false, 
  aliases: ['ym'], 
  permLevel: 0 
} 
exports.help = {
  name: "yardım", 
  description: "CodeWork V12 MC-AT yardım ", 
  usage: "yardım" 
}

