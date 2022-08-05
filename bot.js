require("dotenv").config();
const {Client, Intents, Message}  = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const token = process.env.BOT_TOKEN;

const agents = ["Reyna", "Neon", "Raze", "Cypher", "Viper", "Fade", "Brimstone", "Breach", "Omen", "Phoenix", "Jett", "Kayo", "Sova", "Sage", "Yoru", "Skye", "Astra", "Killjoy", "Chamber"];
const roles = ["Duelist", "Sentinel", "Initiator", "Controller"];
const primary_weapons = ["Odin, Ares, Marshal", "Operator", "Vandal", "Stinger", "Spectre", "Phantom", "Bulldog", "Guardian", "Bucky", "Judge"];
const secondary_weapons = ["Classic", "Ghost", "Frenzy", "Shorty", "Sheriff"];

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

    if(msg.content === "wep#")
    {
        console.log(`Message Author: ${msg} \nMessage Content: ${msg.content}`);
        msg.reply(`@${msg.author.username}, your primary weapon is ` + primary_weapons[Math.floor(Math.random() * primary_weapons.length)] + " and your sidearm is " + secondary_weapons[Math.floor(Math.random() * secondary_weapons.length)]);
    }

    else if(msg.content === "help#")
    {
        msg.reply("To generate a random agent, type gen#");
    }
});

client.login(token);
