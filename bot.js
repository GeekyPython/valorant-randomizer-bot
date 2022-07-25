require("dotenv").config();
const {Client, Intents, Message}  = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const token = process.env.BOT_TOKEN;

const agents = ["Reyna", "Neon", "Raze", "Cypher", "Viper", "Fade", "Brimstone", "Breach", "Omen", "Phoenix", "Jett", "Kayo", "Sova", "Sage", "Yoru", "Skye", "Astra", "Killjoy", "Chamber"];
const roles = ["Duelist", "Sentinel", "Initiator", "Controller"];

client.on('ready', () => {
    console.log(client.user.username + " is online!");
    client.user.setActivity("Sealing fates ;)");
});

client.on('messageCreate', (msg) => {

    //console.log(msg.channel);

    if(msg.content === "gen#")
    {
        console.log(`Message Author: ${msg.author.username} \nMessage Content: ${msg.content}`);
        msg.reply(`@${msg.author.username}, your agent is ` + agents[Math.floor(Math.random() * agents.length)] + " and your role is " + roles[Math.floor(Math.random() * roles.length)]);
    }

    else if(msg.content === "help#")
    {
        msg.reply("To generate a random agent, type gen#");
    }
});

client.login(token);
