module.exports = {
    description: "Show Commands and the descriptions",
    role: "user",
    credits: "alvarez yhana",
    cooldown: 16,		
    execute(api, event, args, commands) {
        let helpMessage = '𝙷𝚒! 𝚃𝚑𝚒𝚜 𝙱𝚘𝚝 𝚒𝚜 𝚌𝚛𝚎𝚊𝚝𝚎𝚍 by Yhana. 𝗙𝗮𝗶𝗿𝘆 𝗔𝘃𝗮𝗶𝗯𝗹𝗲 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝚒𝚗𝚜𝚝𝚊𝚕𝚕𝚎𝚍 𝚘𝚗 𝚝𝚑𝚒𝚜 𝚜𝚎𝚛𝚟𝚎𝚛\n';
        helpMessage += '💮═══════════════💮\n';
        commands.forEach((command, name) => {
            helpMessage += `𝙽𝚊𝚖𝚎: ${name}\n`;
            helpMessage += `𝙳𝚎𝚜𝚌𝚛𝚒𝚙𝚝𝚒𝚘𝚗: ${command.description || 'No description provided'}\n`;
            helpMessage += `𝚁𝚘𝚕𝚎: ${command.role || 'user'}\n`;
            helpMessage += `Credits: ${command.credits || 'YAFB Community'}\n`;
            helpMessage += `Costs: ${command.coins !== undefined ? command.coins : 'Free'}\n`;
            helpMessage += `Cooldown: ${command.cooldown !== undefined ? command.cooldown : 'No cooldown'}\n`;
            helpMessage += '💮═══════════════💮\n';
        });
        helpMessage += '💬https://www.facebook.com/Yhana.alvarez.445';
        api.sendMessage(helpMessage, event.threadID);
    }
};
