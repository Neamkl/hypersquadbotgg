const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
	
	oynuyor1();
  return new Promise((resolve, reject) => {
	  
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};





          
function oynuyor1() {//burayabirisimyaz yerine Bir İsim Belirle
    return new Promise(resolve => {
        setTimeout(() => {
          
client.user.setActivity(`h!yardım , Bot Daha Fazla Hizmet Vermiyecektir Ve Komut Yüklenmeyecektir Yeni Bot İçin h!desteksunucusu Yazın!`, { type: 'WATCHING'});
//dögüsü yapılacak kodlama

            oynuyor2(); //buraya sıradaki functionun isini yaz (düngü oluşturcağın)
        }, 10000);  //buradaki sayı süredir 5000=5sn | 1000=1sn
      });
}









function oynuyor2() {//burayabirisimyaz yerine Bir İsim Belirle
    return new Promise(resolve => {
        setTimeout(() => {
          
client.user.setActivity(`h!yardım , Bot Daha Fazla Hizmet Vermiyecektir Ve Komut Yüklenmeyecektir Yeni Bot İçin h!desteksunucusu Yazın!"`, { type: 'WATCHING'});
//dögüsü yapılacak kodlama

            oynuyor3(); //buraya sıradaki functionun isini yaz (düngü oluşturcağın)
        }, 20000);  //buradaki sayı süredir 5000=5sn | 1000=1sn
      });
}








function oynuyor3() {//burayabirisimyaz yerine Bir İsim Belirle
    return new Promise(resolve => {
        setTimeout(() => {
          
client.user.setActivity(`h!yardım , Bot Daha Fazla Hizmet Vermiyecektir Ve Komut Yüklenmeyecektir Yeni Bot İçin h!desteksunucusu Yazın!`, { type: 'WATCHING'});
//dögüsü yapılacak kodlama

            oynuyor4(); //buraya sıradaki functionun isini yaz (düngü oluşturcağın)
        }, 15000);  //buradaki sayı süredir 5000=5sn | 1000=1sn
      });
}







function oynuyor4() {//burayabirisimyaz yerine Bir İsim Belirle
    return new Promise(resolve => {
        setTimeout(() => {
          
client.user.setActivity(`h!yardım , Bot Daha Fazla Hizmet Vermiyecektir Ve Komut Yüklenmeyecektir Yeni Bot İçin h!desteksunucusu Yazın!`, { type: 'WATCHING'});
//dögüsü yapılacak kodlama

            oynuyor5(); //buraya sıradaki functionun isini yaz (düngü oluşturcağın)
        }, 10000);  //buradaki sayı süredir 5000=5sn | 1000=1sn
      });
}








function oynuyor5() {//burayabirisimyaz yerine Bir İsim Belirle
    return new Promise(resolve => {
        setTimeout(() => {
          
client.user.setActivity(`h!yardım , Bot Daha Fazla Hizmet Vermiyecektir Ve Komut Yüklenmeyecektir Yeni Bot İçin h!desteksunucusu Yazın!`, { type: 'WATCHING'});
//dögüsü yapılacak kodlama

            oynuyor6(); //buraya sıradaki functionun isini yaz (düngü oluşturcağın)
        }, 15000);  //buradaki sayı süredir 5000=5sn | 1000=1sn
      });
}







function oynuyor6() {//burayabirisimyaz yerine Bir İsim Belirle
    return new Promise(resolve => {
        setTimeout(() => {
          
client.user.setActivity(`h!yardım , Bot Daha Fazla Hizmet Vermiyecektir Ve Komut Yüklenmeyecektir Yeni Bot İçin h!desteksunucusu Yazın!`, { type: 'WATCHING'});
//dögüsü yapılacak kodlama

            oynuyor1(); //buraya sıradaki functionun isini yaz (düngü oluşturcağın)
        }, 19000);  //buradaki sayı süredir 5000=5sn | 1000=1sn
      });
}










// Mustafa Eren'in Kodlaması [Başlangıç]
client.on(`ready`,() => {


	oynuyor1(); // burayı değiştir



	
	
	
	
	

});




client.on('message', msg => {
  if (msg.content.toLowerCase() === 'h!yardım') {
    msg.reply('**Bot Daha Fazla Hizmet Vermiyecektir. h!desteksunucusu Yazarak Nedenini Öğrenebilirsiniz... Elveda**');
  }
});





client.on('message', msg => {
  if (msg.content.toLowerCase() === 'h!desteksunucusu') {
    msg.reply('İşte... :( https://discord.gg/Yssjq7J Kurucuya Burdan Soru Sorabilirsiniz.');
  }
});





client.on('message', msg => {
  if (msg.content.toLowerCase() === '<@484702293594341376>') {
    msg.reply('Bot Daha Fazla Hizmet Vermiyecektir h!desteksunucusu yazarak desteksunucusuna katılabilirsiniz. Ordan kurucuya soru sorabilirsiniz Elveda...');
  }
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.BOT_TOKEN);
