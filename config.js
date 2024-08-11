const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/vX31j64/BLACK-QUEEN.png",
ALIVE_MSG: process.env.ALIVE_MSG || "*ඉන්නව ඉනවා තාම පණපිටින් 💭✅*\n\n*👸🏻BLACK QUEEN 🖤🪄*\n`create by Arosh Samuditha`\n\n```Contact Owner:-```\nhttps://wa.me/94761676948?text=*Hellow+Arosh+😁🩷*",
};
