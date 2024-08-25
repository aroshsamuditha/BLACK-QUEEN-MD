const config = require("../config")
const {cmd , commands} = require('../command')
cmd({
    pattern: "menu",
    desc: "get menu list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
  main:'',
  dounload:'',
  group: '',
  owner:'',
  convert:'',
  search:''
};

  for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

  let madeMenu = `*හායි,${pushname} කෝමද ඉතින්...😙*
  
> *This is Black Queen Comand list 👸🏻♥️*
===========================
✘ *DOWNLOAD COMANDS ⬇️*

${menu.download}

===========================
✘ *MAIN COMANDS 👸🏻*

${menu.main}

===========================
✘ *GROUP COMANDS 👥*

${menu.group}

===========================
✘ *OWNER COMANDS 👿*

${menu.owner}

===========================
✘ *CONVERT COMANDS 🔄*

${menu.convert}

===========================
✘ *SEARCH COMANDS 🔍*

${menu.search}

===========================

*© ʙʟᴀᴄᴋ Qᴜᴇᴇɴ ʙʏ ᴀʀᴏꜱʜ ꜱᴀᴍᴜᴅɪᴛʜᴀ*`

  await conn.sendMessage(from,{text:madeMenu},{quoted:mek})
  
 } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
