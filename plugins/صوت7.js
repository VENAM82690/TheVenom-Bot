let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './عيب.mp3.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `عيب.mp3`}, {quoted: m});
};

handler.help = ['عيب']
handler.tags = ['notification']
handler.command = ['عيب.mp3'] 
handler.customPrefix = /^(عيب|عيب يجدعان|متشتمش|عيب يستا|بلاش شتايم)$/i;
handler.command = new RegExp;
export default handler