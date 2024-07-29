let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {
    const vn = './صباح الخير.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `صباح الخير.mp3`}, {quoted: m});
};

handler.help = ['صباح الخير']
handler.tags = ['notification']
handler.command = ['صباح الخير'] 
handler.customPrefix = /^(صباح الخير|صباح الفل|صباحو|صبح)$/i;
handler.command = new RegExp;
export default handler