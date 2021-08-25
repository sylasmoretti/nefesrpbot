const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
    let soygunlog = db.get(`soygunlog_${message.guild.id}`)
    if(!soygunlog) {
        const embed = new Discord.MessageEmbed()
        .setAuthor("Guard Bot", client.user.avatarURL())
        .setDescription(`
        Bir soygun log kanalı ayarlanmamış lütfen ayarlayınız \n -> !soygun-log ayarla #kanal
        `)
        .setFooter("Guard Bot", client.user.avatarURL())
        message.channel.send(embed)
    } else {
    let türler = ["kuyumcu","adam","hacker","market","ev"];
    if (!türler.includes(args[0]))
      return message.channel.send(
        `Soyabiliceğiniz şeyler: \`${türler}\`
\`\`\`Bilgi;\`\`\`
**⭐ Pompalı ile bitcoin soyarsınız almak için (!blackmarket bitcoin)
⭐ Uzi ile Kuyumcu soyarsınız almak için (!blackmarket uzi)
⭐hacker ile sistemi soyarsınız almak için (!blackmarket hacker)
⭐Maymuncuk ile evi soyarsınız almak için (!blackmarket maymuncuk)
⭐Bıçak ile adam bıçaklarsınız almak için (!blackmarket bıçak)**
*Örnek: !soy adam @Kullanıcı*
`
      );
  /*global client*/
  let ms = require("parse-ms");

  let timeout = 300000;

  let dbs = require("quick.db");

  let weekly = await dbs.get(`soygun_${message.author.id}`);

  if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
    let time = ms(timeout - (Date.now() - weekly));

    message.reply(
      `Polisler seni heryerde seni arıyor ortalık temizlenince tekrar, soygun yap. (**${time.minutes}dakika ${time.seconds}saniye** beklemelisin)`
    );
  } else {
    let para = await db.fetch(`bakiye_${message.author.id}`);
    
    if (args[0] === "kuyumcu") {
    let ms = require("parse-ms");

    let timeout = 300000;

    let dbs = require("quick.db");

    let weekly = await dbs.get(`kuyumcusoygun_${message.author.id}`);

    if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
      let time = ms(timeout - (Date.now() - weekly));

      message.reply(
        `Polisler seni heryerde seni arıyor ortalık temizlenince tekrar, kuyumcuyu soyabilirsin. (**${time.minutes}dakika ${time.seconds}saniye** beklemelisin)`
      );
    } else {
     var uziadet = await db.fetch(`${message.author.id}.uzi_adet`);
      if (!uziadet) {
        message.reply("**Yanında `Uzi` olmadığı için kuyumcuyu soyamadın ve 1000 TL paran gitti.**");
         await db.set(`bakiye_${message.author.id}`, para - 1000)
      }
      if (uziadet) {

        let para = Math.floor(Math.random() * 350) + 1;

        db.add(`bakiye_${message.author.id}`, para);

        db.set(`${message.author.id}.uzi_adet`, uziadet - 1);

        db.set(`kuyumcusoygun_${message.author.id}`, Date.now());

        let embed = new Discord.MessageEmbed()
          .setDescription(
            `${message.author.tag}, Kuyumcuyu soydun ve ${para} $ kazandın **burdan uzaklaş polis yaklaşıyor**.`
          )
          .setColor("GREEN")
        .setImage("https://media.indiedb.com/images/groups/1/25/24269/giphy.gif")
          .setTimestamp();
        message.channel.send(embed);
        client.channels.cache.get(soygunlog).send(`**${message.author.tag}**, Adlı kullanıcı \`Kuyumcu\`'yu soydu ${para}$ kazandı.`)
      }
    }
  }
  if(args[0] === "adam"){
    let user = message.mentions.users.first();
    if (!user) return message.reply(`Soymak istediğiniz kişiyi etiketleyin.`);

    let targetuser = await db.fetch(`bakiye_${user.id}`);
    let author = await db.fetch(`bakiye_${message.author.id}`);

    let random1 = Math.floor(Math.random() * 150) + 1;

    if (user.id === message.author.id)
      return message.reply(`Soymak istediğiniz kişi siz olamazsınız.`);
    if (user.bot === true) {
     return message.reply(`Botları soycak kadar cani olamazsın.`);
    }

    if (author < 6000) {
      return message.reply(":x: Birini Soymak için 6000$'ye ihtiyacın var.");
    }

    if (!targetuser) {
      return message.channel.send(
        `:x: ${user.username} adlı kullanıcıda para bulunamadı.`
      );
    }
    
    var bıçak = await db.fetch(`${message.author.id}.bıçak_adet`)
  if(!bıçak) return message.reply(`**${user.tag}** adlı kullanıcıyı soymak için \`Bıçak\` lazım.`)
    
    if(db.has(`${user.id}.kalkan`) === true) {
      db.set(`bakiye_${message.author.id}`, author - 1000)
    db.set(`bakiye_${user.id}`, targetuser + 1000);
      client.channels.cache.get(soygunlog).send(`😂 **${message.author.tag}** Adlı kullanıcı **${user.tag}**'ı soycak iken kalkan'a takıldı! ve **${user.tag}** korundu...`)
      return message.reply(`Maalesef! **${user.tag}** Adlı kullanıcı marketten \`1 Günlük Kalkan\` aldığı için onu soyamazsın! (1000 $ kaybettiniz)`)
    }
  if(db.has(`${user.id}.kalkan`) === false) {
  
    let random = Math.floor(Math.random() * 1000) + 1;

    db.set(`para_${message.author.id}`, author + random);

    db.set(`para_${user.id}`, targetuser - random);

    dbs.set(`soygun_${message.author.id}`, Date.now());

    db.set(`${message.author.id}.bıçak_adet`, bıçak - 1)
    
    let embed = new Discord.MessageEmbed()
      .setDescription(
        `${message.author.tag}, **${user.tag}** Soyuldu ve ${random} $ para kaçırdın`
      )
      .setColor("GREEN")
    .setImage("https://i.makeagif.com/media/4-27-2015/aBLrDU.gif")
      .setTimestamp();
    message.channel.send(embed);

    user.send(
      `**${message.author.tag}** adlı kişi tarafından soyuldun ve ${random}$ paran gitti.`
    ).catch(_ => message.channel.send(`**${user.tag}** adlı kullanıcının DMsine mesaj gönderilemedi\ngönderilecek mesaj: \`{message.author.tag} adlı kişi tarafından soyuldun ve ${random}TL paran gitti.\``))
    
     client.channels.cache.get(soygunlog).send(`**${message.author.tag}**, Adlı kullanıcı \`${user.tag}\` Adlı kullanıcıyı soydu ve ${random}$ kazandı.`)
  }
  }
    if (args[0] === "hacker") {
      
      let ms = require("parse-ms");

    let timeout = 300000;

    let dbs = require("quick.db");

    let weekly = await dbs.get(`hackersoygun_${message.author.id}`);

    if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
      let time = ms(timeout - (Date.now() - weekly));

      message.reply(
        `Polisler seni heryerde seni arıyor ortalık temizlenince tekrardan, marketi soyabilirsin. (**${time.minutes}dakika ${time.seconds}saniye** beklemelisin)`
      );
    } else {
     var hackerusbadet = await db.fetch(`${message.author.id}.hackerusb_adet`);
      if (!hackerusbadet) {
        message.reply("**Yanında `hackerusb` olmadığı için sistemi soyamadın ve Polis seni kıskıvrak yakaladı ve 10000 $ para cezası kesti.**");
         await db.set(`bakiye_${message.author.id}`, para - 10000)
      }
      if (hackerusbadet) {

        let para = Math.floor(Math.random() * 10000) + 1;

        db.add(`bakiye_${message.author.id}`, para);

        db.set(`${message.author.id}.hackerusb_adet`, hackerusbadet - 1);

        db.set(`hackersoygun_${message.author.id}`, Date.now());

        let embed = new Discord.MessageEmbed()
          .setDescription(
            `${message.author.tag}, hacker oldun ve sistemi soydun ve ${para}  $ kazandın **burdan uzaklaş polis yaklaşıyor**.`
          )
          .setColor("GREEN")
          .setTimestamp()
        .setImage("https://cdn.glitch.com/4c8a4f22-00c9-4c52-8cf1-6c85e13e0fa6%2F1482260726_giphy.gif?v=1629900404249");
        message.channel.send(embed);
        client.channels.cache.get(soygunlog).send(`**${message.author.tag}**, Adlı kullanıcı \`sistem\`'i soydu ${para}USD kazandı.`)
      }
    }
      
    }
    if (args[0] === "ev") {
      
      let ms = require("parse-ms");

    let timeout = 300000;

    let dbs = require("quick.db");

    let weekly = await dbs.get(`evsoygun_${message.author.id}`);

    if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
      let time = ms(timeout - (Date.now() - weekly));

      message.reply(
        `Polisler seni heryerde seni arıyor ortalık temizlenince tekrardan, evi soyabilirsin. (**${time.minutes}dakika ${time.seconds}saniye** beklemelisin)`
      );
    } else {
     var maymuncukadet = await db.fetch(`${message.author.id}.maymuncuk_adet`);
      if (!maymuncukadet) {
        message.reply("**Yanında `Maymuncuk` olmadığı için evi soyamadın ve Polis seni kıskıvrak yakaladı ve 30000 $ para cezası kesti.**");
         await db.set(`para_${message.author.id}`, para - 30000)
      }
      if (maymuncukadet) {

        let para = Math.floor(Math.random() * 550) + 1;

        db.add(`para_${message.author.id}`, para);

        db.set(`${message.author.id}.maymuncuk_adet`, maymuncukadet - 1);

        db.set(`evsoygun_${message.author.id}`, Date.now());

        let embed = new Discord.MessageEmbed()
          .setDescription(
            `${message.author.tag}, Evi soydun ve ${para}  $ kazandın **burdan uzaklaş polis yaklaşıyor**.`
          )
          .setColor("GREEN")
          .setTimestamp()
        .setImage("https://static.wixstatic.com/media/f9f6e8_dfe88e43dc4044ceb8e2775ca3b17b49~mv2.gif/v1/fit/w_2500,h_1330,al_c/f9f6e8_dfe88e43dc4044ceb8e2775ca3b17b49~mv2.gif");
        message.channel.send(embed);
        client.channels.cache.get(soygunlog).send(`**${message.author.tag}**, Adlı kullanıcı \`ev\`'i soydu ${para} $ kazandı.`)
      }
    }
      
    }
    
           if (args[0] === "bitcoin") {
      
      let ms = require("parse-ms");

    let timeout = 300000;

    let dbs = require("quick.db");

    let weekly = await dbs.get(`bitcoinsoygun_${message.author.id}`);

    if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
      let time = ms(timeout - (Date.now() - weekly));

      message.reply(
        `Polisler seni heryerde seni arıyor ortalık temizlenince tekrardan, bitcoin soyabilirsin. (**${time.minutes}dakika ${time.seconds}saniye** beklemelisin)`
      );
    } else {
     var pompalıadet = await db.fetch(`${message.author.id}.pompalı_adet`);
      if (!pompalıadet) {
        message.reply("**Yanında `pompalı` olmadığı için marketi soyamadın ve Polis seni kıskıvrak yakaladı ve 10000 $ para cezası kesti.**");
         await db.set(`para_${message.author.id}`, para - 10000)
      }
      if (pompalıadet) {

        let para = Math.floor(Math.random() * 3000) + 1;

        db.add(`para_${message.author.id}`, para);

        db.set(`${message.author.id}.pompalı_adet`, pompalıadet - 1);

        db.set(`bitcoinsoygun_${message.author.id}`, Date.now());

        let embed = new Discord.MessageEmbed()
          .setDescription(
            `${message.author.tag}, Bitcoin soydun ve ${para}  $ kazandın **burdan uzaklaş polis yaklaşıyor**.`
          )
          .setColor("GREEN")
          .setTimestamp()
        .setImage("https://static.wixstatic.com/media/f9f6e8_dfe88e43dc4044ceb8e2775ca3b17b49~mv2.gif/v1/fit/w_2500,h_1330,al_c/f9f6e8_dfe88e43dc4044ceb8e2775ca3b17b49~mv2.gif");
        message.channel.send(embed);
        client.channels.cache.get(soygunlog).send(`**${message.author.tag}**, Adlı kullanıcı \`bitcoin\`'i soydu ${para} $ kazandı.`)
      }
    }
      
    }
}
}
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["soygun"],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
name: "soy",
usage: ""
}