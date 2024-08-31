const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/jLWfBj3/BLACK-QUEEN.png",
ALIVE_AUDIO: process.env.ALIVE_AUDIO  || "https://github.com/aroshsamuditha/BLACK-QUEEN-MD/raw/main/Media/alive.MP3",
MENU_AUDIO: process.env.MENU_AUDIO  || "https://github.com/aroshsamuditha/BLACK-QUEEN-MD/raw/main/Media/alive.MP3",
ALIVE_MSG: process.env.ALIVE_MSG || "*ඉන්නව ඉන්නවා තාම පණපිටින් 💭✅*\n\n*👸🏻BLACK QUEEN 🖤🪄*\n`create by Arosh Samuditha`\n\n```Contact Owner:-```\nhttps://wa.me/94761676948?text=*Hellow+Arosh+😁🩷*\n\n🔖අපගේ අනෙකුත් Updates ගැන දැනගැනීමට පහත link වෙත පිවිසෙන්න 🔗\n\n*+ Cool Art Graphic🔗*\n> https://chat.whatsapp.com/FRsIjml10CWAX7NAPF7xIb\n*+ Black Queen Bot Group🔗*\n> https://chat.whatsapp.com/IT6mjqGINN6LaLSKnTZd6r\n*+ FaceBook🔗*\n> https://www.facebook.com/profile.php?id=61550302625124&mibextid=ZbWKwL\n\n*© ʙʟᴀᴄᴋ Qᴜᴇᴇɴ ʙʏ ᴀʀᴏꜱʜ ꜱᴀᴍᴜᴅɪᴛʜᴀ*",
AUTO_READ_STATUS:process.env.AUTO_READ_STATUS || "true",
MODE : process.env.MODE || "public",
AUTO_VOICE : process.env.AUTO_VOICE || "true",
AUTO_STICKER : process.env.AUTO_STICKER || "true",
AUTO_REPLY : process.env.AUTO_REPLY || "true",
MONGODB: process.env.MONGODB || "mdb url",
};
