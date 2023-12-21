// import { Client } from 'discord.js';
import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

// const client = new Client();
const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMembers,
] });

const token = process.env.TOKEN;

client.on('ready', () => {
    console.log('ready');
});

client.on('messageCreate', async message => {
    console.log(message)
    if(message.channel.id == process.env.CHANNEL_ID){
        await message.react('🐙');
    }else if(message.content == 'タコ'){
        await message.react('🐙');
    }
});

client.login(token);