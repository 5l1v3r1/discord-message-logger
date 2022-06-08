const Discord = require('discord.js-selfbot');
const colors = require('colors/safe');
const prompt = require('prompt-sync')();
const title = require('node-bash-title');
const client = new Discord.Client();
let token = "";


const guild = prompt('Guild Id: ');


client.on('ready', () => {
    console.log('Запущен!')
    console.clear();
});

client.on('message', async message => {
    title(`${client.user.tag} | ${guild}`)
    let currettime = new Date();
    let curtime = currettime.getHours() + ':' + currettime.getMinutes() + ':' + currettime.getSeconds()
    if (message.author.id === client.user.id) return
    if (message.guild.id != guild) return
    console.log('')
    console.log(colors.brightGreen(`[${message.author.tag}] [${curtime}] ${message.content}`));
    console.log(colors.brightGreen('-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-'))
}

)

client.login(token);
